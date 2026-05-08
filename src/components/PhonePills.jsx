import { COLORS, PHONES } from '../constants/theme';

export default function PhonePills({ openModal }) {
  return (
    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
      {PHONES.map((p) => (
        <button
          key={p.number}
          onClick={openModal}
          style={{
            background: 'white',
            border: `2px solid ${COLORS.sun}`,
            padding: '10px 20px',
            borderRadius: 999,
            fontWeight: 800,
            fontSize: 15,
            cursor: 'pointer',
            fontFamily: 'inherit',
            color: COLORS.dark,
          }}
        >
          📞 {p.display}
        </button>
      ))}
    </div>
  );
}
