'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Warning, ShieldCheck } from '@phosphor-icons/react'
import { SAFETY } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

function parseBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1
      ? <strong key={i} style={{ color: 'var(--kambo-text-hi)', fontWeight: 500 }}>{part}</strong>
      : part
  )
}

export default function Safety() {
  const reduce = useReducedMotion()

  return (
    <section
      id="safety"
      style={{
        paddingBlock: 'var(--section-py)',
        background: 'var(--kambo-bg)',
        borderTop: '1px solid var(--kambo-border)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-w)',
          marginInline: 'auto',
          paddingInline: 'clamp(20px, 5vw, 48px)',
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ marginBottom: 'clamp(32px, 5vw, 52px)' }}
        >
          <div style={{ width: '32px', height: '2px', background: 'var(--kambo-accent)', marginBottom: '18px' }} />
          <h2
            style={{
              fontSize: 'var(--text-h2)',
              color: 'var(--kambo-text-hi)',
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 400,
            }}
          >
            {SAFETY.title}
          </h2>
        </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(24px, 4vw, 48px)',
        }}
        className="safety-grid"
      >
        {/* Left: contraindications */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'var(--kambo-surface)',
            border: '1px solid var(--kambo-border)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(20px, 3vw, 32px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Card header */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <Warning size={18} weight="fill" style={{ color: 'var(--kambo-accent)', flexShrink: 0 }} />
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(20px, 2.2vw, 26px)',
                  color: 'var(--kambo-text-hi)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                }}
              >
                {SAFETY.contraindicationsTitle}
              </h3>
            </div>
            <p
              style={{
                fontSize: '10px',
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                color: 'var(--kambo-accent)',
                opacity: 0.7,
                paddingLeft: '28px',
              }}
            >
              {SAFETY.contraindicationsSubtitle}
            </p>
          </div>

          {/* List */}
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
            {SAFETY.contraindications.map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  fontSize: '15px',
                  color: 'var(--kambo-text-lo)',
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: 'rgba(196,146,42,0.5)',
                    marginTop: '9px',
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Footer note */}
          <p
            style={{
              fontSize: '13px',
              color: 'var(--kambo-text-lo)',
              marginTop: '20px',
              paddingTop: '16px',
              borderTop: '1px solid var(--kambo-border)',
              lineHeight: 1.65,
            }}
          >
            {parseBold(SAFETY.contraindicationsNote)}
          </p>
        </motion.div>

        {/* Right: how we work */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'var(--kambo-surface)',
            border: '1px solid var(--kambo-border)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(20px, 3vw, 32px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <ShieldCheck size={18} weight="fill" style={{ color: 'var(--kambo-accent)', flexShrink: 0 }} />
            <h3
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(20px, 2.2vw, 26px)',
                color: 'var(--kambo-text-hi)',
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              {SAFETY.howWeWorkTitle}
            </h3>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {SAFETY.howWeWork.map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  fontSize: '14px',
                  color: 'var(--kambo-text-lo)',
                  lineHeight: 1.65,
                }}
              >
                <span
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: 'rgba(196,146,42,0.5)',
                    marginTop: '9px',
                    flexShrink: 0,
                  }}
                />
                <span>{parseBold(item)}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .safety-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
