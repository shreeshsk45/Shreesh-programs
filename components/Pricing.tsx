import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-[#0B0B0F] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 dark:text-brand-500 font-semibold tracking-wide uppercase text-sm mb-2">Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Simple plans for every traveler.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative bg-white dark:bg-[#15151A] rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 ${plan.isPopular ? 'border border-brand-500 ring-1 ring-brand-500/20 scale-105 z-10 shadow-brand-500/20 dark:shadow-brand-900/20' : 'border border-slate-200 dark:border-white/5'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg shadow-black/20 border border-brand-500">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-brand-600 dark:text-brand-400" />
                    </div>
                    <span className="ml-3 text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-4 rounded-xl font-bold transition-all ${
                plan.isPopular 
                  ? 'bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-500/20' 
                  : 'bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};