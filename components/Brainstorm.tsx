
import React from 'react';

export const Brainstorm: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0B0B0F] overflow-hidden border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-accent-600 dark:text-accent-500 font-bold tracking-wide uppercase text-sm">Behind the Scenes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-6">
              It started with a messy mind map.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
              We believe the best tools are born from real frustration. We sat down with a blank sheet 
              of paper and asked: "Why is travel planning so fragmented?" 
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              From that first sketch, we mapped out the ecosystem of a perfect trip. 
              This drawing isn't just history; it's our product roadmap. We're building the 
              connections between discovery, booking, and experiencing that we visualized on day one.
            </p>
            
            <div className="flex items-center gap-5 bg-white dark:bg-[#15151A] p-4 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm w-fit">
              <div className="h-14 w-14 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden border-2 border-slate-300 dark:border-slate-700 shadow-md flex-shrink-0">
                <img src="https://i.pravatar.cc/150?u=founders" alt="Founders" />
              </div>
              <div className="flex flex-col gap-1">
                <div>
                    <span className="font-bold text-slate-900 dark:text-white text-sm block leading-tight">S.K.SHREESH</span>
                    <span className="text-[10px] text-brand-600 dark:text-brand-400 font-extrabold tracking-wider uppercase">CEO & CTO</span>
                </div>
                <div className="w-full h-px bg-slate-100 dark:bg-white/5 my-0.5"></div>
                <div>
                    <span className="font-bold text-slate-900 dark:text-white text-sm block leading-tight">K.P.ABHIJIT</span>
                    <span className="text-[10px] text-brand-600 dark:text-brand-400 font-extrabold tracking-wider uppercase">COO & CFO</span>
                </div>
              </div>
            </div>

          </div>
          
          <div className="lg:w-1/2 relative">
            {/* Artistic tape effect - styled to look like tape on a dark desk */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-400/30 dark:bg-yellow-600/20 rotate-2 shadow-sm z-20 backdrop-blur-sm border border-yellow-600/10"></div>
            
            {/* The Paper */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 bg-slate-200 p-4">
               <img 
                src="/mnt/data/A_mind_map_sketch_on_travel_planning_is_drawn_in_b.png" 
                alt="Original TripSync Brainstorming Sketch" 
                className="w-full h-auto rounded border border-slate-300 mix-blend-multiply contrast-125"
              />
              <p className="mt-4 text-center text-sm font-handwriting text-slate-600 italic font-serif">
                The original concept sketch, circa 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
