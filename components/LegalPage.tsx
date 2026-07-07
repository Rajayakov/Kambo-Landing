import Link from 'next/link'

export default function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string
  updated: string
  sections: { heading: string; body: string[] }[]
}) {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'var(--kambo-bg)',
        paddingBlock: 'clamp(64px, 9vw, 104px)',
        paddingInline: 'clamp(20px, 5vw, 48px)',
      }}
    >
      <div style={{ maxWidth: '680px', marginInline: 'auto' }}>
        <Link
          href="/"
          style={{
            fontSize: '12px',
            color: 'var(--kambo-text-lo)',
            opacity: 0.7,
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}
        >
          ← На главную
        </Link>

        <h1
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 400,
            fontSize: 'clamp(32px, 4vw, 46px)',
            color: 'var(--kambo-text-hi)',
            marginTop: '28px',
            marginBottom: '10px',
            lineHeight: 1.15,
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: '12.5px',
            color: 'var(--kambo-text-lo)',
            opacity: 0.7,
            letterSpacing: '0.04em',
            marginBottom: '56px',
          }}
        >
          Обновлено: {updated}
        </p>

        {sections.map((section, i) => (
          <section key={i} style={{ marginBottom: '40px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 400,
                fontSize: 'clamp(19px, 2.2vw, 23px)',
                color: 'var(--kambo-text-hi)',
                marginBottom: '14px',
              }}
            >
              {section.heading}
            </h2>
            {section.body.map((p, j) => (
              <p
                key={j}
                style={{
                  fontSize: '15px',
                  color: 'var(--kambo-text-lo)',
                  lineHeight: 1.75,
                  marginTop: j === 0 ? 0 : '12px',
                  opacity: 0.82,
                }}
              >
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </main>
  )
}
