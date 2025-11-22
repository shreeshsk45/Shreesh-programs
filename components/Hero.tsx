import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-50 dark:bg-[#0B0B0F] overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 transition-colors duration-300">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] rounded-full bg-brand-200/60 dark:bg-brand-900/40 blur-[100px]" />
         <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-accent-200/60 dark:bg-accent-900/20 blur-[100px]" />
         <div className="absolute bottom-0 right-20 w-[400px] h-[400px] rounded-full bg-brand-100/60 dark:bg-brand-800/20 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-brand-600 dark:text-brand-200 mb-8 backdrop-blur-sm shadow-sm dark:shadow-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide uppercase">v2.0 is live now</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">
          Travel Smarter,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500 dark:from-brand-400 dark:to-accent-400">
            Not Harder.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          Stop juggling ten apps just to plan one weekend away. TripSync unifies booking, 
          itineraries, and spending into one seamless flow. Experience travel the way it 
          should be: effortless and exciting.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-brand-900/20 dark:shadow-brand-900/30 flex items-center justify-center gap-2 group">
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 dark:bg-white/5 dark:hover:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2 shadow-sm dark:shadow-none">
            <PlayCircle className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        {/* Social Proof / Trust */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/5">
          <p className="text-sm text-slate-500 mb-6">Trusted by 50,000+ explorers worldwide</p>
          <div className="flex justify-center gap-8 opacity-40 dark:opacity-30 grayscale hover:grayscale-0 hover:opacity-100 dark:hover:opacity-50 transition-all duration-500">
             {/* Placeholder for logos */}
             <div className="text-xl font-bold text-slate-800 dark:text-white">AEROLINE</div>
             <div className="text-xl font-bold text-slate-800 dark:text-white">SKYSTAY</div>
             <div className="text-xl font-bold text-slate-800 dark:text-white">RAILWAY</div>
             <div className="text-xl font-bold text-slate-800 dark:text-white">VISA</div>
          </div>
        </div>
      </div>
    </div>
  );
};