'use client'

import { motion, useReducedMotion } from 'motion/react'
import { TESTIMONIALS, COUNTERS } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

export default function SocialProof() {
  const reduce = useReducedMotion()

  return (
    <section
      id="proof"
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
        {/* Counters */}
        <div
          style={{
            display: 'flex',
            alignItems: 'stretch',
            marginBottom: '72px',
            paddingBottom: '56px',
            borderBottom: '1px solid var(--kambo-border)',
          }}
          className="counters-row"
        >
          {COUNTERS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              style={{
                flex: 1,
                paddingRight: i < COUNTERS.length - 1 ? 'clamp(20px, 4vw, 48px)' : '0',
                marginRight: i < COUNTERS.length - 1 ? 'clamp(20px, 4vw, 48px)' : '0',
                borderRight: i < COUNTERS.length - 1 ? '1px solid var(--kambo-border)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(44px, 6vw, 72px)',
                  color: 'var(--kambo-text-hi)',
                  lineHeight: 1,
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {c.value}
                <span style={{ color: 'var(--kambo-accent)', fontSize: '0.65em' }}>{c.suffix}</span>
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'var(--kambo-text-lo)',
                  marginTop: '8px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {c.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <h2
          style={{
            fontSize: 'var(--text-h2)',
            color: 'var(--kambo-text-hi)',
            marginBottom: '32px',
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 400,
          }}
        >
          Что говорят
        </h2>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            paddingBottom: '4px',
          }}
        >
          {TESTIMONIALS.quotes.map((q, i) => (
            <motion.div
              key={q.name}
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              style={{
                scrollSnapAlign: 'start',
                flexShrink: 0,
                width: 'clamp(280px, 40vw, 420px)',
                background: 'var(--kambo-surface-hi)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(20px, 3vw, 28px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(17px, 2vw, 20px)',
                  color: 'var(--kambo-text-hi)',
                  lineHeight: 1.65,
                  fontFamily: 'var(--font-cormorant)',
                }}
              >
                &ldquo;{q.quote}&rdquo;
              </p>
              <div style={{ marginTop: 'auto' }}>
                <p style={{ fontSize: '14px', color: 'var(--kambo-text-hi)', fontWeight: 500 }}>
                  {q.name}, {q.age}
                </p>
                {q.role && (
                  <p style={{ fontSize: '13px', color: 'var(--kambo-text-lo)' }}>{q.role}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 479px) {
          .counters-row {
            flex-direction: column !important;
          }
          .counters-row > div {
            padding-right: 0 !important;
            margin-right: 0 !important;
            border-right: none !important;
            padding-bottom: clamp(20px, 4vw, 32px) !important;
            margin-bottom: clamp(20px, 4vw, 32px) !important;
            border-bottom: 1px solid var(--kambo-border) !important;
          }
          .counters-row > div:last-child {
            padding-bottom: 0 !important;
            margin-bottom: 0 !important;
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  )
}
