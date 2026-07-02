'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { WHAT_KAMBO } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

export default function WhatIsKambo() {
  const reduce = useReducedMotion()

  return (
    <section
      id="what"
      style={{
        paddingBlock: 'var(--section-py)',
        background: 'var(--kambo-surface)',
        borderTop: '1px solid var(--kambo-border)',
        borderBottom: '1px solid var(--kambo-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grain */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          opacity: 0.028,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Gold glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(196,146,42,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 'var(--max-w)',
          marginInline: 'auto',
          paddingInline: 'clamp(20px, 5vw, 48px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ── TOP: text left + photo right ── */}
        <div
          className="what-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '54% 46%',
            gap: 'clamp(32px, 5vw, 72px)',
            alignItems: 'stretch',
            marginBottom: 'clamp(48px, 7vw, 80px)',
          }}
        >
          {/* Left: title + quote */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
          >
            <div style={{ width: '32px', height: '2px', background: 'var(--kambo-accent)' }} />

            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(34px, 5vw, 64px)',
                fontWeight: 400,
                color: 'var(--kambo-text-hi)',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                margin: 0,
              }}
            >
              {WHAT_KAMBO.title}
            </h2>

            <blockquote
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(20px, 2.6vw, 32px)',
                fontStyle: 'italic',
                color: 'var(--kambo-accent)',
                lineHeight: 1.52,
                fontWeight: 400,
                margin: 0,
                letterSpacing: '0.01em',
              }}
            >
              {WHAT_KAMBO.quote}
            </blockquote>

            <div
              style={{
                height: '1px',
                background: 'linear-gradient(to right, rgba(196,146,42,0.24), transparent)',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {WHAT_KAMBO.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 'clamp(14px, 1.3vw, 15px)',
                    color: 'var(--kambo-text-lo)',
                    lineHeight: 1.82,
                    margin: 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right: photo — fills full column height */}
          <motion.div
            className="what-photo-wrap"
            initial={reduce ? {} : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '3px',
                overflow: 'hidden',
                boxShadow: '0 28px 72px rgba(0,0,0,0.55), 0 0 0 1px rgba(196,146,42,0.14)',
              }}
            >
              <Image
                src="/kambo-frog.png"
                alt="Phyllomedusa bicolor — лягушка Камбо"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 767px) 100vw, 46vw"
              />
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.52) 100%)',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM: horizontal stats row ── */}
        <div
          style={{
            borderTop: '1px solid var(--kambo-border)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
          className="what-stats"
        >
          {WHAT_KAMBO.stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              style={{
                paddingTop: 'clamp(24px, 3.5vw, 40px)',
                paddingInline: i === 0
                  ? `0 clamp(24px, 4vw, 52px)`
                  : `clamp(24px, 4vw, 52px)`,
                borderLeft: i > 0 ? '1px solid var(--kambo-border)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(52px, 7.5vw, 88px)',
                  color: 'var(--kambo-accent)',
                  lineHeight: 0.9,
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  fontVariantNumeric: 'tabular-nums',
                  marginBottom: '12px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--kambo-text-lo)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  lineHeight: 1.55,
                  maxWidth: '180px',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .what-grid { grid-template-columns: 1fr !important; }
          .what-photo-wrap { min-height: clamp(300px, 75vw, 520px) !important; }
          .what-stats { grid-template-columns: 1fr !important; }
          .what-stats > div { border-left: none !important; border-top: 1px solid var(--kambo-border); padding-inline: 0 !important; }
          .what-stats > div:first-child { border-top: none; }
        }
      `}</style>
    </section>
  )
}
