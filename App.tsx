
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Integrations } from './components/Integrations';
import { Features } from './components/Features';
import { Security } from './components/Security';
import { HowItWorks } from './components/HowItWorks';
import { Brainstorm } from './components/Brainstorm';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { DashboardPreview } from './components/DashboardPreview';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Comparison } from './components/Comparison';
import { Personas } from './components/Personas';
import { TravelCalculatorModal } from './components/TravelCalculatorModal';

const App: React.FC = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0B0F] font-sans selection:bg-brand-500/30 selection:text-brand-600 dark:selection:text-brand-100 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero onOpenCalculator={() => setIsCalculatorOpen(true)} />
        <Integrations />
        <DashboardPreview />
        <Features />
        <Security />
        <Personas />
        <HowItWorks />
        <Brainstorm />
        <Comparison />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <TravelCalculatorModal isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
    </div>
  );
};

export default App;
