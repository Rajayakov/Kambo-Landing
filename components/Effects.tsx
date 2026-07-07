'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'
import { EFFECTS } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

// ── Minimal gold pictograms ────────────────────────────────────────────────
function IconEnergy() {
  return (
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden>
      <path d="M7 17C7 17 2 13 2 8.5C2 5 4.5 2 7 1C9.5 2 12 5 12 8.5C12 13 7 17 7 17Z"
        stroke="currentColor" strokeWidth="0.85" strokeLinejoin="round"/>
      <circle cx="7" cy="9" r="1.5" stroke="currentColor" strokeWidth="0.7"/>
    </svg>
  )
}
function IconDetox() {
  return (
    <svg width="13" height="17" viewBox="0 0 13 17" fill="none" aria-hidden>
      <path d="M6.5 1C6.5 1 12 7.5 12 11C12 14.1 9.5 16.5 6.5 16.5C3.5 16.5 1 14.1 1 11C1 7.5 6.5 1 6.5 1Z"
        stroke="currentColor" strokeWidth="0.85" strokeLinejoin="round"/>
    </svg>
  )
}
function IconClarity() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <path d="M7.5 1L13.5 7.5L7.5 14L1.5 7.5L7.5 1Z"
        stroke="currentColor" strokeWidth="0.85" strokeLinejoin="round"/>
    </svg>
  )
}
function IconBalance() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
      <line x1="1" y1="5.5" x2="17" y2="5.5" stroke="currentColor" strokeWidth="0.85"/>
      <line x1="9" y1="1" x2="9" y2="5.5" stroke="currentColor" strokeWidth="0.85"/>
      <path d="M1 5.5C1 7.5 2.8 9.5 5 9.5C7.2 9.5 9 7.5 9 5.5" stroke="currentColor" strokeWidth="0.85" fill="none"/>
      <path d="M9 5.5C9 7.5 10.8 9.5 13 9.5C15.2 9.5 17 7.5 17 5.5" stroke="currentColor" strokeWidth="0.85" fill="none"/>
    </svg>
  )
}
function IconShield() {
  return (
    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" aria-hidden>
      <path d="M7 1L13 3.8V9C13 12.3 10.4 15.2 7 16.5C3.6 15.2 1 12.3 1 9V3.8L7 1Z"
        stroke="currentColor" strokeWidth="0.85" strokeLinejoin="round"/>
    </svg>
  )
}
function IconStrength() {
  return (
    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" aria-hidden>
      <path d="M1 13.5L8.5 1.5L16 13.5" stroke="currentColor" strokeWidth="0.85" strokeLinejoin="round"/>
      <path d="M4 9.5L8.5 3L13 9.5" stroke="currentColor" strokeWidth="0.85" strokeLinejoin="round" opacity="0.4"/>
    </svg>
  )
}
function IconPresence() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="0.85"/>
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="0.7"/>
    </svg>
  )
}
function IconRenewal() {
  return (
    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" aria-hidden>
      <path d="M7 16.5C4 16.5 1 13.5 1 9.5C1 5.5 4 2 7 1C10 2 13 5.5 13 9.5C13 13.5 10 16.5 7 16.5Z"
        stroke="currentColor" strokeWidth="0.85" strokeLinejoin="round"/>
      <line x1="7" y1="16.5" x2="7" y2="6" stroke="currentColor" strokeWidth="0.85" opacity="0.45"/>
    </svg>
  )
}

const ICONS: Record<string, React.ReactNode> = {
  energy:   <IconEnergy />,
  detox:    <IconDetox />,
  clarity:  <IconClarity />,
  balance:  <IconBalance />,
  immunity: <IconShield />,
  strength: <IconStrength />,
  presence: <IconPresence />,
  renewal:  <IconRenewal />,
}

export default function Effects() {
  const reduce  = useReducedMotion()
  const cells   = EFFECTS.cells
  const featured = cells[0]
  const rest     = cells.slice(1)

  return (
    <section
      id="effects"
      style={{
        paddingBlock: 'var(--section-py)',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section overlay */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(7,18,12,.85) 0%, rgba(7,18,12,.48) 110px, rgba(7,18,12,.65) 100%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      {/* Ambient top shimmer */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(196,146,42,0.45) 30%, rgba(196,146,42,0.45) 70%, transparent)',
        pointerEvents: 'none', zIndex: 1,
      }} />
      <div aria-hidden style={{
        position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '400px',
        background: 'radial-gradient(ellipse at center top, rgba(196,146,42,0.05) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      <div style={{
        maxWidth: 'var(--max-w)',
        marginInline: 'auto',
        paddingInline: 'clamp(20px, 5vw, 48px)',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* ── Header + intro ── */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}
        >
          <div style={{ width: '32px', height: '2px', background: 'var(--kambo-accent)', marginBottom: '18px' }} />
          <h2 style={{
            fontSize: 'var(--text-h2)',
            color: 'var(--kambo-text-hi)',
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 400,
            lineHeight: 1.05,
            marginBottom: 'clamp(16px, 2vw, 22px)',
          }}>
            {EFFECTS.title}
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 1.6vw, 16px)',
            color: 'var(--kambo-text-lo)',
            lineHeight: 1.85,
            maxWidth: '460px',
            opacity: 0.72,
          }}>
            {EFFECTS.intro.split('\n').map((line, i) => (
              <span key={i}>{i > 0 && <br />}{line}</span>
            ))}
          </p>
        </motion.div>

        {/* ── Unified card grid: featured spans 2 of 3 columns ── */}
        <div className="eff-grid">

          {/* Featured: Жизненная энергия */}
          <motion.article
            className="eff-card eff-card--featured"
            initial={reduce ? {} : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.85, delay: 0, ease: EASE }}
            style={{
              background: [
                'radial-gradient(circle at top left, rgba(190,150,70,.05), transparent 50%)',
                'linear-gradient(180deg, rgba(13,28,21,.97), rgba(9,21,16,.96))',
              ].join(', '),
              border: '1px solid rgba(191,157,73,.24)',
              borderRadius: '20px',
              boxShadow: [
                '0 1px 0 rgba(255,255,255,.05) inset',
                '0 0 0 1px rgba(191,157,73,.06) inset',
                '0 28px 72px rgba(0,0,0,.46)',
              ].join(', '),
              padding: 'clamp(36px, 5vw, 56px)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              minHeight: 'clamp(260px, 30vw, 340px)',
            }}
          >
            {/* Radial gold glow top-left */}
            <div aria-hidden style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(circle at top left, rgba(186,148,62,.10), transparent 55%)',
              pointerEvents: 'none',
            }} />
            {/* Gold top accent line */}
            <div aria-hidden style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(to right, var(--kambo-accent) 0%, rgba(196,146,42,0.18) 80%, transparent 100%)',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                color: 'var(--kambo-accent)',
                marginBottom: '24px',
                filter: 'drop-shadow(0 0 4px rgba(196,146,42,0.32))',
                transform: 'scale(1.2)',
                transformOrigin: 'left center',
                display: 'inline-block',
              }}>
                {ICONS[featured.id]}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(36px, 5.4vw, 62px)',
                color: 'var(--kambo-text-hi)',
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '0.01em',
                marginBottom: '24px',
              }}>
                {featured.title}
              </h3>
              <p style={{
                fontSize: 'clamp(14px, 1.6vw, 16px)',
                color: 'rgba(255,255,255,0.82)',
                lineHeight: 1.78,
                maxWidth: '400px',
              }}>
                {featured.body}
              </p>
            </div>
          </motion.article>

          {/* 7 compact cards */}
          {rest.map((cell, i) => (
            <motion.article
              key={cell.id}
              className="eff-card eff-card--small"
              initial={reduce ? {} : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: (i + 1) * 0.065, ease: EASE }}
              style={{
                background: [
                  'radial-gradient(circle at top left, rgba(190,150,70,.05), transparent 50%)',
                  'linear-gradient(180deg, rgba(11,24,18,.96), rgba(8,18,14,.95))',
                ].join(', '),
                border: '1px solid rgba(191,157,73,.20)',
                borderRadius: '20px',
                boxShadow: [
                  '0 1px 0 rgba(255,255,255,.03) inset',
                  '0 0 0 1px rgba(191,157,73,.05) inset',
                  '0 24px 70px rgba(0,0,0,.42)',
                ].join(', '),
                padding: 'clamp(22px, 3vw, 34px)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  color: 'var(--kambo-accent)',
                  marginBottom: '24px',
                  filter: 'drop-shadow(0 0 3px rgba(196,146,42,0.28))',
                  transform: 'scale(1.18)',
                  transformOrigin: 'left center',
                  display: 'inline-block',
                }}>
                  {ICONS[cell.id]}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(20px, 2.4vw, 28px)',
                  color: 'var(--kambo-text-hi)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: '0.01em',
                  marginBottom: '24px',
                }}>
                  {cell.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.82)',
                  lineHeight: 1.78,
                }}>
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
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: EASE }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 'clamp(28px, 4vw, 44px)',
            gap: 'clamp(14px, 1.8vw, 20px)',
          }}
        >
          <div style={{ width: '24px', height: '1px', background: 'rgba(196,146,42,0.25)' }} />
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
            <span>Записаться на консультацию</span>
            <span style={{
              width: '38px', height: '38px', borderRadius: '50%',
              background: 'rgba(11,26,15,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <ArrowRight size={16} weight="bold" />
            </span>
          </a>
        </motion.div>
      </div>

      <style>{`
        /* ── Grid ── */
        .eff-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: clamp(16px, 2.2vw, 26px);
          row-gap: clamp(20px, 3vw, 36px);
        }

        /* ── Featured spans 2 cols by default (overridden on mobile via media query) ── */
        .eff-card--featured { grid-column: span 2; }

        /* ── Card base ── */
        .eff-card {
          transition:
            transform 350ms cubic-bezier(.22,.61,.36,1),
            box-shadow 350ms cubic-bezier(.22,.61,.36,1),
            border-color 350ms cubic-bezier(.22,.61,.36,1),
            background 350ms cubic-bezier(.22,.61,.36,1);
        }

        /* ── Featured hover ── */
        .eff-card--featured:hover {
          transform: translateY(-4px) scale(1.01);
          background: radial-gradient(circle at top left, rgba(190,150,70,.07), transparent 50%),
                      linear-gradient(180deg, rgba(15,32,24,.98), rgba(11,25,18,.97)) !important;
          border-color: rgba(191,157,73,.34) !important;
          box-shadow:
            0 1px 0 rgba(255,255,255,.06) inset,
            0 0 0 1px rgba(191,157,73,.10) inset,
            0 32px 80px rgba(0,0,0,.52) !important;
        }

        /* ── Small card hover ── */
        .eff-card--small:hover {
          transform: translateY(-4px) scale(1.01);
          background: radial-gradient(circle at top left, rgba(190,150,70,.07), transparent 50%),
                      linear-gradient(180deg, rgba(13,27,20,.97), rgba(10,21,16,.96)) !important;
          border-color: rgba(191,157,73,.28) !important;
          box-shadow:
            0 1px 0 rgba(255,255,255,.04) inset,
            0 0 0 1px rgba(191,157,73,.08) inset,
            0 28px 74px rgba(0,0,0,.46) !important;
        }

        /* ── CTA ── */
        .eff-cta:hover { background: #d4a030 !important; transform: translateY(-1px); }
        .eff-cta:active { transform: translateY(1px) !important; }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .eff-grid { grid-template-columns: repeat(2, 1fr); }
          .eff-card--featured { grid-column: span 2; }
        }
        @media (max-width: 520px) {
          .eff-grid { grid-template-columns: 1fr; }
          .eff-card--featured { grid-column: span 1 !important; }
        }

        /* Item 4 — mobile cards: lighter than the section backdrop, with a
           visible gold ring so they don't blend into the dark jungle photo */
        @media (max-width: 767px) {
          .eff-grid {
            row-gap: 14px !important;
            column-gap: 12px !important;
          }
          .eff-card {
            background: linear-gradient(180deg, rgba(34,50,36,0.95), rgba(26,40,28,0.94)) !important;
            border: 1px solid rgba(196,146,42,0.42) !important;
            box-shadow:
              0 0 0 1px rgba(196,146,42,0.10) inset,
              0 10px 26px rgba(0,0,0,0.32),
              0 0 16px rgba(196,146,42,0.08) !important;
          }
          .eff-card--featured {
            padding: 22px 20px !important;
            min-height: auto !important;
          }
          .eff-card--small {
            padding: 18px 18px !important;
          }
          .eff-card--featured h3 { margin-bottom: 12px !important; }
          .eff-card--featured > div > div:first-child { margin-bottom: 14px !important; }
          .eff-card--small h3 { margin-bottom: 12px !important; }
          .eff-card--small > div > div:first-child { margin-bottom: 14px !important; }
        }
      `}</style>
    </section>
  )
}
