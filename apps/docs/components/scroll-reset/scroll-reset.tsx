'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

function ScrollReset() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        window.scrollTo(0, 0)
      })

      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}

ScrollReset.displayName = 'ScrollReset'

export default ScrollReset
