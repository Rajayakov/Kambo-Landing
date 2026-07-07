'use client'
// v7
import Link from 'next/link'
import Image from 'next/image'

const LEGAL = [
  'Информация, представленная на сайте, носит исключительно ознакомительный характер.',
  'Практика Камбо не является медицинской услугой, методом лечения или заменой обращения к врачу.',
  'Участие возможно только после предварительной личной консультации и оценки противопоказаний.',
]

const LINKS = [
  { label: 'Политика конфиденциальности',               href: '/privacy-policy' },
  { label: 'Согласие на обработку персональных данных', href: '/data-consent' },
  { label: 'Публичная оферта',                           href: '/oferta' },
  { label: 'Отказ от ответственности',                  href: '/disclaimer' },
]

export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="f-photo" aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 0, display: 'none' }}>
        <Image
          src="/amazon-rainforest-bg.webp"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 40%' }}
          sizes="100vw"
        />
      </div>
      <div className="f-veil" aria-hidden />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1000px',
        marginInline: 'auto',
        paddingInline: 'clamp(24px, 5vw, 48px)',
        paddingTop: 'clamp(56px, 7vw, 88px)',
        paddingBottom: 'clamp(44px, 6vw, 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>

        {/* ── Brand — mobile only, sits over the photo, high-contrast ── */}
        <p className="f-brand-top" style={{
          display: 'none',
          fontFamily: 'var(--font-cormorant)',
          fontSize: '30px',
          fontWeight: 600,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: '#F8F1DE',
          textShadow: '0 2px 18px rgba(0,0,0,0.85), 0 1px 3px rgba(0,0,0,0.9)',
        }}>
          Открытое Небо
        </p>

        {/* ── Legal paragraphs — one line on desktop, wraps on mobile ── */}
        <div style={{ width: '100%', marginBottom: 'clamp(44px, 6vw, 64px)' }}>
          {LEGAL.map((line, i) => (
            <p key={i} className="f-legal" style={{
              fontSize: '13px',
              color: 'rgba(196,183,163,0.48)',
              lineHeight: 1.88,
              marginTop: i === 0 ? 0 : '10px',
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* ── Separator ── */}
        <div style={{
          width: '100%',
          height: '1px',
          background: 'rgba(178,194,180,0.07)',
          marginBottom: '22px',
        }} />

        {/* ── Links ── */}
        <p style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          rowGap: '8px',
          columnGap: '9px',
          fontSize: '11px',
          color: 'rgba(178,194,180,0.32)',
          lineHeight: 1.8,
          marginBottom: 'clamp(36px, 5vw, 52px)',
        }}>
          {LINKS.map((link, i) => (
            <span key={link.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', whiteSpace: 'nowrap' }}>
              {i > 0 && <span aria-hidden style={{ opacity: 0.38 }}>·</span>}
              <Link href={link.href} className="f-llink" style={{ color: 'inherit', textDecoration: 'none' }}>
                {link.label}
              </Link>
            </span>
          ))}
        </p>

        {/* ── Signature ── */}
        <p style={{
          fontSize: '12px',
          color: 'rgba(178,194,180,0.24)',
          lineHeight: 1.78,
          letterSpacing: '0.02em',
        }}>
          © 2026 ОТКРЫТОЕ НЕБО<br />
          Живое Поле Трансформации<br />
          Все права защищены.
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
        .f-llink { transition: color 0.22s; }
        .f-llink:hover { color: rgba(196,183,163,0.70) !important; }
        @media (min-width: 768px) { .f-legal { white-space: nowrap; } }

        @media (max-width: 767px) {
          .f-photo { display: block !important; }
          .f-brand-top { display: block !important; margin-bottom: 22px !important; }
          .f-veil {
            background:
              radial-gradient(ellipse at center, rgba(0,0,0,0.30) 20%, rgba(2,7,4,0.86) 100%),
              linear-gradient(180deg, rgba(5,12,7,0.55) 0%, rgba(4,10,6,0.94) 62%, rgba(4,10,6,0.97) 100%) !important;
          }
        }
      `}</style>
    </footer>
  )
}
