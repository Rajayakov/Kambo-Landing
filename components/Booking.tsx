'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { BOOKING } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

interface CardProps {
  title: string
  subtitle?: string
  body: string
  price: string
  priceUnit?: string
  cta: string
  ctaHref: string
  delay?: number
  reduce: boolean | null
}

function BookingCard({ title, subtitle, body, price, priceUnit, cta, ctaHref, delay = 0, reduce }: CardProps) {
  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      style={{
        flex: 1,
        background: 'rgba(28,48,32,0.96)',
        border: '1px solid rgba(196,146,42,0.22)',
        borderTop: '3px solid var(--kambo-accent)',
        borderRadius: '3px',
        padding: 'clamp(28px, 4vw, 44px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div>
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(22px, 2.8vw, 30px)',
            color: 'var(--kambo-text-hi)',
            fontWeight: 400,
            lineHeight: 1.15,
            marginBottom: subtitle ? '6px' : '16px',
          }}
        >
          {title}
        </p>
        {subtitle && (
          <p
            style={{
              fontSize: '11px',
              color: 'var(--kambo-accent)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              opacity: 0.8,
            }}
          >
            {subtitle}
          </p>
        )}
        <p
          style={{
            fontSize: '15px',
            color: 'var(--kambo-text-lo)',
            lineHeight: 1.72,
          }}
        >
          {body}
        </p>
      </div>

      {/* Price */}
      <div style={{ marginTop: 'auto', paddingTop: 'clamp(28px, 4vw, 40px)' }}>
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(196,146,42,0.32), transparent)',
            marginBottom: 'clamp(18px, 2.5vw, 24px)',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(38px, 5.5vw, 60px)',
            color: 'var(--kambo-text-hi)',
            lineHeight: 0.9,
            fontWeight: 400,
            letterSpacing: '-0.01em',
            marginBottom: priceUnit ? '8px' : '0',
          }}
        >
          {price}
        </p>
        {priceUnit && (
          <p style={{ fontSize: '13px', color: 'var(--kambo-text-lo)', letterSpacing: '0.04em', marginBottom: 'clamp(18px, 2.5vw, 24px)' }}>
            {priceUnit}
          </p>
        )}
      </div>

      {/* CTA */}
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="booking-card-cta"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
          background: 'transparent',
          border: '1px solid rgba(196,146,42,0.3)',
          color: 'var(--kambo-text-hi)',
          paddingLeft: '22px',
          paddingRight: '8px',
          height: '52px',
          borderRadius: '999px',
          fontSize: '15px',
          letterSpacing: '0.01em',
          transition: 'background 0.22s cubic-bezier(0.32,0.72,0,1), border-color 0.22s, transform 0.15s cubic-bezier(0.32,0.72,0,1)',
          textDecoration: 'none',
          marginTop: priceUnit ? '0' : 'clamp(18px, 2.5vw, 24px)',
        }}
      >
        <span>{cta}</span>
        <span
          className="booking-card-icon"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(196,146,42,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.3s cubic-bezier(0.32,0.72,0,1)',
          }}
        >
          <ArrowUpRight size={14} weight="bold" style={{ color: 'var(--kambo-accent)' }} />
        </span>
      </a>
    </motion.div>
  )
}

export default function Booking() {
  const reduce = useReducedMotion()

  return (
    <section
      id="booking"
      style={{
        paddingBlock: 'var(--section-py)',
        background: 'var(--kambo-surface)',
        borderTop: '1px solid var(--kambo-border)',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '60%',
          height: '70%',
          background: 'radial-gradient(ellipse at 80% 10%, rgba(196,146,42,0.055) 0%, transparent 58%)',
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
          initial={reduce ? {} : { opacity: 0, y: 24, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: EASE }}
          style={{ marginBottom: 'clamp(32px, 4.5vw, 56px)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
            <div style={{ width: '32px', height: '2px', background: 'var(--kambo-accent)', flexShrink: 0 }} />
            <span className="eyebrow">{BOOKING.eyebrow}</span>
          </div>
          <h2
            style={{
              fontSize: 'var(--text-h2)',
              fontFamily: 'var(--font-cormorant)',
              color: 'var(--kambo-text-hi)',
              fontWeight: 400,
              lineHeight: 1.05,
            }}
          >
            {BOOKING.headline}
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          className="booking-cards"
          style={{ display: 'flex', gap: 'clamp(14px, 2.5vw, 28px)', alignItems: 'stretch' }}
        >
          <BookingCard
            title={BOOKING.group.title}
            subtitle={BOOKING.group.subtitle}
            body={BOOKING.group.body}
            price={BOOKING.group.price}
            priceUnit={BOOKING.group.priceUnit}
            cta={BOOKING.group.cta}
            ctaHref={BOOKING.group.ctaHref}
            delay={0.06}
            reduce={reduce}
          />
          <BookingCard
            title={BOOKING.individual.title}
            body={BOOKING.individual.body}
            price={BOOKING.individual.price}
            cta={BOOKING.individual.cta}
            ctaHref={BOOKING.individual.ctaHref}
            delay={0.16}
            reduce={reduce}
          />
        </div>

        {/* Note */}
        <motion.p
          initial={reduce ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          style={{
            fontSize: '13px',
            color: 'var(--kambo-text-lo)',
            textAlign: 'center',
            marginTop: 'clamp(18px, 2.5vw, 28px)',
            letterSpacing: '0.03em',
            opacity: 0.58,
          }}
        >
          {BOOKING.note}
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .booking-cards { flex-direction: column !important; }
        }
        .booking-card-cta:hover {
          background: rgba(196,146,42,0.07) !important;
          border-color: rgba(196,146,42,0.52) !important;
          transform: translateY(-1px);
        }
        .booking-card-cta:active { transform: translateY(1px) !important; }
        .booking-card-cta:hover .booking-card-icon { transform: translate(2px, -2px); }
      `}</style>
    </section>
  )
}
