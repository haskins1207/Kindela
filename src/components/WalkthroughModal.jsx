import { useEffect, useRef } from 'react'
import Icon from './Icon'
import WalkthroughForm from './WalkthroughForm'

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function WalkthroughModal({ open, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const dialog = dialogRef.current
    // Focus the first field when the dialog opens.
    const first = dialog.querySelector(FOCUSABLE)
    first?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab') {
        const items = [...dialog.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null)
        if (!items.length) return
        const firstEl = items[0]
        const lastEl = items[items.length - 1]
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault()
          lastEl.focus()
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault()
          firstEl.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="wt-overlay"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="wt-dialog" role="dialog" aria-modal="true" aria-labelledby="wt-title" ref={dialogRef}>
        <button type="button" className="wt-close" onClick={onClose} aria-label="Close">
          <Icon name="x" size={20} />
        </button>
        <WalkthroughForm onDone={onClose} />
      </div>
    </div>
  )
}
