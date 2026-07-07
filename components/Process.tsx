'use client'

import { useRef, useEffect } from 'react'
import { useReducedMotion } from 'motion/react'
import Image from 'next/image'
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
    if (!sectionRef.current) return

    // Below 768px the CSS breakpoint forces opacity/transform to their
    // final values with !important (see the mobile media query below) —
    // the fade-in has zero visual effect there, so don't even load GSAP.
    if (window.matchMedia('(max-width: 767px)').matches) return

    let cancelled = false
    let cleanup: (() => void) | undefined

    const init = async () => {
      const { gsap }         = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)

      if (!sectionRef.current) return

      // Animate each step row
      stepsRef.current.forEach((step) => {
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
              once: true,
            },
          }
        )
      })

      // Animate dots
      dotsRef.current.forEach((dot) => {
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
              once: true,
            },
          }
        )
      })

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill())
    }

    // GSAP/ScrollTrigger is only needed once this section is about to enter
    // the viewport — deferring the import keeps it out of the initial load.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect()
          init()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(sectionRef.current)

    return () => {
      cancelled = true
      observer.disconnect()
      cleanup?.()
    }
  }, [reduce])

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{
        paddingBlock: 'var(--section-py)',
        background:
          'linear-gradient(to bottom, rgba(7,18,12,0.4), transparent 110px), linear-gradient(to top, rgba(7,18,12,0.4), transparent 110px), var(--kambo-surface)',
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

        {/* Two-column: timeline left, photo right */}
        <div className="process-layout">

        {/* Left: timeline */}
        <div>
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
                className="process-num-wrap"
                style={{
                  paddingTop: '2px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <span
                  className="process-num"
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
                  className="process-dot"
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
                className="process-step-content"
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
                  className="process-body-full"
                  style={{
                    fontSize: '15px',
                    color: 'var(--kambo-text-lo)',
                    lineHeight: 1.7,
                    maxWidth: '520px',
                  }}
                >
                  {parseBold(step.body)}
                </p>
                <p
                  className="process-body-short"
                  style={{
                    fontSize: '15px',
                    color: 'var(--kambo-text-lo)',
                    lineHeight: 1.7,
                    maxWidth: '520px',
                    display: 'none',
                  }}
                >
                  {parseBold(step.bodyShort)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: sticky photo */}
        <div className="process-photo-col">
          <div className="process-photo-sticky">
            <Image
              src="/kambo-ceremony.webp"
              alt="Церемония Камбо"
              width={600}
              height={800}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '8px',
                border: '1px solid var(--kambo-border)',
                aspectRatio: '3 / 4',
                display: 'block',
              }}
              sizes="(max-width: 767px) 100vw, 40vw"
            />
            <Image
              className="process-photo-second"
              src="/kambo-tools.webp"
              alt="Инструменты для церемонии Камбо"
              width={600}
              height={450}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '8px',
                border: '1px solid var(--kambo-border)',
                aspectRatio: '4 / 3',
                display: 'block',
                marginTop: 'clamp(16px, 2.5vw, 24px)',
              }}
              sizes="(max-width: 767px) 100vw, 40vw"
            />
          </div>
        </div>

        </div>{/* /process-layout */}
      </div>

      <style>{`
        .process-layout {
          display: grid;
          grid-template-columns: 60% 40%;
          gap: clamp(32px, 5vw, 64px);
          align-items: start;
        }
        .process-photo-sticky {
          position: sticky;
          top: 100px;
        }
        @media (max-width: 767px) {
          .process-layout {
            grid-template-columns: 1fr;
          }
          .process-photo-col {
            order: -1;
          }
          .process-photo-sticky {
            position: static;
          }

          /* Critical fix — the GSAP ScrollTrigger fade-in that gates this
             text can fail to fire in production when the section is reached
             via instant/anchor navigation instead of a gradual scroll,
             leaving opacity stuck at 0 forever. Force the text and dots
             visible on mobile; the reveal animation stays desktop-only. */
          .process-step-content { opacity: 1 !important; transform: none !important; }
          .process-dot { opacity: 1 !important; transform: scale(1) !important; }

          /* Item 6 — one photo only on mobile */
          .process-photo-second { display: none !important; }

          /* Item 6 — shorter step copy, same warm tone */
          .process-body-full { display: none !important; }
          .process-body-short { display: block !important; }

          /* Item 6 — stronger visual weight on the step number */
          .process-num-wrap { justify-content: center !important; }
          .process-num {
            display: flex !important;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: rgba(196,146,42,0.12);
            border: 1px solid rgba(196,146,42,0.4);
            font-size: 15px !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  )
}
