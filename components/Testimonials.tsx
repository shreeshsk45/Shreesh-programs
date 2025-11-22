import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0B0B0F] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Loved by modern travelers.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Don't just take our word for it. Here is what the community says.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-[#15151A] p-8 rounded-2xl relative group hover:bg-slate-50 dark:hover:bg-[#1A1A20] transition-colors duration-300 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none hover:shadow-md">
              <Quote className="absolute top-8 right-8 w-8 h-8 text-brand-100 dark:text-brand-900/50 group-hover:text-brand-500/20 transition-colors" />
              
              <p className="text-slate-600 dark:text-slate-300 text-lg italic mb-8 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full border-2 border-slate-100 dark:border-brand-500/20 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-brand-600 dark:text-brand-400 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};