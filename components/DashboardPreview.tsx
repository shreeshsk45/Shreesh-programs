
import React, { useState } from 'react';
import { 
  Bell, Plane, Hotel, Coffee, 
  MapPin, Calendar, CreditCard, Wifi, Signal, 
  Home, User, Plus, Train, QrCode, ShieldCheck, Copy
} from 'lucide-react';
import { BiometricLock } from './BiometricLock';

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'wallet'>('home');
  const [isWalletUnlocked, setIsWalletUnlocked] = useState(false);

  const handleTabChange = (tab: 'home' | 'wallet') => {
    if (tab === 'wallet' && activeTab !== 'wallet') {
        setIsWalletUnlocked(false); // Reset lock when entering wallet
    }
    setActiveTab(tab);
  };

  return (
    <section className="relative pt-12 pb-24 overflow-hidden bg-slate-50 dark:bg-[#0B0B0F] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-brand-600 dark:text-brand-500 font-semibold tracking-wide uppercase text-sm mb-2">The Interface</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                One dashboard. Infinite possibilities.
            </h3>
        </div>
        
        <div className="flex flex-col items-center relative">
          {/* DESKTOP MOCKUP WRAPPER - Hidden on small mobile, visible on tablet+ */}
          <div className="hidden md:block relative w-full max-w-5xl rounded-2xl bg-white dark:bg-[#15151A] border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden transform hover:scale-[1.01] transition-all duration-500">
            {/* Window Controls */}
            <div className="bg-slate-100 dark:bg-[#1A1A20] px-4 py-3 flex items-center gap-2 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="ml-4 bg-white dark:bg-[#0B0B0F] rounded-md px-3 py-1 text-xs text-slate-500 flex-1 text-center max-w-md mx-auto font-mono border border-slate-200 dark:border-white/5 transition-colors duration-300">
                app.tripsync.com/dashboard
              </div>
            </div>

            {/* App UI */}
            <div className="flex h-[500px] bg-slate-50 dark:bg-[#0B0B0F] transition-colors duration-300">
              {/* Sidebar */}
              <div className="hidden md:flex w-64 bg-white dark:bg-[#121216] border-r border-slate-200 dark:border-white/5 flex-col p-4 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-8">
                      <div className="bg-brand-600 w-8 h-8 rounded-lg flex items-center justify-center">
                          <Plane className="text-white w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-900 dark:text-slate-200">TripSync</span>
                  </div>
                  <div className="space-y-1">
                      <button 
                        onClick={() => handleTabChange('home')}
                        className={`w-full px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-3 transition-colors ${activeTab === 'home' ? 'bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5'}`}
                      >
                          <Calendar className="w-4 h-4" /> Itinerary
                      </button>
                      <div className="text-slate-600 dark:text-slate-400 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200 transition-colors cursor-not-allowed opacity-60">
                          <MapPin className="w-4 h-4" /> Map View
                      </div>
                      <button 
                        onClick={() => handleTabChange('wallet')}
                        className={`w-full px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-3 transition-colors ${activeTab === 'wallet' ? 'bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5'}`}
                      >
                          <CreditCard className="w-4 h-4" /> Wallet
                      </button>
                  </div>
                  
                  <div className="mt-auto bg-slate-50 dark:bg-[#1A1A20] rounded-xl p-4 text-slate-900 dark:text-white border border-slate-200 dark:border-white/5 transition-colors duration-300">
                      <div className="text-xs text-slate-500 mb-1">Total Budget</div>
                      <div className="text-xl font-bold">₹45,000</div>
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-2">
                          <div className="bg-brand-500 h-1.5 rounded-full w-[65%]"></div>
                      </div>
                  </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col overflow-hidden relative">
                {/* HEADER */}
                <div className="h-16 border-b border-slate-200 dark:border-white/5 flex items-center justify-between px-6 bg-white dark:bg-[#0B0B0F] transition-colors duration-300">
                    <h2 className="font-bold text-lg text-slate-900 dark:text-slate-200">
                        {activeTab === 'home' ? 'South India Explorer' : 'Digital Wallet'}
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                            <img src="https://i.pravatar.cc/150?u=1" className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0B0B0F]" alt="User" />
                            <img src="https://i.pravatar.cc/150?u=2" className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0B0B0F]" alt="User" />
                        </div>
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors"><Bell className="w-5 h-5 text-slate-400" /></button>
                    </div>
                </div>

                {/* CONTENT BODY */}
                <div className="flex-1 bg-slate-50 dark:bg-[#0B0B0F] p-6 overflow-y-auto transition-colors duration-300 relative">
                    
                    {/* WALLET VIEW (With Biometric Lock) */}
                    {activeTab === 'wallet' && (
                        <div className="h-full w-full">
                            {!isWalletUnlocked && (
                                <BiometricLock onUnlock={() => setIsWalletUnlocked(true)} type="auto" />
                            )}
                            
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${!isWalletUnlocked ? 'blur-xl opacity-50' : 'animate-in fade-in zoom-in duration-500'}`}>
                                {/* Aadhaar Card Mock */}
                                <div className="bg-gradient-to-br from-orange-50 to-green-50 dark:from-orange-900/20 dark:to-green-900/20 p-6 rounded-2xl border border-slate-200 dark:border-white/10 relative overflow-hidden group">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                            <img src="https://upload.wikimedia.org/wikipedia/en/c/cf/Aadhaar_Logo.svg" className="w-8 opacity-80" alt="Aadhaar" />
                                        </div>
                                        <ShieldCheck className="text-green-600 dark:text-green-400" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-xs text-slate-500 uppercase tracking-wider">Aadhaar Number</div>
                                        <div className="text-2xl font-mono font-bold text-slate-900 dark:text-white tracking-widest">4590 2231 8890</div>
                                    </div>
                                    <div className="mt-6 flex justify-between items-end">
                                        <div>
                                            <div className="text-xs text-slate-500">Name</div>
                                            <div className="font-bold text-slate-800 dark:text-slate-200">S.K. SHREESH</div>
                                        </div>
                                        <QrCode className="w-16 h-16 text-slate-800 dark:text-white opacity-80" />
                                    </div>
                                </div>

                                {/* Payment Card Mock */}
                                <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 rounded-2xl relative overflow-hidden shadow-xl">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="font-bold italic text-xl">VISA</div>
                                        <div className="bg-white/20 px-2 py-1 rounded text-[10px] font-bold backdrop-blur-md">CORPORATE</div>
                                    </div>
                                    <div className="space-y-1 mb-6">
                                        <div className="text-xs text-slate-400 uppercase tracking-wider">Card Number</div>
                                        <div className="text-xl font-mono tracking-widest flex gap-4">
                                            <span>4455</span><span>••••</span><span>••••</span><span>8892</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <div className="text-[10px] text-slate-400">Card Holder</div>
                                            <div className="font-bold text-sm">K.P. ABHIJIT</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-slate-400">Expires</div>
                                            <div className="font-bold text-sm">09/28</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ITINERARY VIEW */}
                    {activeTab === 'home' && (
                        <div className="flex gap-6 h-full">
                            {/* Day 1 Column */}
                            <div className="w-72 flex-shrink-0">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-slate-700 dark:text-slate-300">Oct 12 - Bangalore</h3>
                                    <span className="text-xs bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full border border-green-500/10 dark:border-green-500/20">Confirmed</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white dark:bg-[#15151A] p-4 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="bg-blue-50 dark:bg-blue-500/20 p-2 rounded-lg text-blue-600 dark:text-blue-400"><Plane className="w-4 h-4" /></div>
                                            <span className="text-xs text-slate-500 font-mono">09:30</span>
                                        </div>
                                        <div className="font-medium text-slate-900 dark:text-slate-200">Flight to BLR</div>
                                        <div className="text-xs text-slate-500 mt-1">From Delhi (DEL) • Indigo 6E</div>
                                    </div>
                                    <div className="bg-white dark:bg-[#15151A] p-4 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm ring-1 ring-brand-500/20">
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="bg-purple-50 dark:bg-purple-500/20 p-2 rounded-lg text-purple-600 dark:text-purple-400"><Hotel className="w-4 h-4" /></div>
                                            <span className="text-xs text-slate-500 font-mono">14:00</span>
                                        </div>
                                        <div className="font-medium text-slate-900 dark:text-slate-200">The Oberoi, Bangalore</div>
                                        <div className="text-xs text-slate-500 mt-1">M.G. Road • Booking #88291</div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="flex-1 bg-slate-100 dark:bg-[#121216] rounded-xl flex items-center justify-center relative overflow-hidden min-w-[200px] border border-slate-200 dark:border-white/5 transition-colors duration-300">
                                <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/74.8560,12.9141,13,0/400x400?access_token=PLACEHOLDER')] bg-cover filter grayscale"></div>
                                <MapPin className="w-12 h-12 text-slate-400 dark:text-slate-700 z-10" />
                                <div className="absolute bottom-4 left-4 bg-white dark:bg-[#1A1A20] px-3 py-2 rounded-lg shadow-lg text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 z-10">
                                    📍 Mangalore Beach
                                </div>
                            </div>
                        </div>
                    )}
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE MOCKUP WRAPPER */}
          <div className="relative mt-8 md:mt-0 md:absolute md:bottom-[-20px] md:right-[2%] lg:right-[5%] z-20">
             {/* Phone Frame - Galaxy S25 Style */}
             <div className="w-[280px] md:w-[300px] h-[580px] md:h-[600px] border-[8px] border-[#1c1c1c] dark:border-[#121212] rounded-[2.5rem] bg-[#0B0B0F] shadow-2xl overflow-hidden relative ring-1 ring-white/20 shadow-brand-500/10">
                
                {/* Punch Hole Camera */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-black rounded-full z-30 ring-1 ring-white/10"></div>
                
                {/* One UI 7 Style Status Bar */}
                <div className="flex justify-between items-center px-5 pt-3 pb-2 bg-slate-50 dark:bg-[#0B0B0F] text-slate-900 dark:text-white z-20 relative select-none">
                   <div className="flex items-center gap-2 ml-1">
                      <span className="text-[13px] font-semibold tracking-tight">09:41</span>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 hidden sm:block">• Sat, Oct 12</span>
                   </div>
                   <div className="flex items-center gap-2 mr-1">
                      <Signal size={14} strokeWidth={2.5} />
                      <Wifi size={14} strokeWidth={2.5} />
                      <div className="flex items-center gap-1.5 pl-1">
                        <span className="text-[11px] font-bold">85%</span>
                        <div className="w-6 h-2.5 border border-slate-900 dark:border-white rounded-[3px] relative flex items-center p-[1px]">
                            <div className="h-full w-[85%] bg-slate-900 dark:bg-white rounded-[1px]"></div>
                        </div>
                      </div>
                   </div>
                </div>

                {/* App Content (Mobile) */}
                <div className="bg-slate-50 dark:bg-[#0B0B0F] h-full w-full pt-2 flex flex-col">
                    {/* Mobile Header */}
                    <div className="px-5 mb-6 flex justify-between items-center">
                        <div>
                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Current Trip</div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                Goa & Mumbai <span className="text-lg">🇮🇳</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden border-2 border-white dark:border-slate-700">
                            <img src="https://i.pravatar.cc/150?u=1" alt="User" />
                        </div>
                    </div>

                    {/* Feed or Locked Wallet on Mobile */}
                    {activeTab === 'wallet' ? (
                        <div className="flex-1 px-5 flex items-center justify-center relative">
                            {!isWalletUnlocked && (
                                <BiometricLock onUnlock={() => setIsWalletUnlocked(true)} type="auto" />
                            )}
                            <div className={`w-full space-y-4 ${!isWalletUnlocked ? 'opacity-30 blur-md' : 'animate-in fade-in slide-in-from-bottom-4 duration-500'}`}>
                                <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-5 rounded-2xl text-white shadow-lg">
                                    <div className="flex justify-between items-start mb-8">
                                        <CreditCard size={24} />
                                        <Signal size={20} className="opacity-50" />
                                    </div>
                                    <div className="text-lg font-mono mb-4">•••• •••• •••• 8892</div>
                                    <div className="flex justify-between text-xs opacity-70">
                                        <span>K.P. ABHIJIT</span>
                                        <span>09/28</span>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-[#15151A] p-4 rounded-xl border border-slate-200 dark:border-white/10 flex items-center gap-4">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/c/cf/Aadhaar_Logo.svg" className="w-8" alt="Aadhaar" />
                                    <div>
                                        <div className="text-xs text-slate-500">Aadhaar Linked</div>
                                        <div className="font-bold text-slate-900 dark:text-white">4590 XXXX 8890</div>
                                    </div>
                                    <div className="ml-auto text-green-500"><ShieldCheck size={18} /></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 px-5 overflow-y-auto pb-20 space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                            <div className="text-sm font-bold text-slate-900 dark:text-white mb-2 sticky top-0 bg-slate-50 dark:bg-[#0B0B0F] py-2 z-10">Today, Oct 12</div>
                            
                            {/* Item 1 */}
                            <div className="flex gap-4">
                               <div className="flex flex-col items-center">
                                  <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 my-1"></div>
                                  <div className="w-0.5 flex-1 bg-slate-200 dark:bg-slate-800"></div>
                               </div>
                               <div className="flex-1 pb-4">
                                  <div className="text-xs text-slate-500 mb-1">10:30</div>
                                  <div className="bg-white dark:bg-[#15151A] p-3 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
                                      <div className="flex items-center gap-3 mb-2">
                                          <div className="p-2 bg-blue-50 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                                              <Plane size={16} />
                                          </div>
                                          <div>
                                              <div className="font-bold text-sm text-slate-900 dark:text-white">Flight to Goa</div>
                                              <div className="text-xs text-slate-500">BOM to GOI • 55m</div>
                                          </div>
                                      </div>
                                  </div>
                               </div>
                            </div>

                             {/* Item 2 */}
                            <div className="flex gap-4">
                               <div className="flex flex-col items-center">
                                  <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 my-1"></div>
                                  <div className="w-0.5 flex-1 bg-slate-200 dark:bg-slate-800"></div>
                               </div>
                               <div className="flex-1 pb-4">
                                  <div className="text-xs text-slate-500 mb-1">14:00</div>
                                  <div className="bg-white dark:bg-[#15151A] p-3 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm opacity-80">
                                      <div className="flex items-center gap-3">
                                          <div className="p-2 bg-purple-50 dark:bg-purple-500/20 rounded-lg text-purple-600 dark:text-purple-400">
                                              <Hotel size={16} />
                                          </div>
                                          <div>
                                              <div className="font-bold text-sm text-slate-900 dark:text-white">Taj Exotica, Goa</div>
                                              <div className="text-xs text-slate-500">Benaulim Beach • Check-in</div>
                                          </div>
                                      </div>
                                  </div>
                               </div>
                            </div>
                        </div>
                    )}

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 w-full bg-white/90 dark:bg-[#15151A]/90 backdrop-blur-md border-t border-slate-200 dark:border-white/5 py-4 px-6 flex justify-between items-center z-20">
                        <button 
                          onClick={() => handleTabChange('home')}
                          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'home' ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'}`}
                        >
                            <Home size={20} />
                            <span className="text-[10px] font-medium">Home</span>
                        </button>
                        <div className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <MapPin size={20} />
                            <span className="text-[10px] font-medium">Map</span>
                        </div>
                        <div className="flex items-center justify-center -mt-8 bg-brand-600 rounded-full w-12 h-12 shadow-lg shadow-brand-600/40 text-white hover:scale-105 transition-transform">
                            <Plus size={24} />
                        </div>
                         <button 
                           onClick={() => handleTabChange('wallet')}
                           className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'wallet' ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'}`}
                        >
                            <CreditCard size={20} />
                            <span className="text-[10px] font-medium">Wallet</span>
                        </button>
                         <div className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <User size={20} />
                            <span className="text-[10px] font-medium">Profile</span>
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-500/5 dark:bg-brand-500/10 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};
