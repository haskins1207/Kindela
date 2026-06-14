import { useEffect, useState } from 'react'
import Icon from './Icon'

const STORAGE_KEY = 'kindela-theme'

// Initial theme is set by the inline script in index.html (no flash of wrong
// theme). Here we just read what it decided and keep it in sync.
function getInitialTheme() {
  if (typeof document !== 'undefined' && document.documentElement.dataset.theme) {
    return document.documentElement.dataset.theme
  }
  return 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore private-mode storage errors */
    }
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Icon name={isDark ? 'sun' : 'moon'} size={20} />
    </button>
  )
}
