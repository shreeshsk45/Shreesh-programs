import React from 'react';
import { Check, X, Minus } from 'lucide-react';

export const Comparison: React.FC = () => {
  const features = [
    { name: 'Real-time Itinerary Updates', tripsync: true, spreadsheet: false },
    { name: 'Offline Access to Tickets', tripsync: true, spreadsheet: false },
    { name: 'Auto-Expense Splitting', tripsync: true, spreadsheet: 'partial' },
    { name: 'Direct Booking Integration', tripsync: true, spreadsheet: false },
    { name: 'Visual Map View', tripsync: true, spreadsheet: false },
    { name: 'Document Storage (PDFs)', tripsync: true, spreadsheet: 'partial' },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0B0B0F] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Stop fighting your spreadsheet.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            See why 50,000+ travelers made the switch.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 dark:bg-[#15151A]">
                <th className="py-6 px-6 text-left text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-1/2">Feature</th>
                <th className="py-6 px-6 text-center bg-brand-50 dark:bg-brand-900/20 border-x border-slate-200 dark:border-white/5 w-1/4">
                  <div className="flex flex-col items-center">
                    <span className="font-extrabold text-brand-600 dark:text-brand-400 text-lg">TripSync</span>
                  </div>
                </th>
                <th className="py-6 px-6 text-center text-slate-500 dark:text-slate-400 font-semibold w-1/4">Spreadsheets</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5">
              {features.map((item, idx) => (
                <tr key={idx} className="bg-white dark:bg-[#0B0B0F] hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  <td className="py-5 px-6 text-slate-900 dark:text-slate-200 font-medium">
                    {item.name}
                  </td>
                  <td className="py-5 px-6 text-center bg-brand-50/30 dark:bg-brand-900/10 border-x border-slate-200 dark:border-white/5">
                    <div className="flex justify-center">
                      <div className="h-6 w-6 rounded-full bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <div className="flex justify-center">
                      {item.spreadsheet === false ? (
                         <X className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                      ) : (
                         <Minus className="w-5 h-5 text-yellow-500" />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};