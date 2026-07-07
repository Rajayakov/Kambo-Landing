'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Check } from '@phosphor-icons/react'
import { FOR_WHOM } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

export default function ForWhom() {
  const reduce = useReducedMotion()

  return (
    <section
      id="for-whom"
      style={{
        background:
          'linear-gradient(to bottom, rgba(7,18,12,0.4), transparent 110px), linear-gradient(to top, rgba(7,18,12,0.4), transparent 110px), var(--kambo-bg)',
        paddingBlock: 'clamp(40px, 5vw, 56px)',
      }}
    >
      <div
        style={{
          maxWidth: 'min(1800px, 96vw)',
          marginInline: 'auto',
          paddingInline: 'clamp(20px, 5vw, 48px)',
        }}
      >
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 56px)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-onest)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.36em',
              textTransform: 'uppercase',
              color: 'var(--kambo-accent-hi)',
              marginBottom: '18px',
            }}
          >
            Показания
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-onest)',
              fontWeight: 600,
              fontSize: 'clamp(32px, 3.4vw, 41px)',
              lineHeight: 1.15,
              color: '#F5E7C6',
              maxWidth: '720px',
              marginInline: 'auto',
            }}
          >
            Эта церемония для вас,<br />если вы испытываете
          </h2>
        </motion.div>

        <motion.ul
          className="fw-grid"
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          style={{ listStyle: 'none', margin: 0, padding: 0 }}
        >
          {FOR_WHOM.items.map((item) => (
            <li key={item} className="fw-item">
              <Check size={24} weight="bold" className="fw-check" />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>

      <style>{`
        .fw-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          column-gap: clamp(14px, 1.8vw, 22px);
          row-gap: clamp(20px, 2.8vw, 28px);
        }
        .fw-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          height: 100%;
          font-family: var(--font-onest);
          font-weight: 600;
          font-size: clamp(19px, 1.35vw, 23px);
          line-height: 1.35;
          color: #F7ECD4;
          background:
            radial-gradient(130% 150% at 50% 0%, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0) 58%),
            linear-gradient(160deg, rgba(72,112,76,0.56) 0%, rgba(46,74,50,0.5) 100%);
          border: 2px solid rgba(196, 146, 42, 0.55);
          border-radius: 16px;
          padding: clamp(20px, 2vw, 26px) clamp(20px, 2vw, 24px);
          box-shadow:
            inset 0 0 0 1px rgba(232, 184, 75, 0.07),
            inset 0 1px 32px rgba(232, 184, 75, 0.06);
          transition: background 0.22s ease, border-color 0.22s ease, color 0.22s ease, box-shadow 0.22s ease;
        }
        .fw-item:hover {
          background:
            radial-gradient(130% 150% at 50% 0%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 58%),
            linear-gradient(160deg, rgba(82,126,86,0.62) 0%, rgba(54,84,58,0.56) 100%);
          border-color: rgba(232, 184, 75, 0.85);
          color: #FFF6E0;
          box-shadow:
            inset 0 0 0 1px rgba(232, 184, 75, 0.14),
            inset 0 1px 40px rgba(232, 184, 75, 0.11);
        }
        .fw-check {
          flex-shrink: 0;
          margin-top: 2px;
          padding: 6px;
          border-radius: 50%;
          color: #FFDD8A;
          background: radial-gradient(circle, rgba(232,184,75,0.4) 0%, rgba(196,146,42,0.14) 68%, rgba(196,146,42,0) 100%);
          box-shadow: 0 0 0 1px rgba(232,184,75,0.32), 0 0 14px rgba(232,184,75,0.24);
          transition: background 0.22s ease, box-shadow 0.22s ease, filter 0.22s ease;
        }
        .fw-item:hover .fw-check {
          background: radial-gradient(circle, rgba(232,184,75,0.58) 0%, rgba(196,146,42,0.22) 68%, rgba(196,146,42,0) 100%);
          box-shadow: 0 0 0 1px rgba(232,184,75,0.6), 0 0 20px rgba(232,184,75,0.34);
          filter: brightness(1.1);
        }
        @media (max-width: 1023px) {
          .fw-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 599px) {
          .fw-grid { grid-template-columns: 1fr; }
          .fw-item { font-size: 18px; }
        }
      `}</style>
    </section>
  )
}
