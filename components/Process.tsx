'use client'

import { useRef, useEffect } from 'react'
import { useReducedMotion } from 'motion/react'
import { PROCESS } from '@/lib/constants'

function parseBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} style={{ color: 'var(--kambo-text-hi)', fontWeight: 500 }}>{part}</strong>
      : part
  )
}

export default function Process() {
  const sectionRef  = useRef<HTMLElement>(null)
  const stepsRef    = useRef<HTMLDivElement[]>([])
  const dotsRef     = useRef<HTMLDivElement[]>([])
  const reduce      = useReducedMotion()

  useEffect(() => {
    if (reduce) return

    const init = async () => {
      const { gsap }         = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!sectionRef.current) return

      // Animate each step row
      stepsRef.current.forEach((step, i) => {
        if (!step) return
        gsap.fromTo(
          step,
          { opacity: 0, x: 24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Animate dots
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      return () => ScrollTrigger.getAll().forEach((t) => t.kill())
    }

    const cleanup = init()
    return () => { cleanup.then((fn) => fn?.()) }
  }, [reduce])

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{
        paddingBlock: 'var(--section-py)',
        background: 'var(--kambo-surface)',
        borderTop: '1px solid var(--kambo-border)',
        borderBottom: '1px solid var(--kambo-border)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-w)',
          marginInline: 'auto',
          paddingInline: 'clamp(20px, 5vw, 48px)',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <div style={{ width: '32px', height: '2px', background: 'var(--kambo-accent)', marginBottom: '18px' }} />
          <h2
            style={{
              fontSize: 'var(--text-h2)',
              color: 'var(--kambo-text-hi)',
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 400,
            }}
          >
            {PROCESS.title}
          </h2>
        </div>

        {/* Timeline rows */}
        <div style={{ maxWidth: '760px' }}>
          {PROCESS.steps.map((step, i) => (
            <div
              key={step.n}
              style={{
                display: 'grid',
                gridTemplateColumns: '32px 24px 1fr',
                gap: '0 20px',
                position: 'relative',
              }}
            >
              {/* Number */}
              <div
                style={{
                  paddingTop: '2px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(20px, 2.5vw, 28px)',
                    color: 'var(--kambo-accent)',
                    lineHeight: 1,
                    fontWeight: 400,
                    fontVariantNumeric: 'tabular-nums',
                    opacity: 0.75,
                  }}
                >
                  {step.n}
                </span>
              </div>

              {/* Dot + line column */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 0,
                }}
              >
                {/* Dot */}
                <div
                  ref={(el) => { if (el) dotsRef.current[i] = el }}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--kambo-accent)',
                    flexShrink: 0,
                    marginTop: '5px',
                    transform: reduce ? 'scale(1)' : 'scale(0)',
                    opacity: reduce ? 1 : 0,
                    boxShadow: '0 0 8px rgba(196,146,42,0.35)',
                  }}
                />
                {/* Connecting line (not on last item) */}
                {i < PROCESS.steps.length - 1 && (
                  <div
                    style={{
                      width: '1px',
                      flexGrow: 1,
                      background: 'linear-gradient(to bottom, var(--kambo-accent), var(--kambo-border))',
                      opacity: 0.45,
                      marginBlock: '6px',
                    }}
                  />
                )}
              </div>

              {/* Step content */}
              <div
                ref={(el) => { if (el) stepsRef.current[i] = el }}
                style={{
                  paddingBottom: i < PROCESS.steps.length - 1 ? 'clamp(28px, 4vw, 44px)' : '0',
                  opacity: reduce ? 1 : 0,
                }}
              >
                <h3
                  style={{
                    fontSize: 'clamp(17px, 2vw, 21px)',
                    color: 'var(--kambo-text-hi)',
                    fontFamily: 'var(--font-cormorant)',
                    fontWeight: 400,
                    marginBottom: '10px',
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--kambo-text-lo)',
                    lineHeight: 1.7,
                    maxWidth: '520px',
                  }}
                >
                  {parseBold(step.body)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
