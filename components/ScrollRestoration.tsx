'use client'
import { useEffect } from 'react'

export default function ScrollRestoration() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    function resetScroll() {
      window.scrollTo(0, 0)
      // Drop a stale hash left over from a previous in-page nav click
      // (e.g. #booking) so a resumed/reopened tab can't reproduce it.
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search)
      }
    }

    resetScroll()
    window.addEventListener('load', resetScroll)
    window.addEventListener('pageshow', resetScroll)
    return () => {
      window.removeEventListener('load', resetScroll)
      window.removeEventListener('pageshow', resetScroll)
    }
  }, [])

  return null
}
