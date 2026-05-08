import { COLORS } from '../constants/theme';

const reasons = [
  {
    icon: '🏡',
    bg: '#E8F5FB',
    title: 'Home-Based Environment',
    desc: 'Our licensed home daycare creates a cozy, low-stress setting that feels safe and familiar — not institutional.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    bg: '#FEF3DC',
    title: 'Small, Personalized Groups',
    desc: 'Fewer children means more one-on-one attention, stronger bonds, and learning tailored to each child.',
  },
  {
    icon: '📚',
    bg: '#E8F7ED',
    title: 'School-Ready Programs',
    desc: "From preschool through kindergarten, our curriculum builds the skills children need to thrive in school and beyond.",
  },
  {
    icon: '🗓️',
    bg: '#FDEEE9',
    title: 'Flexible Scheduling',
    desc: "Full-time, part-time, and hourly options available. We work around your family's schedule.",
  },
  {
    icon: '✅',
    bg: '#E8F5FB',
    title: 'Fully Licensed & Insured',
    desc: 'State licensed (#1994227), giving you complete peace of mind that your child is in a certified, safe environment.',
  },
  {
    icon: '💰',
    bg: '#FEF3DC',
    title: 'Subsidy Accepted',
    desc: 'We proudly accept DSHS & Working Connections Subsidy so more families can access quality care.',
  },
  {
    icon: '☀️',
    bg: '#E8F7ED',
    title: 'Year-Round Break Care',
    desc: 'School-age children are covered during Winter, Spring, and Summer breaks — consistent care all year.',
  },
  {
    icon: '❤️',
    bg: '#FDEEE9',
    title: 'Family-Run with Heart',
    desc: "Run by Lul Ishaq & Ifrah Elmi, we treat every child like family because that's exactly what this is.",
  },
];

export default function WhyPage() {
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
          Why Bright Future?
        </h1>
        <p style={{ color: COLORS.mid, fontSize: 16, maxWidth: 460, margin: '0 auto', lineHeight: 1.65 }}>
          We're more than a daycare — we're a home away from home where your child
          is truly known and loved.
        </p>
      </div>

      {/* Reason Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
          padding: '2rem 1.5rem',
          maxWidth: 860,
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {reasons.map((r) => (
          <div
            key={r.title}
            style={{
              background: 'white',
              borderRadius: 16,
              padding: '1.5rem',
              border: `1.5px solid ${COLORS.border}`,
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
              minWidth: 0,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: r.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                flexShrink: 0,
              }}
            >
              {r.icon}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: COLORS.dark, marginBottom: '0.35rem' }}>
                {r.title}
              </div>
              <div style={{ fontSize: 13, color: COLORS.mid, lineHeight: 1.6 }}>{r.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div
        style={{
          background: COLORS.leafLight,
          padding: '2rem',
          textAlign: 'center',
          borderTop: `2px solid rgba(91,173,114,0.2)`,
          borderBottom: `2px solid rgba(91,173,114,0.2)`,
        }}
      >
        <h2
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 26,
            color: COLORS.dark,
            marginBottom: '1.25rem',
          }}
        >
          What Families Are Saying
        </h2>
        <div
          style={{
            background: 'white',
            borderRadius: 14,
            padding: '1.5rem',
            maxWidth: 480,
            margin: '0 auto',
            border: `1.5px solid rgba(91,173,114,0.25)`,
          }}
        >
          <p
            style={{
              fontSize: 14,
              color: COLORS.mid,
              lineHeight: 1.75,
              fontStyle: 'italic',
              marginBottom: '0.75rem',
            }}
          >
            "Bright Future has been an absolute blessing for our family. My daughter
            looks forward to going every single day, and I can tell she's learning so
            much. Lul and Ifrah are truly wonderful caregivers."
          </p>
          <strong style={{ fontSize: 13, color: COLORS.dark }}>— Happy Bright Future Family</strong>
        </div>
      </div>

      {/* Subsidy Banner */}
      <div
        style={{
          background: COLORS.skyDark,
          color: 'white',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: '0.4rem' }}>
          We Accept DSHS &amp; Working Connections Subsidy
        </h3>
        <p style={{ fontSize: 14, opacity: 0.85 }}>
          Quality childcare shouldn't be out of reach. Contact us to learn how
          subsidies can work for your family.
        </p>
      </div>
    </div>
  );
}