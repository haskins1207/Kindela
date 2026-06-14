import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import WalkthroughModal from './WalkthroughModal'

const WalkthroughContext = createContext({ open: () => {} })

// eslint-disable-next-line react-refresh/only-export-components
export const useWalkthrough = () => useContext(WalkthroughContext)

export default function WalkthroughProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef(null)

  const open = useCallback((trigger) => {
    triggerRef.current = trigger || document.activeElement
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    // Return focus to whatever opened the dialog (accessibility).
    triggerRef.current?.focus?.()
  }, [])

  // Delegate clicks on any in-page CTA pointing at "#walkthrough" so every
  // existing "Request a Walkthrough" / "Start Trial" link opens this modal.
  // If JS is disabled, the links still scroll to the Final CTA (#walkthrough) —
  // progressive enhancement.
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href]')
      if (!link) return
      if ((link.getAttribute('href') || '').endsWith('#walkthrough')) {
        e.preventDefault()
        open(link)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [open])

  // Lock body scroll while the modal is open.
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [isOpen])

  return (
    <WalkthroughContext.Provider value={{ open }}>
      {children}
      <WalkthroughModal open={isOpen} onClose={close} />
    </WalkthroughContext.Provider>
  )
}
