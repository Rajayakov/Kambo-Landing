'use client'
// v2
import Link from 'next/link'
import { TelegramLogo } from '@phosphor-icons/react'
import { FOOTER } from '@/lib/constants'

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
        {/* Brand */}
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            textTransform: 'uppercase',
            fontSize: 'clamp(38px, 6vw, 62px)',
            color: '#F3EBDD',
            fontWeight: 500,
            letterSpacing: '0.08em',
            lineHeight: 1.1,
            textAlign: 'center',
          }}
        >
          {FOOTER.brand.title}
        </p>

        {/* Brand subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(15px, 1.6vw, 20px)',
            color: 'rgba(243,235,221,0.72)',
            fontWeight: 300,
            letterSpacing: '0.12em',
            marginTop: '24px',
            textAlign: 'center',
          }}
        >
          {FOOTER.brand.subtitle}
        </p>

        {/* Gold rule */}
        <div
          style={{
            width: '90px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(196,146,42,0.55), transparent)',
            marginTop: '40px',
            marginBottom: '28px',
          }}
        />

        {/* Social links */}
        <div
          style={{
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
            marginBottom: '32px',
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
          width: 52px;
          height: 38px;
          border-radius: 999px;
          background: rgba(243,235,221,0.05);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(196,146,42,0.32);
          color: var(--kambo-text-lo);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.25s, border-color 0.25s, box-shadow 0.25s, background 0.25s;
        }
        .footer-social:hover {
          color: var(--kambo-accent-hi);
          border-color: rgba(196,146,42,0.6);
          background: rgba(196,146,42,0.08);
          box-shadow: 0 0 16px rgba(196,146,42,0.3);
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
