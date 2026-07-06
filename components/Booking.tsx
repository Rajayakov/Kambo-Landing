'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Check } from '@phosphor-icons/react'
import { BOOKING } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

const INCLUDES = [
  'Предварительная консультация',
  'Проверка противопоказаний',
  'Поддержка после церемонии',
]

const CARD_BG = [
  'radial-gradient(circle at top center, rgba(196,146,42,.04), transparent 55%)',
  'linear-gradient(180deg, rgba(14,30,20,.96), rgba(10,22,15,.98))',
].join(', ')

const CARD_SHADOW = [
  '0 1px 0 rgba(255,255,255,.04) inset',
  '0 0 0 1px rgba(196,146,42,.08) inset',
  '0 24px 64px rgba(0,0,0,.42)',
].join(', ')

// ── Card ─────────────────────────────────────────────────────────────────────

interface CardProps {
  tag: string
  title: string
  body: string
  price: string
  priceUnit?: string
  ctaHref: string
  delay?: number
  reduce: boolean | null
}

function ExperienceCard({ tag, title, body, price, priceUnit, ctaHref, delay = 0, reduce }: CardProps) {
  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className="bk-card"
      style={{
        flex: 1,
        background: CARD_BG,
        border: '1px solid rgba(196,146,42,.22)',
        borderRadius: '16px',
        boxShadow: CARD_SHADOW,
        padding: 'clamp(36px, 5vw, 56px)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent 0%, rgba(196,146,42,.55) 35%, rgba(196,146,42,.55) 65%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Tag */}
      <p
        style={{
          fontSize: '10px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--kambo-accent)',
          opacity: 0.55,
          marginBottom: 'clamp(16px, 2.5vw, 22px)',
          fontFamily: 'var(--font-onest)',
          fontWeight: 400,
        }}
      >
        {tag}
      </p>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(26px, 3.2vw, 40px)',
          color: 'var(--kambo-text-hi)',
          fontWeight: 400,
          lineHeight: 1.08,
          letterSpacing: '-0.01em',
          marginBottom: 'clamp(12px, 1.8vw, 18px)',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: '15px', color: 'var(--kambo-text-lo)', lineHeight: 1.8 }}>
        {body}
      </p>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(to right, rgba(196,146,42,.22), transparent 65%)',
          marginBlock: 'clamp(28px, 4vw, 40px)',
        }}
      />

      {/* Price */}
      <div style={{ marginBottom: 'clamp(36px, 5vw, 52px)' }}>
        <div
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(55px, 7.5vw, 83px)',
            color: 'var(--kambo-text-hi)',
            lineHeight: 0.88,
            fontWeight: 400,
            letterSpacing: '-0.025em',
            marginBottom: '12px',
          }}
        >
          {price}
        </div>
        {priceUnit && (
          <p
            style={{
              fontSize: '11px',
              color: 'var(--kambo-text-lo)',
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              opacity: 0.5,
            }}
          >
            {priceUnit}
          </p>
        )}
      </div>

      {/* Includes */}
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          marginBottom: 'clamp(36px, 5vw, 52px)',
        }}
      >
        {INCLUDES.map((item) => (
          <li
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '13px',
              color: 'rgba(178,194,180,0.76)',
              lineHeight: 1.4,
            }}
          >
            <span
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                border: '1px solid rgba(196,146,42,.38)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Check size={10} weight="bold" color="var(--kambo-accent)" />
            </span>
            {item}
          </li>
        ))}
      </ul>

      {/* CTA → Telegram */}
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="bk-cta"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--kambo-accent)',
          color: 'var(--kambo-bg)',
          height: '52px',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.05em',
          fontFamily: 'var(--font-onest)',
          textDecoration: 'none',
          marginTop: 'auto',
          width: '88%',
          marginInline: 'auto',
          transition: 'background 0.22s ease, transform 0.14s ease',
          whiteSpace: 'nowrap',
        }}
      >
        Записаться на консультацию
      </a>
      <p
        style={{
          fontSize: '11px',
          lineHeight: 1.5,
          color: 'var(--kambo-text-lo)',
          opacity: 0.55,
          textAlign: 'center',
          marginTop: '10px',
          marginInline: 'auto',
          width: '88%',
        }}
      >
        Переходя в Telegram, вы соглашаетесь с{' '}
        <a href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>
          политикой конфиденциальности
        </a>{' '}
        и{' '}
        <a href="/oferta" style={{ color: 'inherit', textDecoration: 'underline' }}>
          публичной офертой
        </a>
        .
      </p>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function Booking() {
  const reduce        = useReducedMotion()
  const headlineLines = BOOKING.headline.split('\n')

  return (
    <section
      id="booking"
      style={{
        paddingBlock: 'var(--section-py)',
        background: 'var(--kambo-bg)',
        borderTop: '1px solid var(--kambo-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient top glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-120px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '560px',
          background: 'radial-gradient(ellipse at center top, rgba(196,146,42,0.04) 0%, transparent 58%)',
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
        {/* Section header */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: EASE }}
          style={{ marginBottom: 'clamp(44px, 6.5vw, 72px)' }}
        >
          <div style={{ width: '32px', height: '2px', background: 'var(--kambo-accent)', marginBottom: '20px' }} />
          <h2
            style={{
              fontSize: 'var(--text-h2)',
              fontFamily: 'var(--font-cormorant)',
              color: 'var(--kambo-text-hi)',
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: 'clamp(18px, 2.5vw, 26px)',
            }}
          >
            {headlineLines.map((line, i) => (
              <span key={i}>{i > 0 && <br />}{line}</span>
            ))}
          </h2>
          <p
            style={{
              fontSize: 'clamp(15px, 1.7vw, 17px)',
              color: 'var(--kambo-text-lo)',
              lineHeight: 1.82,
              maxWidth: '520px',
              marginBottom: '28px',
            }}
          >
            {BOOKING.intro}
          </p>

          {/* Trust block */}
          <div
            style={{
              borderLeft: '1px solid rgba(196,146,42,.25)',
              paddingLeft: 'clamp(18px, 2.5vw, 26px)',
              maxWidth: '480px',
            }}
          >
            <p
              style={{
                fontSize: '13px',
                color: 'var(--kambo-text-lo)',
                lineHeight: 1.85,
                opacity: 0.65,
              }}
            >
              Каждая церемония начинается с личной консультации.
              {' '}Консультация занимает 5–15 минут и ни к чему вас не обязывает.
              {' '}Если во время разговора станет понятно, что Камбо сейчас вам не подходит — я честно скажу об этом.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div
          className="bk-cards"
          style={{ display: 'flex', gap: 'clamp(16px, 3vw, 32px)', alignItems: 'stretch' }}
        >
          <ExperienceCard
            tag="Групповой формат"
            title={BOOKING.group.title}
            body={BOOKING.group.body}
            price={BOOKING.group.price}
            priceUnit={BOOKING.group.priceUnit}
            ctaHref={BOOKING.group.ctaHref}
            delay={0.06}
            reduce={reduce}
          />
          <ExperienceCard
            tag="Индивидуальный формат"
            title={BOOKING.individual.title}
            body={BOOKING.individual.body}
            price={BOOKING.individual.price}
            ctaHref={BOOKING.individual.ctaHref}
            delay={0.18}
            reduce={reduce}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .bk-cards { flex-direction: column !important; }
        }
        .bk-card {
          transition:
            transform 350ms cubic-bezier(.22,.61,.36,1),
            box-shadow 350ms cubic-bezier(.22,.61,.36,1);
        }
        .bk-card:hover {
          transform: translateY(-5px);
          box-shadow:
            0 1px 0 rgba(255,255,255,.05) inset,
            0 0 0 1px rgba(196,146,42,.14) inset,
            0 28px 72px rgba(0,0,0,.48),
            0 0 0 1px rgba(196,146,42,.28);
        }
        .bk-cta:hover {
          background: #d4a030 !important;
          transform: translateY(-1px);
        }
        .bk-cta:active { transform: translateY(1px) !important; }
      `}</style>
    </section>
  )
}
