'use client'

import { motion, useReducedMotion } from 'motion/react'
import { TESTIMONIALS } from '@/lib/constants'

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
        {/* ── Testimonials header ── */}
        <motion.div
          className="sp-header"
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
            Отзывы о церемонии
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
            className="sp-featured"
            style={{
              textAlign: 'center',
              paddingBottom: 'clamp(40px, 6vw, 64px)',
              paddingInline: 'clamp(0px, 8vw, 80px)',
            }}
          >
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
              «{TESTIMONIALS.quotes[0].quote}»
            </p>
            <div>
              <div style={{ width: '20px', height: '1px', background: 'rgba(196,146,42,0.4)', marginBottom: '10px', marginInline: 'auto' }} />
              <p style={{ fontSize: '14px', color: 'var(--kambo-text-hi)', fontWeight: 500, letterSpacing: '0.02em' }}>
                {TESTIMONIALS.quotes[0].name}{TESTIMONIALS.quotes[0].age ? `, ${TESTIMONIALS.quotes[0].age}` : ''}
                {TESTIMONIALS.quotes[0].role && (
                  <span style={{ color: 'var(--kambo-text-lo)', fontWeight: 400 }}>
                    {' · '}{TESTIMONIALS.quotes[0].role}
                  </span>
                )}
              </p>
            </div>
          </motion.div>
        )}

        {/* Thin divider */}
        <div className="sp-divider" style={{ height: '1px', background: 'var(--kambo-border)', marginBottom: 'clamp(40px, 6vw, 64px)' }} />

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
            gap: 24px;
          }
        }
        @media (max-width: 767px) {
          .sp-header { margin-bottom: 24px !important; }
          .sp-featured { padding-bottom: 24px !important; }
          .sp-divider { margin-bottom: 24px !important; }
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
