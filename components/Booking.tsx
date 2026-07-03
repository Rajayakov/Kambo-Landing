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

interface CardProps {
  badge?: string
  tag: string
  title: string
  body: string
  price: string
  priceUnit?: string
  ctaHref: string
  delay?: number
  reduce: boolean | null
  accent?: boolean
}

function ExperienceCard({
  badge, tag, title, body, price, priceUnit, ctaHref,
  delay = 0, reduce, accent,
}: CardProps) {
  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={`bk-card${accent ? ' bk-card--accent' : ''}`}
      style={{
        flex: 1,
        background: accent
          ? 'linear-gradient(180deg, rgba(17,36,23,.98) 0%, rgba(11,25,16,.99) 100%)'
          : 'linear-gradient(180deg, rgba(15,32,20,.97) 0%, rgba(10,22,14,.98) 100%)',
        border: accent
          ? '1px solid rgba(196,146,42,0.28)'
          : '1px solid rgba(196,146,42,0.18)',
        borderRadius: '4px',
        padding: accent
          ? 'clamp(44px, 5.5vw, 66px) clamp(36px, 5vw, 56px)'
          : 'clamp(36px, 5vw, 56px)',
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
          height: accent ? '2px' : '1px',
          background: accent
            ? 'linear-gradient(to right, transparent 0%, var(--kambo-accent) 25%, var(--kambo-accent) 75%, transparent 100%)'
            : 'linear-gradient(to right, transparent 0%, rgba(196,146,42,0.45) 35%, rgba(196,146,42,0.45) 65%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Badge — only on accent card */}
      {badge && (
        <p
          style={{
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--kambo-accent)',
            fontFamily: 'var(--font-onest)',
            fontWeight: 500,
            opacity: 0.82,
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{ flex: '0 0 20px', height: '1px', background: 'rgba(196,146,42,0.45)' }} />
          {badge}
          <span style={{ flex: '0 0 20px', height: '1px', background: 'rgba(196,146,42,0.45)' }} />
        </p>
      )}

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
      <p
        style={{
          fontSize: '15px',
          color: 'var(--kambo-text-lo)',
          lineHeight: 1.8,
        }}
      >
        {body}
      </p>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(to right, rgba(196,146,42,0.22), transparent 65%)',
          marginBlock: 'clamp(28px, 4vw, 40px)',
        }}
      />

      {/* Price — main accent */}
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

      {/* Includes checklist */}
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
                border: '1px solid rgba(196,146,42,0.38)',
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

      {/* CTA — 88% width, centred */}
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
          borderRadius: '3px',
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.05em',
          textDecoration: 'none',
          marginTop: 'auto',
          width: '88%',
          marginInline: 'auto',
          transition: 'background 0.25s ease, transform 0.15s ease',
          whiteSpace: 'nowrap',
        }}
      >
        Записаться на личную консультацию
      </a>
    </motion.div>
  )
}

export default function Booking() {
  const reduce = useReducedMotion()
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
            }}
          >
            {BOOKING.intro}
          </p>
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
            badge="Рекомендуемый формат"
            tag="Индивидуальный формат"
            title={BOOKING.individual.title}
            body={BOOKING.individual.body}
            price={BOOKING.individual.price}
            ctaHref={BOOKING.individual.ctaHref}
            delay={0.18}
            reduce={reduce}
            accent
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
            0 24px 60px rgba(0,0,0,.44),
            0 0 0 1px rgba(196,146,42,0.24);
        }
        .bk-card--accent:hover {
          transform: translateY(-5px);
          box-shadow:
            0 28px 70px rgba(0,0,0,.50),
            0 0 0 1px rgba(196,146,42,0.36);
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
