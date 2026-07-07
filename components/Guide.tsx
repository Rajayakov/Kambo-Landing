'use client'

import { m, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { GUIDE } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Guide() {
  const reduce = useReducedMotion()

  return (
    <section
      id="guide"
      style={{
        background: 'linear-gradient(to bottom, rgba(7,18,12,0.4), transparent 110px), var(--kambo-bg)',
        overflow: 'hidden',
      }}
    >
      {/* ── TOP: photo left + content right ── */}
      <div className="guide-top">

        {/* LEFT: Portrait — edge-to-edge, no padding */}
        <m.div
          className="guide-photo"
          initial={reduce ? {} : { opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <Image
            src="/yakov-guide.webp"
            alt="Яков Раджуна — проводник церемоний Камбо"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            sizes="(max-width: 767px) 100vw, 44vw"
          />
          {/* Gradient right edge — blends into background */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, transparent 55%, var(--kambo-bg) 100%)',
              pointerEvents: 'none',
            }}
          />
          {/* Gradient bottom edge */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 60%, rgba(8,18,10,0.72) 100%)',
              pointerEvents: 'none',
            }}
          />
        </m.div>

        {/* RIGHT: Content */}
        <m.div
          className="guide-content"
          initial={reduce ? {} : { opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingBlock: 'clamp(64px, 10vw, 120px)',
            paddingRight: 'clamp(24px, 6vw, 80px)',
            paddingLeft: 'clamp(0px, 3vw, 40px)',
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--kambo-accent)',
              marginBottom: '20px',
              fontFamily: 'var(--font-onest)',
              fontWeight: 500,
            }}
          >
            {GUIDE.eyebrow}
          </p>

          {/* Name */}
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(40px, 5.5vw, 76px)',
              fontWeight: 400,
              color: 'var(--kambo-text-hi)',
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
              marginBottom: 'clamp(24px, 3.5vw, 40px)',
            }}
          >
            {GUIDE.name}
          </h2>

          {/* Thin rule */}
          <div
            style={{
              width: '48px',
              height: '1px',
              background: 'linear-gradient(to right, var(--kambo-accent), transparent)',
              marginBottom: 'clamp(20px, 3vw, 32px)',
            }}
          />

          {/* Pull quote */}
          <blockquote
            className="guide-quote"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(19px, 2.4vw, 27px)',
              fontStyle: 'italic',
              color: 'var(--kambo-accent)',
              lineHeight: 1.55,
              fontWeight: 400,
              letterSpacing: '0.008em',
              margin: 0,
              marginBottom: 'clamp(20px, 3vw, 32px)',
            }}
          >
            «{GUIDE.quote}»
          </blockquote>

          {/* Bio */}
          <p
            className="guide-bio"
            style={{
              fontFamily: 'var(--font-onest)',
              fontSize: 'clamp(15px, 1.6vw, 17px)',
              color: 'var(--kambo-text-lo)',
              lineHeight: 1.78,
              maxWidth: '480px',
              marginBottom: 'clamp(36px, 5vw, 56px)',
            }}
          >
            {GUIDE.bio}
          </p>

          {/* Stats — 4 items, thin dividers between */}
          <div
            className="guide-stats"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              borderTop: '1px solid var(--kambo-border)',
              paddingTop: 'clamp(24px, 3.5vw, 36px)',
            }}
          >
            {GUIDE.stats.map((stat, i) => (
              <m.div
                key={stat.value}
                initial={reduce ? {} : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.08, ease: EASE }}
                style={{
                  paddingRight: i < 3 ? 'clamp(12px, 2vw, 24px)' : 0,
                  borderRight: i < 3 ? '1px solid var(--kambo-border)' : 'none',
                  paddingLeft: i > 0 ? 'clamp(12px, 2vw, 24px)' : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(36px, 4.2vw, 58px)',
                    color: 'var(--kambo-accent)',
                    lineHeight: 0.9,
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    marginBottom: '10px',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: 'var(--kambo-text-lo)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                    fontFamily: 'var(--font-onest)',
                  }}
                >
                  {stat.label}
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>

      {/* ── BOTTOM: full-width closing quote ── */}
      <div
        className="guide-closing"
        style={{
          borderTop: '1px solid var(--kambo-border)',
          paddingBlock: 'clamp(56px, 9vw, 108px)',
          paddingInline: 'clamp(24px, 8vw, 120px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
          position: 'relative',
        }}
      >
        {/* Decorative gold glow behind quote */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(196,146,42,0.05) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <m.p
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease: EASE }}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(22px, 3.8vw, 52px)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'var(--kambo-text-hi)',
            lineHeight: 1.38,
            textAlign: 'center',
            maxWidth: '820px',
            letterSpacing: '-0.005em',
            position: 'relative',
          }}
        >
          «{GUIDE.closing}»
        </m.p>

        {/* Attribution */}
        <m.p
          initial={reduce ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          style={{
            fontSize: '12px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--kambo-accent)',
            fontFamily: 'var(--font-onest)',
            position: 'relative',
          }}
        >
          — {GUIDE.name}
        </m.p>
      </div>

      <style>{`
        .guide-top {
          display: grid;
          grid-template-columns: 44% 56%;
          min-height: clamp(480px, 70vh, 760px);
        }
        .guide-photo {
          min-height: clamp(320px, 55vw, 760px);
        }
        .guide-stats {
          max-width: 480px;
        }
        @media (max-width: 900px) {
          .guide-stats {
            max-width: 100%;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px 0;
          }
          .guide-stats > div:nth-child(2) { border-right: none !important; }
          .guide-stats > div:nth-child(3) { border-right: 1px solid var(--kambo-border) !important; padding-left: 0 !important; }
          .guide-stats > div:nth-child(3),
          .guide-stats > div:nth-child(4) { padding-top: 24px; border-top: 1px solid var(--kambo-border); }
        }
        @media (max-width: 767px) {
          .guide-top {
            grid-template-columns: 1fr;
            min-height: unset;
          }
          .guide-photo {
            min-height: unset;
            height: auto;
            aspect-ratio: 1351 / 1164;
          }
          .guide-content {
            padding-inline: clamp(20px, 5vw, 40px) !important;
            padding-block: 28px 24px !important;
          }
          .guide-quote {
            line-height: 1.32 !important;
            margin-bottom: 16px !important;
          }
          .guide-bio {
            line-height: 1.55 !important;
            margin-bottom: 24px !important;
          }
          .guide-closing {
            padding-block: 32px !important;
            gap: 18px !important;
          }
        }
      `}</style>
    </section>
  )
}
