import { useState } from 'react';
import { COLORS } from './constants/theme';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PhoneModal from './components/PhoneModal';
import HomePage from './pages/HomePage';
import WhyPage from './pages/WhyPage';
import PricingPage from './pages/PricingPage';

export default function App() {
  const [page, setPage] = useState('home');
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: COLORS.cream, color: COLORS.dark, minHeight: '100vh' }}>
      {showModal && <PhoneModal onClose={() => setShowModal(false)} />}
      <Nav page={page} setPage={setPage} />
      {page === 'home'    && <HomePage    setPage={setPage} openModal={() => setShowModal(true)} />}
      {page === 'why'     && <WhyPage />}
      {page === 'pricing' && <PricingPage openModal={() => setShowModal(true)} />}
      <Footer />
    </div>
  );
}
