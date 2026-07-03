'use client'
// v3
import Link from 'next/link'
import { TelegramLogo } from '@phosphor-icons/react'
import { FOOTER } from '@/lib/constants'

const LEGAL_TEXT = [
  'Информация, представленная на сайте, носит исключительно ознакомительный характер.',
  'Практика Камбо не является медицинской услугой, способом лечения или заменой обращения к врачу.',
  'Участие возможно только после предварительной личной консультации и оценки противопоказаний.',
  'Организатор вправе отказать в участии без объяснения причин, если практика может быть небезопасна для человека.',
]

const LEGAL_LINKS = [
  { label: 'Политика конфиденциальности',               href: '/privacy-policy' },
  { label: 'Согласие на обработку персональных данных', href: '/data-consent' },
  { label: 'Отказ от ответственности',                  href: '/disclaimer' },
]

export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="f-veil" aria-hidden />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '640px',
        marginInline: 'auto',
        paddingInline: 'clamp(24px, 5vw, 48px)',
        paddingTop: 'clamp(88px, 13vw, 148px)',
        paddingBottom: 'clamp(44px, 6vw, 68px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>

        {/* ── Brand ── */}
        <h2 style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(32px, 4.6vw, 58px)',
          fontWeight: 400,
          color: '#F3EBDD',
          letterSpacing: '0.10em',
          lineHeight: 1,
          marginBottom: '16px',
        }}>
          ОТКРЫТОЕ НЕБО
        </h2>

        <p style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(16px, 1.9vw, 21px)',
          fontStyle: 'italic',
          color: 'rgba(243,235,221,0.46)',
          letterSpacing: '0.02em',
          marginBottom: 'clamp(44px, 6.5vw, 68px)',
        }}>
          Живое Поле Трансформации
        </p>

        {/* ── Social ── */}
        <div style={{ display: 'flex', gap: '14px', marginBottom: 'clamp(48px, 7vw, 72px)' }}>
          <a href={FOOTER.telegram} target="_blank" rel="noopener noreferrer"
            aria-label="Telegram" className="f-social">
            <TelegramLogo size={14} weight="light" />
          </a>
        </div>

        {/* ── Gold line ── */}
        <div style={{
          width: '88px',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(196,146,42,0.42), transparent)',
          marginBottom: 'clamp(40px, 5.5vw, 56px)',
        }} />

        {/* ── Legal text ── */}
        <div style={{ maxWidth: '480px', marginBottom: 'clamp(28px, 4vw, 38px)' }}>
          {LEGAL_TEXT.map((line, i) => (
            <p key={i} style={{
              fontSize: '11.5px',
              color: 'var(--kambo-text-lo)',
              lineHeight: 1.9,
              opacity: 0.44,
              marginTop: i === 0 ? 0 : '9px',
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* ── Legal links ── */}
        <p style={{
          fontSize: '10.5px',
          color: 'var(--kambo-text-lo)',
          opacity: 0.34,
          lineHeight: 1.8,
          marginBottom: 'clamp(36px, 5vw, 52px)',
        }}>
          {LEGAL_LINKS.map((link, i) => (
            <span key={link.href}>
              {i > 0 && <span style={{ margin: '0 7px', opacity: 0.55 }}>·</span>}
              <Link href={link.href} className="f-llink" style={{ color: 'inherit', textDecoration: 'none' }}>
                {link.label}
              </Link>
            </span>
          ))}
        </p>

        {/* ── Bottom rule ── */}
        <div style={{
          width: '100%',
          height: '1px',
          background: 'rgba(178,194,180,0.07)',
          marginBottom: '20px',
        }} />

        {/* ── Copyright ── */}
        <p style={{
          fontSize: '11px',
          color: 'var(--kambo-text-lo)',
          opacity: 0.28,
          letterSpacing: '0.05em',
        }}>
          © 2026 ОТКРЫТОЕ НЕБО · Все права защищены.
        </p>

      </div>

      <style>{`
        .f-veil {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(ellipse at center, rgba(0,0,0,0.08) 20%, rgba(2,7,4,0.70) 100%),
            linear-gradient(180deg, rgba(5,12,7,0.58) 0%, rgba(4,10,6,0.92) 100%);
        }
        .f-social {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(178,194,180,0.16);
          color: rgba(178,194,180,0.50);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: color 0.28s, border-color 0.28s;
        }
        .f-social:hover {
          color: rgba(196,146,42,0.82);
          border-color: rgba(196,146,42,0.32);
        }
        .f-llink:hover {
          opacity: 0.7;
        }
      `}</style>
    </footer>
  )
}
