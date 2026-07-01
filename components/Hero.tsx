'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown } from '@phosphor-icons/react'
import { HERO } from '@/lib/constants'

const EASE = [0.32, 0.72, 0, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        overflow: 'hidden',
      }}
    >
      {/* Фото на весь блок */}
      <Image
        src="/hero-kambo.png"
        alt="Церемония Камбо"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(0.72) saturate(0.9)' }}
        sizes="100vw"
      />

      {/* Тёмный верх (заголовок читается) → прозрачная середина (лягушка) → тёмный низ (текст читается) */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(11,26,15,0.90) 0%, rgba(11,26,15,0.0) 30%, rgba(11,26,15,0.0) 65%, rgba(11,26,15,0.90) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* H1 — прибит к верху, выше лягушки */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          paddingTop: '88px',
          paddingInline: 'clamp(24px, 6vw, 60px)',
          textAlign: 'center',
        }}
      >
        <motion.h1
          style={{
            fontSize: 'clamp(28px, 5.5vw, 72px)',
            lineHeight: 1.05,
            color: 'var(--kambo-text-hi)',
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            textShadow: '0 2px 24px rgba(11,26,15,0.95)',
          }}
          initial={reduce ? {} : { opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          {HERO.h1}
        </motion.h1>
      </div>

      {/* Сабтайтлы + кнопки — прибиты к низу, ниже лягушки */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          paddingBottom: '16px',
          paddingInline: 'clamp(24px, 6vw, 60px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
        }}
        initial={reduce ? {} : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
      >
        {/* Subtitles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
          {HERO.subtitles.map((line) => (
            <p
              key={line}
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(20px, 2.8vw, 34px)',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.3,
                letterSpacing: '0.015em',
                textAlign: 'center',
                textShadow: '0 2px 12px rgba(0,0,0,1), 0 0 32px rgba(0,0,0,0.95)',
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
          <a
            href={HERO.cta2href}
            className="hero-cta-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--kambo-accent)',
              color: 'var(--kambo-bg)',
              paddingLeft: '24px',
              paddingRight: '6px',
              height: '50px',
              borderRadius: '999px',
              fontSize: '15px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
              transition: 'background 0.25s cubic-bezier(0.32,0.72,0,1), transform 0.15s cubic-bezier(0.32,0.72,0,1)',
              textDecoration: 'none',
            }}
          >
            {HERO.cta2}
            <span
              className="hero-cta-icon"
              style={{
                width: '36px', height: '36px',
                borderRadius: '50%',
                background: 'rgba(11,26,15,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'transform 0.3s cubic-bezier(0.32,0.72,0,1)',
              }}
            >
              <ArrowDown size={16} weight="bold" />
            </span>
          </a>
        </div>

        {/* Proof stats pill */}
        {(() => {
          const parts = HERO.proof.split(' · ').map(p => {
            const i = p.indexOf(' ')
            return { num: p.slice(0, i), label: p.slice(i + 1) }
          })
          return (
            <div
              className="hero-proof-pill"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0',
                background: 'rgba(8,18,10,0.52)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(196,146,42,0.22)',
                borderRadius: '999px',
                padding: '8px 20px',
              }}
            >
              {parts.map((p, i) => (
                <div key={p.num} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                  {i > 0 && (
                    <div
                      className="hero-proof-divider"
                      style={{ width: '1px', height: '20px', background: 'rgba(196,146,42,0.25)', marginInline: '14px' }}
                    />
                  )}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span
                      className="hero-proof-num"
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: 'clamp(17px, 2.2vw, 22px)',
                        color: 'var(--kambo-accent)',
                        fontWeight: 500,
                        lineHeight: 1,
                      }}
                    >
                      {p.num}
                    </span>
                    <span
                      className="hero-proof-label"
                      style={{
                        fontSize: '10px',
                        color: 'rgba(240,230,200,0.6)',
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {p.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )
        })()}
      </motion.div>

      <style>{`
        .hero-cta-primary:hover {
          background: var(--kambo-accent-hi) !important;
          transform: translateY(-1px);
        }
        .hero-cta-primary:active { transform: translateY(1px); }
        .hero-cta-primary:hover .hero-cta-icon { transform: translate(2px, -2px); }
        .hero-cta-secondary:hover {
          border-color: rgba(240,230,200,0.45) !important;
          color: rgba(240,230,200,0.95) !important;
        }
        .hero-cta-secondary:hover .hero-cta-icon-ghost { transform: translate(2px, 0); }
        @media (max-width: 479px) {
          .hero-proof-pill { padding: 6px 12px !important; }
          .hero-proof-num { font-size: 13px !important; }
          .hero-proof-label { font-size: 8px !important; letter-spacing: 0.05em !important; }
          .hero-proof-divider { margin-inline: 8px !important; height: 16px !important; }
        }
      `}</style>
    </section>
  )
}
