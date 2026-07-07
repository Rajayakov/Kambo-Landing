'use client'

import Image from 'next/image'
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
  useSpring,
} from 'motion/react'
import { ArrowDown } from '@phosphor-icons/react'
import { HERO } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

function LeafIcon() {
  return (
    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" aria-hidden>
      <path
        d="M6.5 15C6.5 15 1.5 11.5 1.5 7.5C1.5 4 3.7 1.2 6.5 1C9.3 1.2 11.5 4 11.5 7.5C11.5 11.5 6.5 15 6.5 15Z"
        fill="rgba(196,146,42,0.95)"
      />
      <line x1="6.5" y1="15" x2="6.5" y2="2.5" stroke="rgba(196,146,42,0.55)" strokeWidth="0.8" />
      <path d="M6.5 8.5C4.5 7.5 2.5 8 1.8 9.5" stroke="rgba(196,146,42,0.48)" strokeWidth="0.7" />
    </svg>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rawX   = useTransform(mouseX, [-0.5, 0.5], [-8, 8])
  const rawY   = useTransform(mouseY, [-0.5, 0.5], [-4, 4])
  const bgX    = useSpring(rawX, { stiffness: 55, damping: 22 })
  const bgY    = useSpring(rawY, { stiffness: 55, damping: 22 })

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - r.left) / r.width - 0.5)
    mouseY.set((e.clientY - r.top) / r.height - 0.5)
  }
  function onMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  function scrollToBooking(e: React.MouseEvent) {
    e.preventDefault()
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Hero ── */}
      <section
        id="hero"
        style={{ position: 'relative', overflow: 'hidden', background: 'var(--kambo-bg)' }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >

        {/* Jungle — full-bleed under BOTH columns so the mask on the right reveals it.
            Mobile: hidden — the frog/hands photo is the only image on small screens. */}
        <div className="h-jungle-layer" aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/jungle-bg.webp"
            alt=""
            fill
            loading="lazy"
            style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
            sizes="100vw"
          />
          {/* Overlay: dark on the left for text legibility, nearly clear on the right
              so jungle shows through where the frog photo's mask fades in */}
          <div className="h-jungle-overlay" style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(8,18,10,0.80) 0%, rgba(8,18,10,0.80) 42%, rgba(8,18,10,0.32) 52%, rgba(8,18,10,0.08) 62%, transparent 76%)',
          }} />
        </div>

        <div
          className="h-grid"
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: '48% 52%',
            minHeight: '92dvh',
            alignItems: 'stretch',
          }}
        >
          {/* ── Left: text only ── */}
          <motion.div
            className="h-text-col"
            initial={reduce ? {} : { opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, ease: EASE }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingTop: 'clamp(100px, 10vw, 140px)',
              paddingBottom: 'clamp(100px, 10vw, 140px)',
              paddingLeft: 'clamp(28px, 5vw, 80px)',
              paddingRight: 'clamp(24px, 4vw, 56px)',
            }}
          >
            {/* Eyebrow — increased ~27%, wider tracking */}
            <p
              style={{
                fontSize: '19px',
                letterSpacing: '0.38em',
                textTransform: 'uppercase',
                color: 'var(--kambo-accent)',
                fontFamily: 'var(--font-onest)',
                fontWeight: 500,
                marginBottom: '18px',
                opacity: 0.9,
              }}
            >
              {HERO.eyebrow}
            </p>

            {/* H1 — unchanged */}
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(72px, 9.5vw, 130px)',
                fontWeight: 400,
                color: 'var(--kambo-text-hi)',
                lineHeight: 0.88,
                letterSpacing: '-0.025em',
                marginBottom: '22px',
              }}
            >
              {HERO.h1}
            </h1>

            {/* Gold rule */}
            <div
              style={{
                width: '48px',
                height: '1px',
                background: 'var(--kambo-accent)',
                opacity: 0.6,
                marginBottom: '22px',
              }}
            />

            {/* Subtitle */}
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(20px, 2.6vw, 32px)',
                fontStyle: 'italic',
                color: 'var(--kambo-text-hi)',
                lineHeight: 1.24,
                maxWidth: '400px',
                marginBottom: 'clamp(30px, 4vw, 46px)',
              }}
            >
              Возвращение<br />к собственной природе
            </p>

            {/* Bullets */}
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: 'clamp(40px, 5vw, 58px)',
              }}
            >
              {HERO.bullets.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15px',
                    color: 'var(--kambo-text-lo)',
                    fontFamily: 'var(--font-onest)',
                    lineHeight: 1.4,
                  }}
                >
                  <LeafIcon />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA — scroll to #booking */}
            <div className="h-cta-wrap" style={{ marginBottom: '22px' }}>
              <a
                href="#booking"
                onClick={scrollToBooking}
                className="h-cta"
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
                  fontFamily: 'var(--font-onest)',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s ease, transform 0.14s ease',
                }}
              >
                <span>{HERO.cta1}</span>
                <span
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(8,18,10,0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <ArrowDown size={16} weight="bold" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* ── Right: photo column — mask fade on left edge, no overlay ──
              Mobile: mask + overlay removed, frame shifted right so the frog
              isn't tucked under the text column above it. */}
          <div className="h-photo-mask" style={{
            position: 'relative',
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0px, black 220px)',
            maskImage: 'linear-gradient(to right, transparent 0px, black 220px)',
          }}>
            {/* Slow Ken-Burns zoom — pure CSS, not motion-driven: this loops
                forever for as long as the page is open, so it must run on the
                compositor thread instead of ticking JS every frame. */}
            <div className="h-photo-zoom" style={{ position: 'absolute', inset: '-5%' }}>
              <motion.div
                style={{ width: '100%', height: '100%', x: bgX, y: bgY }}
              >
                <Image
                  src="/hero-kambo.webp"
                  alt="Камбо — церемония очищения"
                  fill
                  priority
                  fetchPriority="high"
                  className="h-photo-img"
                  style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
                  sizes="(max-width: 767px) 110vw, 58vw"
                />
              </motion.div>
            </div>
            <div className="h-photo-overlay" aria-hidden style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'linear-gradient(to right, rgba(8,18,10,0.38) 0%, transparent 32%)',
            }} />
            {/* Mobile-only: dark scrim so the text column sitting on top of the photo stays legible */}
            <div className="h-photo-scrim-mobile" aria-hidden style={{
              position: 'absolute', inset: 0, pointerEvents: 'none', display: 'none',
            }} />
          </div>
        </div>

      </section>

      <style>{`
        .h-cta:hover { background: #d4a030 !important; transform: translateY(-1px); }
        .h-cta:active { transform: translateY(1px) !important; }

        .h-photo-zoom { animation: h-zoom 28s ease-in-out infinite alternate; }
        @keyframes h-zoom { from { transform: scale(1); } to { transform: scale(1.02); } }
        @media (prefers-reduced-motion: reduce) {
          .h-photo-zoom { animation: none; }
        }

        @media (max-width: 767px) {
          .h-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }

          /* Item 1 — the frog/hands photo becomes a full-bleed backdrop that
             sits BEHIND the text column instead of a separate block below it.
             Text column stays in normal flow (defines the section height);
             photo column is pulled out of flow and stretched to cover it. */
          .h-jungle-layer { display: none !important; }

          .h-text-col {
            position: relative !important;
            z-index: 2 !important;
          }
          .h-grid > div:last-child {
            position: absolute !important;
            inset: 0 !important;
            height: 100% !important;
            z-index: 0 !important;
          }

          /* No left-edge fade mask on mobile — the photo fills the whole area */
          .h-photo-mask {
            -webkit-mask-image: none !important;
            mask-image: none !important;
          }
          .h-photo-img {
            object-position: 50% 38% !important;
          }
          .h-photo-overlay { display: none !important; }

          /* Item 1 — dark scrim over the full photo so the overlaid text reads clearly */
          .h-photo-scrim-mobile {
            display: block !important;
            background: linear-gradient(180deg, rgba(11,26,15,0.55) 0%, rgba(11,26,15,0.72) 45%, rgba(11,26,15,0.88) 100%) !important;
          }

          /* CTA — bullets sit tight under the button, no extra air */
          .h-cta-wrap { margin-bottom: 8px !important; }
        }
      `}</style>
    </>
  )
}
