'use client'

import { TelegramLogo, InstagramLogo } from '@phosphor-icons/react'
import { FOOTER } from '@/lib/constants'

function LeafMark() {
  return (
    <svg
      aria-hidden
      width="28"
      height="40"
      viewBox="0 0 100 145"
      fill="none"
      style={{ opacity: 0.28 }}
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
    <footer
      style={{
        borderTop: '1px solid var(--kambo-border)',
        paddingTop: 'clamp(52px, 7vw, 80px)',
        paddingBottom: 'clamp(36px, 5vw, 56px)',
        background: 'var(--kambo-bg)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-w)',
          marginInline: 'auto',
          paddingInline: 'clamp(20px, 5vw, 48px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Botanical mark */}
        <LeafMark />

        {/* Name */}
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(24px, 3vw, 34px)',
            color: 'var(--kambo-text-hi)',
            fontWeight: 400,
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            marginTop: '20px',
          }}
        >
          {FOOTER.name}
        </p>

        {/* Location eyebrow */}
        <p
          style={{
            fontSize: '11px',
            color: 'var(--kambo-text-lo)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginTop: '10px',
            opacity: 0.7,
          }}
        >
          {FOOTER.location}
        </p>

        {/* Social links */}
        <div
          style={{
            display: 'flex',
            gap: '0',
            alignItems: 'center',
            marginTop: '28px',
            marginBottom: '32px',
            border: '1px solid rgba(46,74,50,0.55)',
            borderRadius: '999px',
            overflow: 'hidden',
          }}
        >
          <a
            href={FOOTER.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="footer-social"
            style={{
              color: 'var(--kambo-text-lo)',
              transition: 'color 0.2s, background 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '36px',
            }}
          >
            <TelegramLogo size={17} />
          </a>
          <div style={{ width: '1px', height: '18px', background: 'rgba(46,74,50,0.55)' }} />
          <a
            href={FOOTER.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-social"
            style={{
              color: 'var(--kambo-text-lo)',
              transition: 'color 0.2s, background 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '36px',
            }}
          >
            <InstagramLogo size={17} />
          </a>
        </div>

        {/* Gold rule */}
        <div
          style={{
            width: '40px',
            height: '1px',
            background: 'rgba(196,146,42,0.35)',
            marginBottom: '24px',
          }}
        />

        {/* Disclaimer */}
        <p
          style={{
            fontSize: '13px',
            color: 'var(--kambo-text-lo)',
            maxWidth: '420px',
            lineHeight: 1.72,
            opacity: 0.6,
            marginBottom: '20px',
          }}
        >
          {FOOTER.disclaimer}
        </p>

        {/* Copyright + legal */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <p
            style={{
              fontSize: '11px',
              color: 'var(--kambo-text-lo)',
              opacity: 0.3,
              letterSpacing: '0.06em',
            }}
          >
            &copy; {FOOTER.year} {FOOTER.name}
          </p>
          <span style={{ fontSize: '11px', color: 'var(--kambo-text-lo)', opacity: 0.2 }}>·</span>
          <a
            href="https://t.me/the_open_sky"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '11px', color: 'var(--kambo-text-lo)', opacity: 0.3, letterSpacing: '0.06em', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.6')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.3')}
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>

      <style>{`
        .footer-social:hover {
          color: var(--kambo-accent) !important;
          background: rgba(196,146,42,0.06);
        }
      `}</style>
    </footer>
  )
}
