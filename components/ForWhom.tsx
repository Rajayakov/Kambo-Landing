'use client'

import { useRef, useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { FOR_WHOM } from '@/lib/constants'

export default function ForWhom() {
  const stickyRef  = useRef<HTMLDivElement>(null)
  const reduce     = useReducedMotion()

  const numberRef  = useRef<HTMLSpanElement>(null)
  const tagRef     = useRef<HTMLSpanElement>(null)
  const dotsRef    = useRef<(HTMLDivElement | null)[]>([])
  const itemRefs   = useRef<(HTMLDivElement | null)[]>([])
  const beforeRefs = useRef<(HTMLParagraphElement | null)[]>([])
  const afterRefs  = useRef<(HTMLParagraphElement | null)[]>([])

  function updateActiveItem(idx: number) {
    const item = FOR_WHOM.items[idx]
    if (!item) return
    if (numberRef.current) numberRef.current.textContent = item.n
    if (tagRef.current) tagRef.current.textContent = item.tag
    dotsRef.current.forEach((dot, i) => {
      if (!dot) return
      const active = i === idx
      dot.style.width = active ? '24px' : '8px'
      dot.style.borderRadius = active ? '4px' : '50%'
      dot.style.background = active ? 'var(--kambo-accent)' : 'var(--kambo-border)'
    })
  }

  useEffect(() => {
    if (reduce) return
    if (typeof window !== 'undefined' && window.innerWidth < 768) return

    let mounted = true

    const init = async () => {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      if (!mounted || !stickyRef.current) return

      const items = FOR_WHOM.items
      const N     = items.length
      const SEG   = 1 / N

      // Initial states
      items.forEach((_, i) => {
        const itemEl   = itemRefs.current[i]
        const beforeEl = beforeRefs.current[i]
        const afterEl  = afterRefs.current[i]
        if (itemEl)   gsap.set(itemEl, { opacity: i === 0 ? 1 : 0 })
        if (beforeEl) gsap.set(beforeEl, { opacity: 1, y: 0 })
        if (afterEl)  gsap.set(afterEl, { opacity: 0, y: 22 })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stickyRef.current,
          pin: true,
          anticipatePin: 1,
          start: 'top top',
          end: '+=300vh',
          scrub: 0.8,
          onUpdate: (self) => {
            const idx = Math.min(Math.floor(self.progress * N), N - 1)
            updateActiveItem(idx)
          },
        },
      })

      items.forEach((_, i) => {
        const seg      = i * SEG
        const beforeEl = beforeRefs.current[i]
        const afterEl  = afterRefs.current[i]
        const itemEl   = itemRefs.current[i]
        const nextEl   = i < N - 1 ? itemRefs.current[i + 1] : null

        if (beforeEl) tl.to(beforeEl, { opacity: 0, y: -22, duration: SEG * 0.42 }, seg + SEG * 0.12)
        if (afterEl)  tl.fromTo(afterEl, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: SEG * 0.38 }, seg + SEG * 0.40)

        if (nextEl && itemEl) {
          tl.to(itemEl, { opacity: 0, duration: SEG * 0.07 }, seg + SEG * 0.91)
          tl.set(nextEl, { opacity: 1 }, seg + SEG)
        }
      })

      document.fonts.ready.then(() => {
        if (mounted) ScrollTrigger.refresh()
      })

      return () => {
        tl.scrollTrigger?.kill()
        tl.kill()
        ScrollTrigger.getAll().forEach((t) => t.kill())
      }
    }

    const cleanupPromise = init()
    return () => {
      mounted = false
      cleanupPromise.then((fn) => fn?.())
    }
  }, [reduce])

  // Stacked layout — used for mobile and prefers-reduced-motion
  function StackedCards() {
    return (
      <div
        style={{
          maxWidth: 'var(--max-w)',
          marginInline: 'auto',
          paddingInline: 'clamp(20px, 5vw, 48px)',
        }}
      >
        <div style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
          <div style={{ width: '32px', height: '2px', background: 'var(--kambo-accent)', marginBottom: '18px' }} />
          <h2
            style={{
              fontSize: 'var(--text-h2)',
              fontFamily: 'var(--font-cormorant)',
              color: 'var(--kambo-text-hi)',
              fontWeight: 400,
            }}
          >
            {FOR_WHOM.title}
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {FOR_WHOM.items.map((item, i) => (
            <motion.div
              key={item.n}
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'var(--kambo-surface)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(20px, 4vw, 32px)',
                borderLeft: '2px solid var(--kambo-accent)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '52px',
                    color: 'var(--kambo-accent)',
                    opacity: 0.28,
                    lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {item.n}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    color: 'var(--kambo-accent)',
                    fontWeight: 500,
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <p style={{ fontSize: '15px', color: 'var(--kambo-text-lo)', lineHeight: 1.75, marginBottom: '16px' }}>
                {item.before}
              </p>
              <div style={{ height: '1px', background: 'var(--kambo-border)', marginBottom: '16px' }} />
              <p
                style={{
                  fontSize: 'clamp(17px, 2vw, 20px)',
                  fontFamily: 'var(--font-cormorant)',
                  color: 'var(--kambo-accent)',
                  lineHeight: 1.6,
                }}
              >
                {item.after}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  if (reduce) {
    return (
      <section
        id="for-whom"
        style={{
          paddingBlock: 'var(--section-py)',
          background: 'var(--kambo-bg)',
          borderTop: '1px solid var(--kambo-border)',
        }}
      >
        <StackedCards />
      </section>
    )
  }

  return (
    <section
      id="for-whom"
      style={{ background: 'var(--kambo-bg)', borderTop: '1px solid var(--kambo-border)' }}
    >
      {/* Desktop: GSAP-pinned scroll section — hidden on mobile via CSS */}
      <div className="fw-desktop" ref={stickyRef} style={{ height: '100dvh', position: 'relative', overflow: 'hidden' }}>
        {/* Section header — fixed top */}
        <div style={{ position: 'absolute', top: '88px', left: 0, right: 0, zIndex: 2 }}>
          <div style={{ maxWidth: 'var(--max-w)', marginInline: 'auto', paddingInline: 'clamp(20px, 5vw, 48px)' }}>
            <div style={{ width: '32px', height: '2px', background: 'var(--kambo-accent)', marginBottom: '18px' }} />
            <h2
              style={{
                fontSize: 'var(--text-h2)',
                fontFamily: 'var(--font-cormorant)',
                color: 'var(--kambo-text-hi)',
                fontWeight: 400,
              }}
            >
              {FOR_WHOM.title}
            </h2>
          </div>
        </div>

        {/* Centered card area */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              maxWidth: 'var(--max-w)',
              width: '100%',
              paddingInline: 'clamp(20px, 5vw, 48px)',
              position: 'relative',
            }}
          >
            {/* Large background number */}
            <span
              ref={numberRef}
              aria-hidden
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -45%)',
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(150px, 22vw, 200px)',
                color: 'var(--kambo-text-hi)',
                opacity: 0.06,
                lineHeight: 1,
                fontWeight: 400,
                userSelect: 'none',
                pointerEvents: 'none',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {FOR_WHOM.items[0].n}
            </span>

            {/* Tag label */}
            <span
              ref={tagRef}
              style={{
                display: 'inline-block',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--kambo-accent)',
                fontWeight: 500,
                marginBottom: '20px',
              }}
            >
              {FOR_WHOM.items[0].tag}
            </span>

            {/* Text crossfade layer */}
            <div style={{ position: 'relative', height: 'clamp(130px, 18vh, 200px)' }}>
              {FOR_WHOM.items.map((item, i) => (
                <div
                  key={item.n}
                  ref={(el) => { itemRefs.current[i] = el }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    willChange: 'opacity',
                    opacity: i === 0 ? 1 : 0,
                  }}
                >
                  <p
                    ref={(el) => { beforeRefs.current[i] = el }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      fontSize: 'clamp(16px, 1.9vw, 21px)',
                      color: 'var(--kambo-text-lo)',
                      lineHeight: 1.75,
                      maxWidth: '620px',
                      willChange: 'opacity, transform',
                    }}
                  >
                    {item.before}
                  </p>
                  <p
                    ref={(el) => { afterRefs.current[i] = el }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      fontSize: 'clamp(18px, 2.2vw, 26px)',
                      fontFamily: 'var(--font-cormorant)',
                      color: 'var(--kambo-accent)',
                      lineHeight: 1.55,
                      maxWidth: '620px',
                      opacity: 0,
                      willChange: 'opacity, transform',
                    }}
                  >
                    {item.after}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            zIndex: 2,
          }}
        >
          {FOR_WHOM.items.map((_, i) => (
            <div
              key={i}
              ref={(el) => { dotsRef.current[i] = el }}
              style={{
                width: i === 0 ? '24px' : '8px',
                height: '8px',
                borderRadius: i === 0 ? '4px' : '50%',
                background: i === 0 ? 'var(--kambo-accent)' : 'var(--kambo-border)',
                transition:
                  'width 0.38s cubic-bezier(0.16,1,0.3,1), border-radius 0.38s cubic-bezier(0.16,1,0.3,1), background 0.25s ease',
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Mobile stacked layout */}
      <div
        className="fw-mobile"
        style={{ display: 'none', paddingBlock: 'var(--section-py)' }}
      >
        <StackedCards />
      </div>

      <style>{`
        @media (max-width: 767px) {
          .fw-desktop { display: none !important; }
          .fw-mobile  { display: block !important; }
        }
      `}</style>
    </section>
  )
}
