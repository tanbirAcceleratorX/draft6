import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Program from './components/Program';
import BYDP from './components/BYDP';
import Mentors from './components/Mentors';
import SkillsAndTools from './components/SkillsAndTools';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import EnrollmentModal from './components/EnrollmentModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onEnrollClick={() => setIsModalOpen(true)} />
      <Hero onEnrollClick={() => setIsModalOpen(true)} />
      <Program />
      <BYDP />
      <Mentors />
      <SkillsAndTools />
      <Pricing onEnrollClick={() => setIsModalOpen(true)} />
      <Footer />
      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;