import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Strip the `crossorigin` attribute Vite adds to built <script>/<link> tags.
// The static preview is served by a plain file server without CORS headers,
// so a crossorigin (CORS-mode) fetch of same-origin assets gets blocked and
// React never mounts. Removing it makes the bundle load normally.
function stripCrossorigin() {
  return {
    name: 'strip-crossorigin',
    enforce: 'post',
    transformIndexHtml(html) {
      return html.replace(/\s+crossorigin(="[^"]*")?/g, '')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), stripCrossorigin()],
})
