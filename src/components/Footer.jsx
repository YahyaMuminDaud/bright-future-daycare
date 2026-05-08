import { COLORS } from '../constants/theme';

export default function Footer() {
  return (
    <footer
      style={{
        background: COLORS.dark,
        color: 'white',
        padding: '1.75rem 2rem',
        textAlign: 'center',
      }}
    >
      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: '0.5rem' }}>
        Bright Future Learning Daycare
      </div>
      <div style={{ fontSize: 13, opacity: 0.7, lineHeight: 1.8 }}>
        4518 S 218th St, Kent WA 98032 · (206) 972-8281 · (206) 376-4472
        <br />
        Lul Ishaq &amp; Ifrah Elmi · License #1994227 · Mon–Fri 8am–5pm
      </div>
    </footer>
  );
}
