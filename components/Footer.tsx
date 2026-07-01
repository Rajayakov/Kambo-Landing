'use client'

import { TelegramLogo, InstagramLogo } from '@phosphor-icons/react'
import { FOOTER } from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--kambo-border)',
        paddingBlock: '48px',
        textAlign: 'center',
        background: 'var(--kambo-bg)',
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
          gap: '20px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '22px',
            color: 'var(--kambo-text-hi)',
          }}
        >
          {FOOTER.name}
        </p>
        <p style={{ fontSize: '14px', color: 'var(--kambo-text-lo)' }}>
          {FOOTER.location}
        </p>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a
            href={FOOTER.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            style={{
              color: 'var(--kambo-text-lo)',
              transition: 'color 0.2s',
              display: 'flex',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--kambo-text-hi)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--kambo-text-lo)')}
          >
            <TelegramLogo size={22} />
          </a>
          <a
            href={FOOTER.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{
              color: 'var(--kambo-text-lo)',
              transition: 'color 0.2s',
              display: 'flex',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--kambo-text-hi)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--kambo-text-lo)')}
          >
            <InstagramLogo size={22} />
          </a>
        </div>

        <p
          style={{
            fontSize: '13px',
            color: 'var(--kambo-text-lo)',
            maxWidth: '480px',
            lineHeight: 1.6,
          }}
        >
          {FOOTER.disclaimer}
        </p>

        <p style={{ fontSize: '12px', color: 'var(--kambo-text-lo)', opacity: 0.5 }}>
          &copy; {FOOTER.year}
        </p>
      </div>
    </footer>
  )
}
