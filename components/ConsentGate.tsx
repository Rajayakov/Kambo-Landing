'use client'

import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import Link from 'next/link'

interface ConsentGateProps {
  href: string
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export default function ConsentGate({ href, className, style, children }: ConsentGateProps) {
  const [open, setOpen] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (!open) return

    document.body.style.overflow = 'hidden'
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  function openGate() {
    setChecked(false)
    setOpen(true)
  }

  function close() {
    setOpen(false)
  }

  function confirm() {
    if (!checked) return
    window.open(href, '_blank', 'noopener,noreferrer')
    setOpen(false)
  }

  return (
    <>
      <button type="button" onClick={openGate} className={className} style={{ ...style, border: 'none', cursor: 'pointer' }}>
        {children}
      </button>

      {open && (
        <div
          role="presentation"
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            background: 'rgba(4,10,6,0.72)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Согласие перед переходом в Telegram"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '440px',
              background: 'rgba(10,22,15,0.98)',
              border: '1px solid rgba(178,194,180,0.16)',
              borderRadius: '16px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
              padding: 'clamp(22px, 4vw, 32px)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '24px',
                fontWeight: 400,
                color: 'var(--kambo-text-hi)',
                marginBottom: '14px',
              }}
            >
              Перед переходом в Telegram
            </h3>

            <label
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                cursor: 'pointer',
                marginBottom: '24px',
              }}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                style={{
                  marginTop: '3px',
                  width: '18px',
                  height: '18px',
                  flexShrink: 0,
                  accentColor: 'var(--kambo-accent)',
                }}
              />
              <span style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(226,220,206,0.88)' }}>
                Я согласен(-на) с{' '}
                <Link href="/privacy-policy" style={{ color: 'var(--kambo-accent)', textDecoration: 'underline' }}>
                  Политикой конфиденциальности
                </Link>
                ,{' '}
                <Link href="/oferta" style={{ color: 'var(--kambo-accent)', textDecoration: 'underline' }}>
                  Публичной офертой
                </Link>{' '}
                и даю{' '}
                <Link href="/data-consent" style={{ color: 'var(--kambo-accent)', textDecoration: 'underline' }}>
                  согласие на обработку персональных данных
                </Link>
              </span>
            </label>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={close}
                style={{
                  flex: '0 0 auto',
                  height: '48px',
                  padding: '0 18px',
                  borderRadius: '6px',
                  border: '1px solid rgba(178,194,180,0.22)',
                  background: 'transparent',
                  color: 'var(--kambo-text-lo)',
                  fontSize: '14px',
                  fontFamily: 'var(--font-onest)',
                  cursor: 'pointer',
                }}
              >
                Отмена
              </button>
              <button
                type="button"
                onClick={confirm}
                disabled={!checked}
                style={{
                  flex: 1,
                  height: '48px',
                  borderRadius: '6px',
                  border: 'none',
                  background: checked ? 'var(--kambo-accent)' : 'rgba(196,146,42,0.28)',
                  color: checked ? 'var(--kambo-bg)' : 'rgba(240,230,200,0.4)',
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-onest)',
                  cursor: checked ? 'pointer' : 'not-allowed',
                  transition: 'background 0.2s ease',
                }}
              >
                Перейти в Telegram
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
