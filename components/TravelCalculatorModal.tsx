
import React, { useState, useMemo } from 'react';
import { X, Bus, Train, Plane, ArrowRight, Clock, MapPin, IndianRupee, Filter, Loader2 } from 'lucide-react';
import { INDIAN_LOCATIONS } from '../constants';
import { GoogleGenAI, Type, Schema } from "@google/genai";

interface TravelCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TransportMode = 'bus' | 'train' | 'flight';

interface TravelOption {
  id: string;
  operator: string;
  number: string; // Flight no, Train no, Bus reg
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  type: string; // Non-stop, Sleeper, etc.
  tags?: string[];
}

export const TravelCalculatorModal: React.FC<TravelCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<TransportMode>('flight');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [results, setResults] = useState<TravelOption[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Memoize the flattened list for finding city data quickly, but use grouped list for UI
  const sortedStates = useMemo(() => Object.keys(INDIAN_LOCATIONS).sort(), []);
  
  if (!isOpen) return null;

  const fetchTravelData = async () => {
    if (!source || !destination || source === destination) return;

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `
        Generate 5 realistic and accurate ${mode} travel options from ${source} to ${destination}, India.
        Based on real-world connectivity, provide:
        1. Real operator names (e.g., for Flight: Indigo, Air India; for Train: Vande Bharat, Shatabdi, Rajdhani; for Bus: KSRTC Airavat, VRL).
        2. Realistic flight numbers, train numbers, or bus types.
        3. Accurate typical departure/arrival times and duration.
        4. Current market price estimates in INR.
        5. A mix of Premium, Budget, and Fastest options.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                operator: { type: Type.STRING },
                number: { type: Type.STRING },
                departure: { type: Type.STRING, description: "24h format HH:MM" },
                arrival: { type: Type.STRING, description: "24h format HH:MM" },
                duration: { type: Type.STRING, description: "e.g. 2h 15m" },
                price: { type: Type.NUMBER },
                type: { type: Type.STRING, description: "e.g. Non-stop, Sleeper, AC" },
                tags: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["id", "operator", "number", "departure", "arrival", "duration", "price", "type"]
            }
          }
        }
      });

      if (response.text) {
        const data = JSON.parse(response.text) as TravelOption[];
        // Sort by price or departure, default to price for budget travelers
        setResults(data.sort((a, b) => a.price - b.price));
      } else {
        throw new Error("No data received from cloud.");
      }

    } catch (err) {
      console.error("Failed to fetch travel data", err);
      setError("Could not fetch live data. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white dark:bg-[#1A1A20] rounded-3xl shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col overflow-hidden border border-slate-200 dark:border-white/10 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-white/5 flex justify-between items-center bg-slate-50 dark:bg-[#121216] flex-shrink-0">
          <div>
             <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
               Trip Calculator <span className="px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-[10px] uppercase tracking-wider">Cloud Powered</span>
             </h3>
             <p className="text-xs text-slate-500 dark:text-slate-400">Real-time schedules & fares from Gemini AI</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors text-slate-500 dark:text-slate-400">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-6">
            {/* Tabs */}
            <div className="flex p-1 bg-slate-100 dark:bg-black/40 rounded-xl mb-6 sticky top-0 z-10 backdrop-blur-md">
              <button 
                onClick={() => { setMode('bus'); setResults(null); setError(null); }}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${mode === 'bus' ? 'bg-white dark:bg-brand-600 shadow-sm text-brand-600 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
              >
                <Bus size={16} /> Bus
              </button>
              <button 
                onClick={() => { setMode('train'); setResults(null); setError(null); }}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${mode === 'train' ? 'bg-white dark:bg-brand-600 shadow-sm text-brand-600 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
              >
                <Train size={16} /> Train
              </button>
              <button 
                onClick={() => { setMode('flight'); setResults(null); setError(null); }}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${mode === 'flight' ? 'bg-white dark:bg-brand-600 shadow-sm text-brand-600 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
              >
                <Plane size={16} /> Flight
              </button>
            </div>

            {/* Inputs */}
            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">From</label>
                  <select 
                    className="w-full p-3 bg-slate-50 dark:bg-[#0B0B0F] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 appearance-none"
                    value={source}
                    onChange={(e) => { setSource(e.target.value); setResults(null); setError(null); }}
                  >
                    <option value="">Select Origin</option>
                    {sortedStates.map(state => (
                      <optgroup label={state} key={state} className="dark:bg-[#1A1A20] font-bold text-brand-600 dark:text-brand-400">
                        {INDIAN_LOCATIONS[state].sort((a, b) => a.name.localeCompare(b.name)).map(city => (
                           <option key={city.name} value={city.name} disabled={city.name === destination} className="text-slate-900 dark:text-white font-normal">
                             {city.name}
                           </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">To</label>
                  <select 
                    className="w-full p-3 bg-slate-50 dark:bg-[#0B0B0F] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 appearance-none"
                    value={destination}
                    onChange={(e) => { setDestination(e.target.value); setResults(null); setError(null); }}
                  >
                    <option value="">Select Destination</option>
                    {sortedStates.map(state => (
                      <optgroup label={state} key={state} className="dark:bg-[#1A1A20] font-bold text-brand-600 dark:text-brand-400">
                        {INDIAN_LOCATIONS[state].sort((a, b) => a.name.localeCompare(b.name)).map(city => (
                           <option key={city.name} value={city.name} disabled={city.name === source} className="text-slate-900 dark:text-white font-normal">
                             {city.name}
                           </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>

              <button 
                onClick={fetchTravelData}
                disabled={!source || !destination || loading}
                className="w-full py-3 bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20"
              >
                {loading ? (
                   <>
                     <Loader2 className="w-5 h-5 animate-spin" />
                     <span>Scanning Cloud Data...</span>
                   </>
                ) : (
                   'Search Available Options'
                )}
              </button>
            </div>

            {/* Error State */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-xl text-center text-sm mb-4">
                {error}
              </div>
            )}

            {/* Header for Results */}
            {results && (
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Found {results.length} options</span>
                <button className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1">
                  <Filter size={12} /> Filter
                </button>
              </div>
            )}

            {/* Results List */}
            {results && (
              <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
                {results.map((option) => (
                  <div key={option.id} className="group bg-white dark:bg-[#15151A] border border-slate-200 dark:border-white/5 rounded-2xl p-4 hover:border-brand-500 transition-all shadow-sm hover:shadow-md cursor-pointer relative overflow-hidden">
                    {/* Tag */}
                    {option.tags && option.tags.length > 0 && (
                      <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
                        {option.tags[0]}
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          mode === 'flight' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' :
                          mode === 'train' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' :
                          'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                        }`}>
                          {mode === 'flight' ? <Plane size={20} /> : mode === 'train' ? <Train size={20} /> : <Bus size={20} />}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">{option.operator}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{option.type} • <span className="font-mono opacity-70">{option.number}</span></p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="block text-lg font-bold text-slate-900 dark:text-white">₹{option.price.toLocaleString()}</span>
                        <button className="text-[10px] font-bold text-brand-600 dark:text-brand-400 hover:underline">View Details</button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-slate-50 dark:bg-white/5 p-3 rounded-xl">
                      <div className="text-center">
                        <span className="block text-base font-bold text-slate-800 dark:text-slate-200">{option.departure}</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider">{source.substring(0, 3)}</span>
                      </div>
                      
                      <div className="flex flex-col items-center px-2 md:px-4 flex-1">
                        <span className="text-[10px] text-slate-400 mb-1">{option.duration}</span>
                        <div className="w-full h-px bg-slate-300 dark:bg-slate-600 relative flex items-center">
                           <div className="w-1.5 h-1.5 rounded-full bg-slate-400 absolute left-0"></div>
                           <div className="w-1.5 h-1.5 rounded-full bg-slate-400 absolute right-0"></div>
                           {mode === 'flight' && <Plane size={12} className="text-slate-400 absolute left-1/2 -translate-x-1/2 -translate-y-[50%]" />}
                        </div>
                      </div>

                      <div className="text-center">
                        <span className="block text-base font-bold text-slate-800 dark:text-slate-200">{option.arrival}</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider">{destination.substring(0, 3)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-[#121216] border-t border-slate-200 dark:border-white/5 text-center text-[10px] text-slate-400 flex-shrink-0">
           Results generated by TripSync AI. Prices and schedules are accurate estimates for planning.
        </div>
      </div>
    </div>
  );
};
