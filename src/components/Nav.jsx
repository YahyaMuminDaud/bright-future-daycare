import { COLORS } from '../constants/theme';

const links = [
  { id: 'home',    label: 'Home' },
  { id: 'why',     label: 'Why Us' },
  { id: 'pricing', label: 'Pricing' },
];

export default function Nav({ page, setPage }) {
  return (
    <nav
      style={{
        background: 'white',
        borderBottom: `2px solid ${COLORS.border}`,
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ lineHeight: 1.2 }}>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(12px, 3vw, 17px)', fontWeight: 900, color: COLORS.skyDark }}>
          Bright Future
        </div>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(10px, 2.5vw, 14px)', fontWeight: 700, color: COLORS.sun }}>
          Learning Daycare
        </div>
      </div>

      <div style={{ display: 'flex', gap: 4 }}>
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => setPage(l.id)}
            style={{
              background: page === l.id ? COLORS.sky : 'transparent',
              border: 'none',
              padding: '8px 14px',
              borderRadius: 999,
              fontFamily: 'inherit',
              fontSize: 14,
              fontWeight: 700,
              color: page === l.id ? 'white' : COLORS.mid,
              cursor: 'pointer',
            }}
          >
            {l.label}
          </button>
        ))}

        <button
          onClick={() => setPage('home')}
          style={{
            background: COLORS.coral,
            border: 'none',
            padding: '8px 14px',
            borderRadius: 999,
            fontFamily: 'inherit',
            fontSize: 14,
            fontWeight: 700,
            color: 'white',
            cursor: 'pointer',
            marginLeft: 4,
          }}
        >
          Enroll Now
        </button>
      </div>
    </nav>
  );
}
