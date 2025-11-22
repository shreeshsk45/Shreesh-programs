import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Brainstorm } from './components/Brainstorm';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { DashboardPreview } from './components/DashboardPreview';
import { Testimonials } from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0B0F] font-sans selection:bg-brand-500/30 selection:text-brand-600 dark:selection:text-brand-100 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <DashboardPreview />
        <Features />
        <HowItWorks />
        <Brainstorm />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;