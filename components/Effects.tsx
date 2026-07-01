'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'
import { EFFECTS } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']

function FernMark() {
  return (
    <svg
      aria-hidden
      width="108" height="156"
      viewBox="0 0 100 145"
      fill="none"
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.06,
        pointerEvents: 'none',
        flexShrink: 0,
      }}
    >
      <path
        d="M50 140 C50 140 10 108 7 70 C4 34 24 6 50 2 C76 6 96 34 93 70 C90 108 50 140 50 140Z"
        fill="var(--kambo-accent)"
      />
      <line x1="50" y1="140" x2="50" y2="2" stroke="rgba(196,146,42,0.55)" strokeWidth="0.7" />
      <path d="M50 50 C34 43 16 47 10 60" stroke="rgba(196,146,42,0.45)" strokeWidth="0.65" />
      <path d="M50 70 C66 63 82 66 88 78" stroke="rgba(196,146,42,0.45)" strokeWidth="0.65" />
      <path d="M50 88 C37 82 22 85 15 97" stroke="rgba(196,146,42,0.45)" strokeWidth="0.65" />
      <path d="M50 106 C62 101 76 103 82 113" stroke="rgba(196,146,42,0.45)" strokeWidth="0.65" />
    </svg>
  )
}

export default function Effects() {
  const reduce = useReducedMotion()
  const cells  = EFFECTS.cells

  const featured = cells.filter(c => c.size === 'large')
  const small    = cells.filter(c => c.size === 'small')

  const romanOf = (id: string) => {
    const idx = cells.findIndex(c => c.id === id)
    return ROMAN[idx] ?? ''
  }

  return (
    <section
      id="effects"
      style={{
        paddingBlock: 'var(--section-py)',
        background: 'var(--kambo-bg)',
        borderTop: '1px solid var(--kambo-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gold horizon shimmer at top of section */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(196,146,42,0.55) 30%, rgba(196,146,42,0.55) 70%, transparent)',
          pointerEvents: 'none',
        }}
      />
      {/* Radial gold glow — upper center */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse at center top, rgba(196,146,42,0.055) 0%, transparent 65%)',
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
        {/* ── Header ── */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: EASE }}
          style={{ marginBottom: 'clamp(36px, 5.5vw, 60px)' }}
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
            {EFFECTS.title}
          </h2>
        </motion.div>

        {/* ── Featured row: two tall showcase cards ── */}
        <div className="eff-featured">
          {featured.map((cell, i) => (
            <motion.article
              key={cell.id}
              className="eff-card-featured"
              initial={reduce ? {} : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: i * 0.14, ease: EASE }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(16,30,20,0.82)',
                border: '1px solid rgba(196,146,42,0.18)',
                borderTop: '2px solid var(--kambo-accent)',
                borderRadius: '2px',
                padding: 'clamp(28px, 3.8vw, 48px)',
                minHeight: 'clamp(210px, 26vw, 300px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              {/* Large Roman numeral — visual anchor */}
              <span
                aria-hidden
                style={{
                  position: 'absolute',
                  top: '-14px',
                  right: '20px',
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(88px, 13vw, 160px)',
                  color: 'var(--kambo-accent)',
                  opacity: 0.14,
                  lineHeight: 1,
                  fontWeight: 400,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  letterSpacing: '-0.04em',
                }}
              >
                {romanOf(cell.id)}
              </span>

              {/* Botanical mark */}
              <FernMark />

              {/* Inner glow — bottom right */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '260px',
                  height: '200px',
                  background: 'radial-gradient(ellipse at 80% 100%, rgba(196,146,42,0.07) 0%, transparent 65%)',
                  pointerEvents: 'none',
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Eyebrow: small roman number */}
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '12px',
                    color: 'var(--kambo-accent)',
                    letterSpacing: '0.18em',
                    marginBottom: '14px',
                    opacity: 0.75,
                    textTransform: 'uppercase',
                  }}
                >
                  {romanOf(cell.id)}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(26px, 3.4vw, 44px)',
                    color: 'var(--kambo-text-hi)',
                    fontWeight: 400,
                    lineHeight: 1.08,
                    letterSpacing: '-0.01em',
                    marginBottom: 'clamp(12px, 1.6vw, 20px)',
                  }}
                >
                  {cell.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--kambo-text-lo)',
                    lineHeight: 1.75,
                    maxWidth: '360px',
                    fontFamily: 'var(--font-onest)',
                  }}
                >
                  {cell.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Small items grid: 3 columns ── */}
        <div className="eff-grid">
          {small.map((cell, i) => (
            <motion.article
              key={cell.id}
              className="eff-card-small"
              initial={reduce ? {} : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(10,22,13,0.7)',
                border: '1px solid rgba(46,74,50,0.6)',
                borderTop: '1px solid rgba(196,146,42,0.35)',
                borderRadius: '2px',
                padding: 'clamp(18px, 2.6vw, 28px)',
              }}
            >
              {/* Watermark Roman numeral */}
              <span
                aria-hidden
                style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '10px',
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(48px, 6.5vw, 80px)',
                  color: 'var(--kambo-accent)',
                  opacity: 0.1,
                  lineHeight: 1,
                  fontWeight: 400,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  letterSpacing: '-0.03em',
                }}
              >
                {romanOf(cell.id)}
              </span>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(17px, 2.1vw, 23px)',
                    color: 'var(--kambo-text-hi)',
                    fontWeight: 400,
                    lineHeight: 1.15,
                    marginBottom: '10px',
                  }}
                >
                  {cell.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--kambo-text-lo)',
                    lineHeight: 1.72,
                    fontFamily: 'var(--font-onest)',
                  }}
                >
                  {cell.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(40px, 6vw, 64px)' }}
        >
          <a
            href="#booking"
            className="eff-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--kambo-accent)',
              color: 'var(--kambo-bg)',
              paddingLeft: '28px',
              paddingRight: '8px',
              height: '52px',
              borderRadius: '999px',
              fontSize: '15px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              transition: 'background 0.25s ease, transform 0.15s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Записаться на церемонию
            <span style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(11,26,15,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <ArrowRight size={16} weight="bold" />
            </span>
          </a>
        </motion.div>
      </div>

      <style>{`
        .eff-featured {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(14px, 2.2vw, 24px);
          margin-bottom: clamp(14px, 2.2vw, 24px);
        }
        .eff-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(12px, 1.8vw, 20px);
        }
        @media (max-width: 767px) {
          .eff-featured { grid-template-columns: 1fr; }
          .eff-grid     { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 479px) {
          .eff-grid { grid-template-columns: 1fr; }
        }
        .eff-card-featured {
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .eff-card-featured:hover {
          border-color: rgba(196,146,42,0.42) !important;
          box-shadow: 0 0 0 1px rgba(196,146,42,0.15), 0 20px 52px rgba(0,0,0,0.45);
        }
        .eff-card-small {
          transition: border-top-color 0.2s ease, box-shadow 0.2s ease;
        }
        .eff-card-small:hover {
          border-top-color: rgba(196,146,42,0.65) !important;
          box-shadow: 0 8px 28px rgba(0,0,0,0.32), 0 0 0 1px rgba(196,146,42,0.12);
        }
        .eff-cta:hover { background: var(--kambo-accent-hi) !important; transform: translateY(-1px); }
        .eff-cta:active { transform: translateY(1px); }
      `}</style>
    </section>
  )
}
