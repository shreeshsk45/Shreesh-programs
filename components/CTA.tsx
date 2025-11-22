import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0B0B0F] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-600 dark:bg-brand-900/40 rounded-3xl p-8 md:p-16 text-center shadow-2xl shadow-brand-500/30 dark:shadow-none border border-brand-500/20 relative overflow-hidden">
          
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>Join the waitlist for v2.0</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to stop stressing<br />and start exploring?
            </h2>
            
            <p className="text-brand-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Join 50,000+ travelers who have ditched the spreadsheets. 
              Get early access to our AI planner today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-brand-200 focus:outline-none focus:ring-2 focus:ring-white/50 w-full backdrop-blur-sm transition-all"
              />
              <button className="px-8 py-4 bg-white text-brand-600 font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shadow-lg">
                Get Access
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <p className="mt-6 text-sm text-brand-200/80">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};