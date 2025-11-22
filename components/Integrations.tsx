import React from 'react';
import { Globe, Database, Server, Shield, CloudLightning, Layers } from 'lucide-react';

export const Integrations: React.FC = () => {
  const partners = [
    { name: "Skyscanner API", icon: CloudLightning },
    { name: "Booking.com", icon: Layers },
    { name: "Google Maps", icon: Globe },
    { name: "Stripe Connect", icon: Shield },
    { name: "Amadeus GDS", icon: Database },
    { name: "Airbnb", icon: Server },
  ];

  return (
    <section className="py-12 border-b border-slate-200 dark:border-white/5 bg-white dark:bg-[#0B0B0F] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8">
          Powering your trip with data from the best
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex items-center gap-2 group cursor-default">
              <partner.icon className="w-6 h-6 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" />
              <span className="text-lg font-bold text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};