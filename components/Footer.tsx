'use client'
// v2
import Link from 'next/link'
import { TelegramLogo } from '@phosphor-icons/react'
import { FOOTER } from '@/lib/constants'

function LeafMark() {
  return (
    <svg
      aria-hidden
      width="24"
      height="34"
      viewBox="0 0 100 145"
      fill="none"
      style={{ opacity: 0.32 }}
    >
      <path
        d="M50 140 C50 140 10 108 7 70 C4 34 24 6 50 2 C76 6 96 34 93 70 C90 108 50 140 50 140Z"
        fill="var(--kambo-accent)"
      />
      <line x1="50" y1="140" x2="50" y2="2" stroke="rgba(196,146,42,0.7)" strokeWidth="1" />
      <path d="M50 60 C36 53 18 57 12 70" stroke="rgba(196,146,42,0.5)" strokeWidth="0.8" />
      <path d="M50 90 C64 83 80 86 86 98" stroke="rgba(196,146,42,0.5)" strokeWidth="0.8" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="footer-veil" aria-hidden />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 'var(--max-w)',
          marginInline: 'auto',
          paddingInline: 'clamp(20px, 5vw, 48px)',
          paddingTop: 'clamp(72px, 10vw, 116px)',
          paddingBottom: 'clamp(40px, 6vw, 60px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Mark */}
        <LeafMark />

        {/* Name */}
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(26px, 3.2vw, 36px)',
            color: 'var(--kambo-text-hi)',
            fontWeight: 400,
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            marginTop: '22px',
          }}
        >
          {FOOTER.name}
        </p>

        {/* Tagline */}
        <p
          style={{
            fontSize: '12.5px',
            color: 'var(--kambo-accent-hi)',
            letterSpacing: '0.1em',
            marginTop: '9px',
            opacity: 0.85,
          }}
        >
          {FOOTER.tagline}
        </p>

        {/* Social links */}
        <div
          style={{
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
            marginTop: '32px',
          }}
        >
          <a
            href={FOOTER.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="footer-social"
          >
            <TelegramLogo size={16} weight="light" />
          </a>
        </div>

        {/* Gold rule */}
        <div
          style={{
            width: '130px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(196,146,42,0.55), transparent)',
            marginTop: '44px',
            marginBottom: '32px',
          }}
        />

        {/* Legal block */}
        <div style={{ maxWidth: '460px', marginBottom: '30px' }}>
          {FOOTER.legal.map((line, i) => (
            <p
              key={i}
              style={{
                fontSize: '12.5px',
                color: 'var(--kambo-text-lo)',
                lineHeight: 1.75,
                opacity: 0.58,
                marginTop: i === 0 ? 0 : '10px',
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Operator */}
        <div style={{ maxWidth: '460px', marginBottom: '22px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', color: 'var(--kambo-text-lo)', lineHeight: 1.7, opacity: 0.45 }}>
            {FOOTER.operator.legalName} · {FOOTER.operator.status} ·{' '}
            <a href={`mailto:${FOOTER.operator.email}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
              {FOOTER.operator.email}
            </a>
          </p>
          <p style={{ fontSize: '11px', color: 'var(--kambo-text-lo)', lineHeight: 1.7, opacity: 0.4, marginTop: '4px' }}>
            {FOOTER.operator.note}
          </p>
        </div>

        {/* Note */}
        <p
          style={{
            fontSize: '11px',
            color: 'var(--kambo-accent-hi)',
            letterSpacing: '0.03em',
            opacity: 0.55,
            marginBottom: '18px',
          }}
        >
          {FOOTER.note}
        </p>

        {/* Bottom row */}
        <div
          className="footer-bottom-row"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px 28px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(178,194,180,0.1)',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              color: 'var(--kambo-text-lo)',
              opacity: 0.4,
              letterSpacing: '0.04em',
            }}
          >
            &copy; {FOOTER.year} {FOOTER.name}
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {FOOTER.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="footer-legal-link"
                style={{
                  fontSize: '11px',
                  color: 'var(--kambo-text-lo)',
                  opacity: 0.4,
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-veil {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(ellipse at center, rgba(0,0,0,0.1) 20%, rgba(2,7,4,0.72) 100%),
            linear-gradient(180deg, rgba(5,12,7,0.62) 0%, rgba(4,10,6,0.93) 100%);
        }
        .footer-social {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(178,194,180,0.22);
          color: var(--kambo-text-lo);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.25s, border-color 0.25s, box-shadow 0.25s;
        }
        .footer-social:hover {
          color: var(--kambo-accent-hi);
          border-color: rgba(196,146,42,0.55);
          box-shadow: 0 0 14px rgba(196,146,42,0.28);
        }
        .footer-legal-link {
          transition: opacity 0.2s, color 0.2s;
        }
        .footer-legal-link:hover {
          opacity: 0.75 !important;
          color: var(--kambo-accent-hi) !important;
        }
        @media (max-width: 560px) {
          .footer-bottom-row {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}
