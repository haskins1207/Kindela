// Kindela mark: the gradient connection mark + Space Grotesk wordmark.
export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <svg className="logo__mark" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#141B4D" />
            <stop offset="0.24" stopColor="#243A8E" />
            <stop offset="0.46" stopColor="#1E6FB0" />
            <stop offset="0.64" stopColor="#2A9D8F" />
            <stop offset="0.8" stopColor="#4FB59A" />
            <stop offset="1" stopColor="#F2B14C" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#logoGrad)" />
        {/* connection nodes resolving into one hub */}
        <g stroke="#fff" strokeWidth="1.6" fill="none" opacity="0.95">
          <circle cx="10" cy="10" r="2" fill="#fff" />
          <circle cx="22" cy="10" r="2" fill="#fff" />
          <circle cx="10" cy="22" r="2" fill="#fff" />
          <circle cx="16" cy="16" r="2.4" fill="#fff" />
          <path d="M10 10 16 16M22 10 16 16M10 22 16 16" />
        </g>
      </svg>
      <span className="logo__word">Kindela</span>
    </span>
  )
}
