'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { NAV_LINKS } from '@/lib/constants'

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false)
  const [activeId, setActiveId]     = useState<string>('')
  const reduce                      = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-60px 0px 0px 0px' }
    )
    const sentinel = document.getElementById('nav-sentinel')
    if (sentinel) observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  // Active section detection
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { threshold: 0.25, rootMargin: '-80px 0px -50% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <>
      <div id="nav-sentinel" style={{ position: 'absolute', top: 0, height: 1 }} />

      {/* Floating pill wrapper */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          padding: '14px clamp(16px, 4vw, 32px)',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          animate={reduce ? {} : {
            backgroundColor: scrolled
              ? 'rgba(11,26,15,0.85)'
              : 'rgba(11,26,15,0.55)',
            borderColor: scrolled
              ? 'rgba(196,146,42,0.22)'
              : 'rgba(196,146,42,0.1)',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(240,230,200,0.04)'
              : '0 2px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(240,230,200,0.03)',
          }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          style={{
            width: '100%',
            maxWidth: '900px',
            height: '54px',
            borderRadius: '999px',
            border: '1px solid rgba(196,146,42,0.1)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: 'clamp(16px, 2.5vw, 28px)',
            pointerEvents: 'all',
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              fontFamily: 'var(--font-cormorant)',
              fontSize: '18px',
              color: 'var(--kambo-text-hi)',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            <svg className="nav-logo-desktop" width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden>
              <ellipse cx="11" cy="14" rx="7" ry="5" fill="none" stroke="var(--kambo-accent)" strokeWidth="1.2"/>
              <ellipse cx="11" cy="10" rx="4" ry="3" fill="none" stroke="var(--kambo-accent)" strokeWidth="1.2"/>
              <circle cx="8.5" cy="9" r="1" fill="var(--kambo-accent)"/>
              <circle cx="13.5" cy="9" r="1" fill="var(--kambo-accent)"/>
            </svg>
            {/* Mobile logo — a clearer frog face: bulging eyes on a wide head */}
            <svg className="nav-logo-mobile" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <ellipse cx="12" cy="15" rx="9" ry="6.5" fill="none" stroke="var(--kambo-accent)" strokeWidth="1.3"/>
              <circle cx="7.2" cy="7.4" r="3.2" fill="none" stroke="var(--kambo-accent)" strokeWidth="1.3"/>
              <circle cx="16.8" cy="7.4" r="3.2" fill="none" stroke="var(--kambo-accent)" strokeWidth="1.3"/>
              <circle cx="7.2" cy="7.4" r="1.1" fill="var(--kambo-accent)"/>
              <circle cx="16.8" cy="7.4" r="1.1" fill="var(--kambo-accent)"/>
              <path d="M7.5 17.5C8.9 18.6 10.4 19.1 12 19.1C13.6 19.1 15.1 18.6 16.5 17.5" stroke="var(--kambo-accent)" strokeWidth="1.1" strokeLinecap="round"/>
            </svg>
            <span className="nav-brand-desktop">Яков Раджуна</span>
            <span className="nav-brand-mobile">Церемония Камбо</span>
          </a>

          {/* Desktop links */}
          <nav
            className="hidden-mobile"
            style={{ display: 'flex', alignItems: 'center', gap: '28px' }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontSize: '13px',
                    color: isActive ? 'var(--kambo-text-hi)' : 'var(--kambo-text-lo)',
                    transition: 'color 0.25s cubic-bezier(0.32,0.72,0,1)',
                    letterSpacing: '0.01em',
                    fontWeight: isActive ? 500 : 400,
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--kambo-text-hi)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = isActive ? 'var(--kambo-text-hi)' : 'var(--kambo-text-lo)')}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* CTA (desktop) / direct booking CTA (mobile) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href="#booking"
              className="hidden-mobile pill-cta"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--kambo-accent)',
                color: 'var(--kambo-bg)',
                paddingLeft: '16px',
                paddingRight: '6px',
                height: '34px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.03em',
                whiteSpace: 'nowrap',
                transition: 'background 0.25s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--kambo-accent-hi)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--kambo-accent)')}
            >
              Записаться
              <span
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(11,26,15,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'transform 0.3s cubic-bezier(0.32,0.72,0,1)',
                }}
                className="pill-cta-icon"
              >
                <ArrowUpRight size={12} weight="bold" />
              </span>
            </a>

            {/* Mobile: direct CTA replaces the hamburger drawer entirely */}
            <a
              href="#booking"
              className="show-mobile nav-mobile-cta"
              style={{
                alignItems: 'center',
                gap: '6px',
                background: 'var(--kambo-accent)',
                color: 'var(--kambo-bg)',
                paddingInline: '14px',
                height: '34px',
                borderRadius: '999px',
                fontSize: '12.5px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
              }}
            >
              <span className="nav-mobile-cta-full">Записаться на консультацию</span>
              <span className="nav-mobile-cta-short">Записаться</span>
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
          .nav-logo-mobile, .nav-brand-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
          .nav-logo-desktop, .nav-brand-desktop { display: none !important; }
        }
        .pill-cta:hover .pill-cta-icon {
          transform: translate(2px, -2px);
        }

        /* Mobile CTA: full label by default, "Записаться" only if it's tight */
        .nav-mobile-cta-short { display: none; }
        @media (max-width: 400px) {
          .nav-mobile-cta-full  { display: none; }
          .nav-mobile-cta-short { display: inline; }
        }
      `}</style>
    </>
  )
}
