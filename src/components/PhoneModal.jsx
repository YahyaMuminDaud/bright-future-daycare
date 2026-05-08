import { PHONES } from '../constants/theme';

export default function PhoneModal({ onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 32,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'rgba(242,242,247,0.98)',
          borderRadius: 16,
          width: '92%',
          maxWidth: 380,
          overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
        }}
      >
        <div
          style={{
            padding: '14px 16px 10px',
            textAlign: 'center',
            borderBottom: '0.5px solid rgba(0,0,0,0.15)',
          }}
        >
          <div style={{ fontSize: 13, color: '#8E8E93', fontWeight: 500 }}>
            Bright Future Learning Daycare
          </div>
        </div>

        {PHONES.map((p) => (
          <a
            key={p.number}
            href={`tel:${p.number}`}
            style={{
              display: 'block',
              padding: '14px 16px',
              textAlign: 'center',
              textDecoration: 'none',
              borderBottom: '0.5px solid rgba(0,0,0,0.12)',
            }}
          >
            <div style={{ fontSize: 12, color: '#8E8E93', marginBottom: 3 }}>
              {p.label}
            </div>
            <div style={{ fontSize: 20, fontWeight: 600, color: '#007AFF' }}>
              📞 {p.display}
            </div>
          </a>
        ))}

        <div style={{ height: 8, background: 'rgba(0,0,0,0.08)' }} />

        <button
          onClick={onClose}
          style={{
            display: 'block',
            width: '100%',
            padding: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 17,
            fontWeight: 700,
            color: '#007AFF',
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
