"""Static file server tuned for the Claude preview proxy.

Serving the Kindela production build for preview has three gotchas, all handled here:

1. CORS — ES module scripts are fetched in CORS mode against the proxy origin.
   Without Access-Control-Allow-Origin the browser blocks the bundle
   ("Failed to fetch dynamically imported module") even though a same-origin
   plain fetch works. We send `*`.

2. Connection handling — HTTP/1.1 keep-alive intermittently RESETs mid-transfer,
   so we force `Connection: close` (a fresh connection per request).

3. Transfer size — the ~235KB JS bundle stalls/resets through the proxy when sent
   raw. We gzip text assets so the bundle goes over the wire at ~70KB, which
   delivers reliably and lets React mount.

Usage: python serve.py <port> <directory>
"""
import functools
import gzip
import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

COMPRESS_EXT = (".js", ".css", ".html", ".svg", ".json", ".map")


class PreviewHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        # Content-hashed assets are immutable — let the proxy cache them so the
        # large JS bundle is fetched once instead of re-pulled on every load
        # (repeated large transfers through the proxy intermittently stall the
        # module load). HTML stays uncached so rebuilds show up.
        if self.path.startswith("/assets/"):
            self.send_header("Cache-Control", "public, max-age=31536000, immutable")
        else:
            self.send_header("Cache-Control", "no-store")
        self.send_header("Connection", "close")
        self.close_connection = True
        super().end_headers()

    def do_GET(self):
        path = self.translate_path(self.path)
        accepts_gzip = "gzip" in self.headers.get("Accept-Encoding", "")
        if accepts_gzip and os.path.isfile(path) and path.endswith(COMPRESS_EXT):
            try:
                with open(path, "rb") as f:
                    body = gzip.compress(f.read())
            except OSError:
                return super().do_GET()
            self.send_response(200)
            self.send_header("Content-Type", self.guess_type(path))
            self.send_header("Content-Encoding", "gzip")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        return super().do_GET()


port = int(sys.argv[1]) if len(sys.argv) > 1 else 5174
directory = sys.argv[2] if len(sys.argv) > 2 else "."

Handler = functools.partial(PreviewHandler, directory=directory)
Handler.protocol_version = "HTTP/1.1"

httpd = ThreadingHTTPServer(("127.0.0.1", port), Handler)
print(f"Serving {directory} on http://127.0.0.1:{port} (threaded, CORS, gzip)")
httpd.serve_forever()
