import { COLORS } from '../constants/theme';
import PhonePills from '../components/PhonePills';

const programs = [
  {
    icon: '👶',
    title: 'Infant & Toddler Care',
    desc: "Attentive, nurturing care tailored to your youngest ones' developmental needs.",
  },
  {
    icon: '🎒',
    title: 'Preschool to Kindergarten',
    desc: 'School-readiness programs that build confidence, curiosity, and social skills.',
  },
  {
    icon: '🌟',
    title: 'School Break Programs',
    desc: 'Fun, enriching care during Winter, Spring, and Summer breaks.',
  },
];

const infoItems = [
  { label: 'Location', val: 'Kent, WA 98032' },
  { label: 'Hours',    val: 'Mon–Fri · 8am–5pm' },
  { label: 'License',  val: '#86355' },
  { label: 'Subsidy',  val: 'DSHS Accepted ✓' },
];

export default function HomePage({ setPage, openModal }) {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(135deg, ${COLORS.skyLight} 0%, #FEF9F0 100%)`,
          padding: '4rem 2rem 3rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 38,
            fontWeight: 900,
            color: COLORS.skyDark,
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}
        >
          Where Every Child's{' '}
          <span style={{ color: COLORS.sun }}>Bright Future</span> Begins
        </h1>
        <p
          style={{
            fontSize: 16,
            color: COLORS.mid,
            maxWidth: 420,
            margin: '0 auto 1.5rem',
            lineHeight: 1.7,
          }}
        >
          A warm, loving home daycare in Kent, WA — nurturing infants through
          school-age children with care, play, and learning.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => setPage('pricing')}
            style={{
              background: COLORS.skyDark,
              color: 'white',
              padding: '12px 24px',
              borderRadius: 999,
              fontFamily: 'inherit',
              fontSize: 15,
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            See Pricing
          </button>
          <button
            onClick={() => setPage('why')}
            style={{
              background: 'white',
              color: COLORS.skyDark,
              padding: '12px 24px',
              borderRadius: 999,
              fontFamily: 'inherit',
              fontSize: 15,
              fontWeight: 800,
              border: `2px solid ${COLORS.sky}`,
              cursor: 'pointer',
            }}
          >
            Why Choose Us
          </button>
        </div>
      </div>

      {/* Program Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          padding: '2.5rem 1.5rem',
          maxWidth: 860,
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {programs.map((c) => (
          <div
            key={c.title}
            style={{
              background: 'white',
              borderRadius: 16,
              padding: '1.5rem 1.25rem',
              textAlign: 'center',
              border: `1.5px solid ${COLORS.border}`,
              minWidth: 0,
            }}
          >
            <div style={{ fontSize: 36, marginBottom: '0.75rem' }}>{c.icon}</div>
            <div style={{ fontSize: 15, fontWeight: 800, color: COLORS.dark, marginBottom: '0.4rem' }}>
              {c.title}
            </div>
            <div style={{ fontSize: 13, color: COLORS.mid, lineHeight: 1.6 }}>{c.desc}</div>
          </div>
        ))}
      </div>

      {/* Info Strip */}
      <div
        style={{
          background: COLORS.skyDark,
          color: 'white',
          padding: '1.75rem 2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
          {infoItems.map((i) => (
            <div
              key={i.label}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}
            >
              <span
                style={{
                  fontSize: 12,
                  opacity: 0.7,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {i.label}
              </span>
              <span style={{ fontSize: 16, fontWeight: 800 }}>{i.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          background: COLORS.sunLight,
          padding: '2.5rem 2rem',
          textAlign: 'center',
          borderTop: `2px solid rgba(245,166,35,0.2)`,
        }}
      >
        <h2
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 26,
            color: COLORS.dark,
            marginBottom: '0.5rem',
          }}
        >
          Ready to Schedule a Tour?
        </h2>
        <p style={{ color: COLORS.mid, fontSize: 15, marginBottom: '1.25rem' }}>
          We'd love to meet your family. Give us a call today!
        </p>
        <PhonePills openModal={openModal} />
        <p style={{ color: COLORS.mid, fontSize: 13, marginTop: '1rem' }}>
          Lul Ishaq &amp; Ifrah Elmi · 4518 S 218th St, Kent WA 98032
        </p>
      </div>
    </div>
  );
}