'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown } from '@phosphor-icons/react'
import { HERO } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

function LeafIcon() {
  return (
    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" aria-hidden>
      <path
        d="M6.5 15C6.5 15 1.5 11.5 1.5 7.5C1.5 4 3.7 1.2 6.5 1C9.3 1.2 11.5 4 11.5 7.5C11.5 11.5 6.5 15 6.5 15Z"
        fill="rgba(196,146,42,0.75)"
      />
      <line x1="6.5" y1="15" x2="6.5" y2="2.5" stroke="rgba(196,146,42,0.45)" strokeWidth="0.8" />
      <path d="M6.5 8.5C4.5 7.5 2.5 8 1.8 9.5" stroke="rgba(196,146,42,0.38)" strokeWidth="0.7" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden style={{ flexShrink: 0, marginTop: '1px' }}>
      <path
        d="M7 1L12.5 3.5V7.5C12.5 10.5 10 12.8 7 13.5C4 12.8 1.5 10.5 1.5 7.5V3.5L7 1Z"
        stroke="rgba(196,146,42,0.45)"
        strokeWidth="0.85"
      />
    </svg>
  )
}

const BOTTOM_STATS = [
  { value: '400+',   label: 'ЦЕРЕМОНИЙ',    sub: 'проведено с вниманием и заботой' },
  { value: '4000+',  label: 'ЧЕЛОВЕК',      sub: 'прошли церемонию и получили поддержку' },
  { value: '20 лет', label: 'ПРАКТИКИ',     sub: 'духовный путь, знания и служение людям' },
]

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="hero"
      style={{ position: 'relative', overflow: 'hidden', background: 'var(--kambo-bg)' }}
    >
      {/* ── Main two-column grid ── */}
      <div
        className="hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '54% 46%',
          maxWidth: 'var(--max-w)',
          marginInline: 'auto',
          width: '100%',
          paddingInline: 'clamp(24px, 5vw, 52px)',
          paddingTop: 'clamp(130px, 15vw, 172px)',
          paddingBottom: 'clamp(48px, 6vw, 72px)',
          minHeight: '88dvh',
          alignItems: 'center',
        }}
      >
        {/* ── Left: Text column ── */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingRight: 'clamp(20px, 4vw, 52px)',
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'var(--kambo-accent)',
              fontFamily: 'var(--font-onest)',
              fontWeight: 500,
              marginBottom: '14px',
              opacity: 0.9,
            }}
          >
            {HERO.eyebrow}
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(80px, 13vw, 156px)',
              fontWeight: 400,
              color: 'var(--kambo-text-hi)',
              lineHeight: 0.9,
              letterSpacing: '-0.025em',
              marginBottom: '20px',
            }}
          >
            {HERO.h1}
          </h1>

          {/* Gold rule */}
          <div
            style={{
              width: '44px',
              height: '1px',
              background: 'var(--kambo-accent)',
              opacity: 0.65,
              marginBottom: '20px',
            }}
          />

          {/* Italic subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(20px, 2.8vw, 30px)',
              fontStyle: 'italic',
              color: 'var(--kambo-text-hi)',
              lineHeight: 1.3,
              opacity: 0.88,
              marginBottom: 'clamp(28px, 4vw, 44px)',
            }}
          >
            {HERO.subtitle}
          </p>

          {/* Bullets */}
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0',
              display: 'flex',
              flexDirection: 'column',
              gap: '13px',
              marginBottom: 'clamp(32px, 4.5vw, 52px)',
            }}
          >
            {HERO.bullets.map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '11px',
                  fontSize: '15px',
                  color: 'var(--kambo-text-lo)',
                  lineHeight: 1.45,
                  fontFamily: 'var(--font-onest)',
                }}
              >
                <LeafIcon />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <div style={{ marginBottom: '16px' }}>
            <a
              href={HERO.cta1href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-pill"
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
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
                transition: 'background 0.22s ease, transform 0.14s ease',
                textDecoration: 'none',
              }}
            >
              {HERO.cta1}
              <span
                className="hero-cta-icon"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(8,18,10,0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'transform 0.28s ease',
                }}
              >
                <ArrowDown size={16} weight="bold" />
              </span>
            </a>
          </div>

          {/* Trust note */}
          <p
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              fontSize: '12px',
              color: 'var(--kambo-text-lo)',
              lineHeight: 1.7,
              opacity: 0.56,
              maxWidth: '340px',
            }}
          >
            <ShieldIcon />
            {HERO.trust}
          </p>
        </motion.div>

        {/* ── Right: Photo ── */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.15, ease: EASE }}
          className="hero-photo-wrap"
          style={{
            position: 'relative',
            borderRadius: '6px',
            overflow: 'hidden',
            aspectRatio: '4/5',
            alignSelf: 'stretch',
          }}
        >
          <Image
            src="/hero-kambo.png"
            alt="Яков Раджуна — проводник Камбо"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: '64% 20%' }}
            sizes="(max-width: 767px) 0px, 46vw"
          />
          {/* fade left edge into bg */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(8,18,10,0.55) 0%, transparent 32%)',
              pointerEvents: 'none',
            }}
          />
          {/* fade bottom */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 60%, rgba(8,18,10,0.48) 100%)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </div>

      {/* ── Bottom strip: Проводник + 3 stats ── */}
      <div
        style={{
          borderTop: '1px solid var(--kambo-border)',
          background: 'rgba(8,18,10,0.35)',
        }}
      >
        <div
          className="hero-bottom"
          style={{
            maxWidth: 'var(--max-w)',
            marginInline: 'auto',
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr 1fr 1fr',
            paddingInline: 'clamp(24px, 5vw, 52px)',
          }}
        >
          {/* Проводник cell */}
          <div
            style={{
              padding: 'clamp(20px, 2.8vw, 30px) clamp(16px, 2vw, 28px) clamp(20px, 2.8vw, 30px) 0',
              borderRight: '1px solid var(--kambo-border)',
            }}
          >
            <p
              style={{
                fontSize: '10px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--kambo-accent)',
                fontFamily: 'var(--font-onest)',
                fontWeight: 500,
                marginBottom: '8px',
                opacity: 0.8,
              }}
            >
              Проводник
            </p>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(18px, 2vw, 24px)',
                color: 'var(--kambo-text-hi)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                marginBottom: '7px',
              }}
            >
              Яков Раджуна
            </p>
            <p
              style={{
                fontSize: '12px',
                color: 'var(--kambo-text-lo)',
                lineHeight: 1.6,
                opacity: 0.65,
              }}
            >
              Более 20 лет духовной практики
            </p>
          </div>

          {/* 3 stat cells */}
          {BOTTOM_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.09, ease: EASE }}
              style={{
                padding: 'clamp(20px, 2.8vw, 30px) clamp(16px, 2vw, 28px)',
                borderRight: i < 2 ? '1px solid var(--kambo-border)' : 'none',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(30px, 4vw, 50px)',
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
                  fontSize: '9px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--kambo-accent)',
                  fontFamily: 'var(--font-onest)',
                  opacity: 0.65,
                  marginBottom: '5px',
                }}
              >
                {s.label}
              </p>
              <p
                style={{
                  fontSize: '12px',
                  color: 'var(--kambo-text-lo)',
                  lineHeight: 1.55,
                  opacity: 0.6,
                }}
              >
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-cta-pill:hover {
          background: #d4a030 !important;
          transform: translateY(-1px);
        }
        .hero-cta-pill:active { transform: translateY(1px) !important; }
        .hero-cta-pill:hover .hero-cta-icon { transform: translateY(2px); }

        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
            padding-top: clamp(100px, 18vw, 130px) !important;
          }
          .hero-photo-wrap { display: none !important; }
          .hero-bottom {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-bottom > div:nth-child(1) {
            grid-column: 1 / -1;
            border-right: none !important;
            border-bottom: 1px solid var(--kambo-border);
            padding-right: 0 !important;
          }
          .hero-bottom > div:nth-child(3) { border-right: none !important; }
          .hero-bottom > div:nth-child(4) { border-right: none !important; }
        }
        @media (max-width: 479px) {
          .hero-bottom {
            grid-template-columns: 1fr !important;
          }
          .hero-bottom > div {
            border-right: none !important;
            border-bottom: 1px solid var(--kambo-border) !important;
          }
          .hero-bottom > div:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  )
}
