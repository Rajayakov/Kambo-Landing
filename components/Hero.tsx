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

const TRUST = [
  'Каждая церемония начинается с личного разговора.',
  'Консультация занимает 10–15 минут и ни к чему не обязывает.',
  'Если вам Камбо не подходит — мы честно скажем об этом.',
]

const STATS = [
  { value: '400+',  label: 'церемоний' },
  { value: '4000+', label: 'участников' },
  { value: '20',    label: 'лет практики' },
]

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

        {/* Jungle — full-bleed under BOTH columns so the mask on the right reveals it */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/jungle-bg.jpg"
            alt=""
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
            sizes="100vw"
          />
          {/* Overlay: dark on the left for text legibility, nearly clear on the right
              so jungle shows through where the frog photo's mask fades in */}
          <div style={{
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
            <div style={{ marginBottom: '22px' }}>
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
                {HERO.cta1}
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

            {/* Trust */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '360px' }}>
              {TRUST.map((line) => (
                <p
                  key={line}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '12px',
                    color: 'var(--kambo-text-lo)',
                    fontFamily: 'var(--font-onest)',
                    lineHeight: 1.65,
                    opacity: 0.68,
                  }}
                >
                  <span style={{ color: 'var(--kambo-accent)', flexShrink: 0, marginTop: '1px', opacity: 0.85 }}>
                    ✓
                  </span>
                  {line}
                </p>
              ))}
            </div>
          </motion.div>

          {/* ── Right: photo column — mask fade on left edge, no overlay ── */}
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0px, black 220px)',
            maskImage: 'linear-gradient(to right, transparent 0px, black 220px)',
          }}>
            <motion.div
              style={{ position: 'absolute', inset: '-5%', x: bgX, y: bgY }}
              animate={reduce ? {} : { scale: [1, 1.02] }}
              transition={
                reduce
                  ? {}
                  : { duration: 28, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }
              }
            >
              <Image
                src="/hero-kambo.png"
                alt="Камбо — церемония очищения"
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
                sizes="52vw"
              />
            </motion.div>
            <div aria-hidden style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'linear-gradient(to right, rgba(8,18,10,0.38) 0%, transparent 32%)',
            }} />
          </div>
        </div>

      </section>

      {/* ── Guide intro — trust block ── */}
      <section style={{ background: 'var(--kambo-bg)', textAlign: 'center' }}>
        <div style={{
          maxWidth: '600px',
          marginInline: 'auto',
          paddingInline: 'clamp(24px, 5vw, 48px)',
          paddingTop: 'clamp(36px, 4.5vw, 52px)',
          paddingBottom: 'clamp(32px, 4vw, 44px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <p style={{
            fontSize: '12px',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: '#C89A2B',
            fontFamily: 'var(--font-onest)',
            fontWeight: 500,
            marginBottom: '18px',
            opacity: 0.55,
          }}>
            Проводник
          </p>

          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(38px, 4.4vw, 52px)',
            fontWeight: 500,
            color: '#F3EBDD',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            marginBottom: '18px',
          }}>
            Яков Раджуна
          </h2>

          <p style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(16px, 1.7vw, 18px)',
            fontStyle: 'italic',
            color: 'rgba(243,235,221,0.7)',
            lineHeight: 1.5,
            maxWidth: '460px',
            marginBottom: '22px',
          }}>
            Более 20 лет пути, практики и сопровождения людей.
          </p>

          <div style={{
            width: '70px',
            height: '1px',
            background: '#C89A2B',
            opacity: 0.4,
          }} />
        </div>
      </section>

      {/* ── Stats — separate section ── */}
      <section
        style={{
          borderTop: '1px solid var(--kambo-border)',
          background: 'var(--kambo-bg)',
        }}
      >
        <div
          className="h-stats"
          style={{
            maxWidth: 'var(--max-w)',
            marginInline: 'auto',
            paddingInline: 'clamp(24px, 5vw, 64px)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              style={{
                padding: 'clamp(24px, 3vw, 40px) clamp(16px, 2.5vw, 32px)',
                borderRight: i < 2 ? '1px solid var(--kambo-border)' : 'none',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(36px, 5vw, 60px)',
                  color: 'var(--kambo-accent)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.02em',
                  marginBottom: '8px',
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  color: 'var(--kambo-text-lo)',
                  fontFamily: 'var(--font-onest)',
                  opacity: 0.6,
                }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        .h-cta:hover { background: #d4a030 !important; transform: translateY(-1px); }
        .h-cta:active { transform: translateY(1px) !important; }

        @media (max-width: 767px) {
          .h-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .h-grid > div:last-child {
            height: 56vw;
          }
          .h-stats {
            grid-template-columns: 1fr !important;
          }
          .h-stats > div {
            border-right: none !important;
            border-bottom: 1px solid var(--kambo-border) !important;
          }
          .h-stats > div:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </>
  )
}
