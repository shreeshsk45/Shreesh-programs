
import React, { useState, useEffect } from 'react';
import { User, Users, Map, DollarSign, Coffee, Tent, Sparkles } from 'lucide-react';

const SOLO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
    caption: "Munnar Tea Plantations",
    location: "Kerala, India",
    badge: "Nature"
  },
  {
    src: "https://images.unsplash.com/photo-1596328404748-798086629e53?q=80&w=800&auto=format&fit=crop",
    caption: "Coorg Coffee Estate",
    location: "Karnataka, India",
    badge: "Peace"
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop", // Vibrant travel concept
    caption: "Travel Never Ends",
    location: "Solo Adventure",
    badge: "Freedom"
  }
];

const SQUAD_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    caption: "Family at Taj Fort Aguada",
    location: "Goa, India",
    badge: "Family"
  },
  {
    src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
    caption: "Goa Beach Fun",
    location: "Goa, India",
    badge: "Squad Goals"
  },
  {
    src: "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?q=80&w=800&auto=format&fit=crop", // Colorful/Fun Holi or Festival vibe
    caption: "Memories in Making",
    location: "Everywhere",
    badge: "Fun"
  }
];

export const Personas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'solo' | 'squad'>('solo');
  const [imgIndex, setImgIndex] = useState(0);

  // Reset image index when tab changes
  useEffect(() => {
    setImgIndex(0);
  }, [activeTab]);

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % 3); // Cycle through 3 images
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentImages = activeTab === 'solo' ? SOLO_IMAGES : SQUAD_IMAGES;
  const activeImage = currentImages[imgIndex];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0B0B0F] transition-colors duration-300 border-b border-slate-200 dark:border-white/5 relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-600 dark:text-brand-500 font-semibold tracking-wide uppercase text-sm mb-2">For Every Style</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Built for your way of travel.
          </h3>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-white dark:bg-[#15151A] p-1.5 rounded-full border border-slate-200 dark:border-white/10 inline-flex relative shadow-sm">
             <div 
                className={`absolute top-1.5 bottom-1.5 rounded-full bg-brand-600 transition-all duration-300 ease-in-out ${activeTab === 'solo' ? 'left-1.5 w-[140px]' : 'left-[150px] w-[140px]'}`}
             ></div>
             
             <button 
              onClick={() => setActiveTab('solo')}
              className={`relative z-10 w-[140px] py-2.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-colors ${activeTab === 'solo' ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
             >
               <User className="w-4 h-4" /> Nature & Peace
             </button>
             <button 
              onClick={() => setActiveTab('squad')}
              className={`relative z-10 w-[140px] py-2.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-colors ${activeTab === 'squad' ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
             >
               <Users className="w-4 h-4" /> Family & Squad
             </button>
          </div>
        </div>

        {/* Grid Stack for Layout Stability */}
        <div className="grid grid-cols-1">
           
           {/* SOLO / NATURE CONTENT */}
           <div 
             className={`col-start-1 row-start-1 transition-all duration-500 ease-in-out ${
               activeTab === 'solo' 
                 ? 'opacity-100 translate-x-0 z-10' 
                 : 'opacity-0 -translate-x-8 z-0 pointer-events-none'
             }`}
           >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div className="order-2 lg:order-1 space-y-8">
                    <div>
                       <div className="w-12 h-12 bg-green-100 dark:bg-green-500/20 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                          <Map className="w-6 h-6" />
                       </div>
                       <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Lost in the Greenery</h4>
                       <p className="text-slate-600 dark:text-slate-400 text-lg">
                          Discover the serene hills of Munnar or the coffee estates of Coorg. 
                          TripSync helps you find off-beat paths where nature is your only companion.
                       </p>
                    </div>
                    <div>
                       <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                          <Coffee className="w-6 h-6" />
                       </div>
                       <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Connect with Locals</h4>
                       <p className="text-slate-600 dark:text-slate-400 text-lg">
                          Find authentic homestays in Kerala and Karnataka. Experience true hospitality, 
                          homemade food, and stories you won't find in guidebooks.
                       </p>
                    </div>
                 </div>
                 <div className="order-1 lg:order-2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#15151A] aspect-video flex items-center justify-center group">
                       {/* Carousel Image */}
                       {SOLO_IMAGES.map((img, idx) => (
                         <img 
                          key={idx}
                          src={img.src}
                          alt={img.caption}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === imgIndex ? 'opacity-90 scale-105' : 'opacity-0 scale-100'}`}
                         />
                       ))}
                       
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                       
                       {/* Animated Content */}
                       <div className="absolute bottom-6 left-6 text-white">
                          <div className="flex items-center gap-2 mb-2">
                             <span className="text-sm font-medium bg-green-600/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg transition-all duration-500 animate-fade-in">
                                {activeImage?.location}
                             </span>
                             <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-2 py-1 rounded-full uppercase tracking-wider border border-white/10">
                                {activeImage?.badge}
                             </span>
                          </div>
                          <p className="font-bold text-2xl animate-fade-in-up">
                            "{activeImage?.caption}"
                          </p>
                       </div>

                       {/* Cartoon/Animative Badge */}
                       <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl rotate-3 hover:rotate-0 transition-transform duration-300">
                          <span className="text-2xl">✈️</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* SQUAD / FAMILY CONTENT */}
           <div 
             className={`col-start-1 row-start-1 transition-all duration-500 ease-in-out ${
               activeTab === 'squad' 
                 ? 'opacity-100 translate-x-0 z-10' 
                 : 'opacity-0 translate-x-8 z-0 pointer-events-none'
             }`}
           >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div className="order-2 lg:order-1 space-y-8">
                    <div>
                       <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                          <Tent className="w-6 h-6" />
                       </div>
                       <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Fun for All Ages</h4>
                       <p className="text-slate-600 dark:text-slate-400 text-lg">
                          From kids building sandcastles to grandparents enjoying a sunset boat ride.
                          Plan activities that keep everyone smiling, from age 5 to 85.
                       </p>
                    </div>
                    <div>
                       <div className="w-12 h-12 bg-orange-100 dark:bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4">
                          <DollarSign className="w-6 h-6" />
                       </div>
                       <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Stress-Free Family Finance</h4>
                       <p className="text-slate-600 dark:text-slate-400 text-lg">
                          Track family expenses easily. No more confusion about who paid for dinner 
                          or the taxi. Focus on making memories, not counting rupees.
                       </p>
                    </div>
                 </div>
                 <div className="order-1 lg:order-2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#15151A] aspect-video flex items-center justify-center group">
                       {/* Carousel Image */}
                       {SQUAD_IMAGES.map((img, idx) => (
                         <img 
                          key={idx}
                          src={img.src}
                          alt={img.caption}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === imgIndex ? 'opacity-90 scale-105' : 'opacity-0 scale-100'}`}
                         />
                       ))}

                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                       
                       {/* Animated Content */}
                       <div className="absolute bottom-6 left-6 text-white">
                          <div className="flex items-center gap-2 mb-2">
                             <span className="text-sm font-medium bg-orange-500/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg transition-all duration-500 animate-fade-in">
                                {activeImage?.location}
                             </span>
                             <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-2 py-1 rounded-full uppercase tracking-wider border border-white/10">
                                {activeImage?.badge}
                             </span>
                          </div>
                          <p className="font-bold text-2xl animate-fade-in-up">
                            "{activeImage?.caption}"
                          </p>
                       </div>

                       {/* Cartoon/Animative Floating Element */}
                        <div className="absolute top-6 right-6 bg-brand-500/80 backdrop-blur-md border border-white/20 p-2 px-3 rounded-xl rotate-[-3deg] hover:rotate-0 transition-transform duration-300 shadow-lg">
                          <div className="flex items-center gap-1">
                             <Sparkles className="w-4 h-4 text-yellow-300" />
                             <span className="text-xs font-bold text-white">Travel Never Ends</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
