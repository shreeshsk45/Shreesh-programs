import React from 'react';
import { STEPS } from '../constants';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-[#0B0B0F] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">How it works</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Three steps to your dream vacation.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {STEPS.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center text-center bg-slate-50 dark:bg-[#0B0B0F] p-4 rounded-xl transition-colors duration-300">
                <div className="w-24 h-24 rounded-full bg-white dark:bg-[#15151A] border-4 border-brand-100 dark:border-brand-900/30 flex items-center justify-center text-3xl font-bold text-brand-600 dark:text-brand-400 mb-6 shadow-lg shadow-slate-200 dark:shadow-black/50">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};