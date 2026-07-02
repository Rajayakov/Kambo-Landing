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
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow upper-left */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-60px',
          left: '-60px',
          width: '560px',
          height: '360px',
          background: 'radial-gradient(ellipse at 10% 0%, rgba(196,146,42,0.042) 0%, transparent 62%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 'var(--max-w)',
          marginInline: 'auto',
          paddingInline: 'clamp(20px, 5vw, 48px)',
          position: 'relative',
        }}
      >
        {/* ── Counters ── */}
        <div className="sp-counters">
          {COUNTERS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              style={{
                flex: 1,
                paddingRight: i < COUNTERS.length - 1 ? 'clamp(24px, 5vw, 56px)' : '0',
                marginRight: i < COUNTERS.length - 1 ? 'clamp(24px, 5vw, 56px)' : '0',
                borderRight: i < COUNTERS.length - 1 ? '1px solid var(--kambo-border)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(52px, 7.5vw, 88px)',
                  color: 'var(--kambo-accent)',
                  lineHeight: 0.9,
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  fontVariantNumeric: 'tabular-nums',
                  marginBottom: '12px',
                }}
              >
                {c.value}{c.suffix}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--kambo-text-lo)',
                  letterSpacing: '0.09em',
                  textTransform: 'uppercase',
                  lineHeight: 1.4,
                }}
              >
                {c.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            height: '1px',
            background: 'var(--kambo-border)',
            marginBlock: 'clamp(52px, 7vw, 80px)',
          }}
        />

        {/* ── Testimonials header ── */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: EASE }}
          style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}
        >
          <div style={{ width: '32px', height: '2px', background: 'var(--kambo-accent)', marginBottom: '18px' }} />
          <h2
            style={{
              fontSize: 'var(--text-h2)',
              color: 'var(--kambo-text-hi)',
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 400,
              lineHeight: 1.05,
            }}
          >
            Что говорят
          </h2>
        </motion.div>

        {/* ── Testimonials: editorial — 1 featured + 2 supporting ── */}

        {/* Featured quote */}
        {TESTIMONIALS.quotes[0] && (
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: EASE }}
            style={{
              textAlign: 'center',
              paddingBottom: 'clamp(40px, 6vw, 64px)',
              paddingInline: 'clamp(0px, 8vw, 80px)',
            }}
          >
            <span
              aria-hidden
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '88px',
                color: 'var(--kambo-accent)',
                opacity: 0.15,
                lineHeight: 0.6,
                display: 'block',
                marginBottom: '16px',
                userSelect: 'none',
              }}
            >
              &ldquo;
            </span>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(22px, 3vw, 34px)',
                fontStyle: 'italic',
                color: 'var(--kambo-text-hi)',
                lineHeight: 1.55,
                marginBottom: '28px',
                maxWidth: '680px',
                marginInline: 'auto',
              }}
            >
              {TESTIMONIALS.quotes[0].quote}
            </p>
            <p style={{ fontSize: '13px', color: 'var(--kambo-accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              — {TESTIMONIALS.quotes[0].name}{TESTIMONIALS.quotes[0].age ? `, ${TESTIMONIALS.quotes[0].age}` : ''}
              {TESTIMONIALS.quotes[0].role && (
                <span style={{ color: 'var(--kambo-text-lo)', textTransform: 'none', letterSpacing: '0.02em' }}>
                  {' '}· {TESTIMONIALS.quotes[0].role}
                </span>
              )}
            </p>
          </motion.div>
        )}

        {/* Thin divider */}
        <div style={{ height: '1px', background: 'var(--kambo-border)', marginBottom: 'clamp(40px, 6vw, 64px)' }} />

        {/* Two supporting quotes */}
        <div className="sp-testimonials">
          {TESTIMONIALS.quotes.slice(1).map((q, i) => (
            <motion.div
              key={q.name}
              initial={reduce ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: i * 0.14, ease: EASE }}
              style={{
                borderLeft: '1px solid rgba(196,146,42,0.28)',
                paddingLeft: 'clamp(20px, 3vw, 32px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(17px, 1.8vw, 21px)',
                  fontStyle: 'italic',
                  color: 'var(--kambo-text-hi)',
                  lineHeight: 1.68,
                  flex: 1,
                  marginBottom: '20px',
                }}
              >
                «{q.quote}»
              </p>
              <div>
                <div style={{ width: '20px', height: '1px', background: 'rgba(196,146,42,0.35)', marginBottom: '10px' }} />
                <p style={{ fontSize: '14px', color: 'var(--kambo-text-hi)', fontWeight: 500, letterSpacing: '0.02em', lineHeight: 1.3 }}>
                  {q.name}{q.age ? `, ${q.age}` : ''}
                </p>
                {q.role && (
                  <p style={{ fontSize: '12px', color: 'var(--kambo-text-lo)', letterSpacing: '0.05em', marginTop: '4px' }}>
                    {q.role}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .sp-counters {
          display: flex;
          align-items: stretch;
        }
        .sp-testimonials {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(28px, 5vw, 60px);
        }
        @media (max-width: 640px) {
          .sp-testimonials {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }
        @media (max-width: 479px) {
          .sp-counters {
            flex-direction: column !important;
          }
          .sp-counters > div {
            border-right: none !important;
            padding-right: 0 !important;
            margin-right: 0 !important;
            padding-bottom: 28px;
            margin-bottom: 28px;
            border-bottom: 1px solid var(--kambo-border);
          }
          .sp-counters > div:last-child {
            padding-bottom: 0;
            margin-bottom: 0;
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  )
}
