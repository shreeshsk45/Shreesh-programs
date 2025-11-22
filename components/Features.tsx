import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-[#0B0B0F] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 dark:text-brand-500 font-semibold tracking-wide uppercase text-sm mb-2">Why TripSync?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Everything you need to go anywhere.
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            We replaced the chaos of spreadsheets and group chats with a sleek, unified dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-white dark:bg-white/5 rounded-3xl hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 border border-slate-200 dark:border-white/5 hover:border-brand-500/20 shadow-sm dark:shadow-none hover:shadow-md"
            >
              <div className="w-14 h-14 bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20">
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};