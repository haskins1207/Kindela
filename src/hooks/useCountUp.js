import { useEffect, useRef, useState } from 'react'

// Animated count-up that starts when the element scrolls into view.
// Respects prefers-reduced-motion (jumps straight to the target).
export function useCountUp(target, { duration = 1600, start = true } = {}) {
  const [val, setVal] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!start) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVal(target)
      return
    }
    let startTs = null
    const step = (ts) => {
      if (startTs === null) startTs = ts
      const p = Math.min((ts - startTs) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(target * eased)
      if (p < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [target, duration, start])

  return val
}
