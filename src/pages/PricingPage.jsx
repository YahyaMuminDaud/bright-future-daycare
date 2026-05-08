import { COLORS } from '../constants/theme';
import PhonePills from '../components/PhonePills';

const rows = [
  { label: 'Infants',            full: '$90', part: '$45', hourly: '$15' },
  { label: 'Toddlers',           full: '$90', part: '$45', hourly: '$15' },
  { label: 'Pre-schoolers',      full: '$75', part: '$37', hourly: '$15' },
  { label: 'School-age',         full: '$65', part: '$32', hourly: '$15' },
  { label: 'Two-child Family',   full: '$84', part: '$30', hourly: '$15' },
  { label: 'Three-child Family', full: '$75', part: '$27', hourly: '$15' },
];

const definitions = [
  { icon: '🕐', title: 'Full-Time', desc: 'More than 5 hours per day of care.' },
  { icon: '🕓', title: 'Part-Time', desc: '4 hours or less per day of care.' },
  {
    icon: '⏱️',
    title: 'Drop-In',
    desc: 'Prearranged only, based on availability. All registration must be current and complete.',
  },
];

const policies = [
  {
    dot: COLORS.sky,
    title: 'Payment Policy',
    desc: "Parents pay for the time their child is scheduled, whether or not they attend — you're reserving a space. Payment is due before the 1st of each month. Cash or checks only.",
  },
  {
    dot: COLORS.sun,
    title: 'Holiday & Closure Fees',
    desc: 'Fees are not reduced during months or weeks that include holidays, emergency closures, or vacations.',
  },
  {
    dot: COLORS.leaf,
    title: 'DSHS / Subsidy',
    desc: 'We accept DSHS & Working Connections Subsidy. Full-time subsidy covers 5–10 hours of care per day.',
  },
  {
    dot: COLORS.coral,
    title: 'Special Payment Terms',
    desc: 'Special payment terms are negotiable on occasion and will be defined in your care contract.',
  },
];

export default function PricingPage({ openModal }) {
  return (
    <div>
      {/* Header */}
      <div
        style={{
          background: COLORS.skyLight,
          padding: '3rem 2rem 2rem',
          textAlign: 'center',
          borderBottom: `2px solid ${COLORS.border}`,
        }}
      >
        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 36,
            color: COLORS.skyDark,
            marginBottom: '0.75rem',
          }}
        >
          Transparent Pricing
        </h1>
        <p style={{ color: COLORS.mid, fontSize: 16, maxWidth: 440, margin: '0 auto', lineHeight: 1.65 }}>
          Clear, fair rates for every family. No surprises — just quality care at every level.
        </p>
      </div>

      <div style={{ padding: '2rem 1.5rem', maxWidth: 860, margin: '0 auto' }}>

        {/* Onboarding Fee */}
        <div
          style={{
            background: COLORS.coralLight,
            border: `2px solid rgba(224,123,91,0.3)`,
            borderRadius: 16,
            padding: '1.25rem 1.5rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div style={{ fontSize: 32, flexShrink: 0 }}>📋</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: COLORS.dark, marginBottom: '0.2rem' }}>
              One-Time Onboarding Fee:{' '}
              <span style={{ color: COLORS.coral }}>$50 per child</span>
            </div>
            <div style={{ fontSize: 13, color: COLORS.mid, lineHeight: 1.6 }}>
              A one-time $50 onboarding fee is required per child upon enrollment.
              This covers registration, intake paperwork, and initial setup.
            </div>
          </div>
        </div>

        {/* Pricing Table */}
        <div
          style={{
            background: 'white',
            borderRadius: 16,
            border: `1.5px solid ${COLORS.border}`,
            overflow: 'hidden',
            marginBottom: '1.5rem',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: COLORS.skyDark, color: 'white' }}>
                {['Care Type', 'Full-Time / Day', 'Part-Time / Day', 'Hourly'].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: '13px 14px',
                      fontSize: 13,
                      fontWeight: 800,
                      textAlign: h === 'Care Type' ? 'left' : 'center',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.label}
                  style={{
                    borderBottom: i < rows.length - 1 ? `1px solid ${COLORS.border}` : 'none',
                  }}
                >
                  <td style={{ padding: '13px 14px', fontWeight: 800, color: COLORS.dark, fontSize: 14 }}>
                    {r.label}
                  </td>
                  {[r.full, r.part, r.hourly].map((v, vi) => (
                    <td
                      key={vi}
                      style={{
                        padding: '13px 14px',
                        textAlign: 'center',
                        fontWeight: 800,
                        color: COLORS.skyDark,
                        fontSize: 15,
                      }}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Definitions */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          {definitions.map((d) => (
            <div
              key={d.title}
              style={{
                background: 'white',
                borderRadius: 14,
                padding: '1.25rem',
                border: `1.5px solid ${COLORS.border}`,
              }}
            >
              <div style={{ fontSize: 22, marginBottom: '0.5rem' }}>{d.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: COLORS.dark, marginBottom: '0.35rem' }}>
                {d.title}
              </div>
              <div style={{ fontSize: 13, color: COLORS.mid, lineHeight: 1.6 }}>{d.desc}</div>
            </div>
          ))}
        </div>

        {/* Policies */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          {policies.map((p) => (
            <div
              key={p.title}
              style={{
                background: 'white',
                borderRadius: 14,
                padding: '1.25rem 1.5rem',
                border: `1.5px solid ${COLORS.border}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.5rem' }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: p.dot,
                    flexShrink: 0,
                  }}
                />
                <div style={{ fontSize: 14, fontWeight: 800, color: COLORS.dark }}>{p.title}</div>
              </div>
              <div style={{ fontSize: 13, color: COLORS.mid, lineHeight: 1.65 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            background: COLORS.sunLight,
            borderRadius: 16,
            border: `2px solid rgba(245,166,35,0.2)`,
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 24,
              color: COLORS.dark,
              marginBottom: '0.5rem',
            }}
          >
            Ready to Get Started?
          </h2>
          <p style={{ color: COLORS.mid, fontSize: 14, marginBottom: '1.25rem' }}>
            Schedule a tour and we'll walk you through everything in person.
          </p>
          <PhonePills openModal={openModal} />
          <p style={{ color: COLORS.mid, fontSize: 13, marginTop: '0.75rem' }}>
            Monday–Friday · 8am–5pm · 4518 S 218th St, Kent WA
          </p>
        </div>

      </div>
    </div>
  );
}
