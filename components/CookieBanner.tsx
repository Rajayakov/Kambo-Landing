'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'kambo-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true)
      }
    } catch {
      // localStorage недоступен — просто не показываем баннер
    }
  }, [])

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch {}
    setVisible(false)
  }

  function decline() {
    try {
      localStorage.setItem(STORAGE_KEY, 'declined')
    } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Уведомление об использовании cookie"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 60,
        display: 'flex',
        justifyContent: 'center',
        padding: '16px',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          pointerEvents: 'auto',
          maxWidth: '640px',
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '14px',
          padding: '16px 20px',
          borderRadius: '14px',
          background: 'rgba(6, 14, 8, 0.94)',
          border: '1px solid rgba(178,194,180,0.14)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.45)',
        }}
      >
        <p
          style={{
            flex: '1 1 260px',
            margin: 0,
            fontSize: '13px',
            lineHeight: 1.6,
            color: 'rgba(226,220,206,0.82)',
          }}
        >
          Сайт использует cookie для сбора обезличенной статистики (Яндекс.Метрика). Продолжая пользоваться сайтом, вы соглашаетесь с этим — подробнее в{' '}
          <Link
            href="/privacy-policy"
            style={{ color: 'rgba(196,183,163,0.95)', textDecoration: 'underline' }}
          >
            политике конфиденциальности
          </Link>
          .
        </p>
        <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
          <button
            onClick={decline}
            style={{
              padding: '9px 18px',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: 'rgba(226,220,206,0.75)',
              background: 'transparent',
              border: '1px solid rgba(178,194,180,0.22)',
              borderRadius: '999px',
              cursor: 'pointer',
            }}
          >
            Отклонить
          </button>
          <button
            onClick={accept}
            style={{
              padding: '9px 20px',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: '#0b1610',
              background: 'rgba(196,183,163,0.95)',
              border: 'none',
              borderRadius: '999px',
              cursor: 'pointer',
            }}
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  )
}
