import React from 'react';
import { 
  Search, Bell, Menu, Plane, Hotel, Coffee, MoreHorizontal, 
  MapPin, Calendar, CreditCard, Wifi, Battery, Signal, 
  Home, User, Plus 
} from 'lucide-react';

export const DashboardPreview: React.FC = () => {
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
                app.tripsync.com/trips/japan-2024
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
                      <div className="bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-3 transition-colors">
                          <Calendar className="w-4 h-4" /> Itinerary
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                          <MapPin className="w-4 h-4" /> Map View
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                          <CreditCard className="w-4 h-4" /> Wallet
                      </div>
                  </div>
                  
                  <div className="mt-auto bg-slate-50 dark:bg-[#1A1A20] rounded-xl p-4 text-slate-900 dark:text-white border border-slate-200 dark:border-white/5 transition-colors duration-300">
                      <div className="text-xs text-slate-500 mb-1">Total Budget</div>
                      <div className="text-xl font-bold">$2,450.00</div>
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-2">
                          <div className="bg-brand-500 h-1.5 rounded-full w-[65%]"></div>
                      </div>
                  </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-[#0B0B0F] transition-colors duration-300">
                  {/* Header */}
                  <div className="h-16 border-b border-slate-200 dark:border-white/5 flex items-center justify-between px-6 bg-white dark:bg-[#0B0B0F] transition-colors duration-300">
                      <h2 className="font-bold text-lg text-slate-900 dark:text-slate-200">Tokyo Expedition</h2>
                      <div className="flex items-center gap-4">
                          <div className="flex -space-x-2">
                              <img src="https://i.pravatar.cc/150?u=1" className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0B0B0F]" alt="User" />
                              <img src="https://i.pravatar.cc/150?u=2" className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0B0B0F]" alt="User" />
                              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0B0B0F] bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500 dark:text-slate-400">+2</div>
                          </div>
                          <button className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors"><Bell className="w-5 h-5 text-slate-400" /></button>
                      </div>
                  </div>

                  {/* Kanban / Timeline Board */}
                  <div className="flex-1 bg-slate-50 dark:bg-[#0B0B0F] p-6 overflow-y-auto transition-colors duration-300">
                      <div className="flex gap-6">
                          {/* Day 1 Column */}
                          <div className="w-72 flex-shrink-0">
                              <div className="flex items-center justify-between mb-4">
                                  <h3 className="font-semibold text-slate-700 dark:text-slate-300">Oct 12 - Arrival</h3>
                                  <span className="text-xs bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full border border-green-500/10 dark:border-green-500/20">Confirmed</span>
                              </div>
                              <div className="space-y-3">
                                  <div className="bg-white dark:bg-[#15151A] p-4 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm group hover:border-brand-500/30 transition-all">
                                      <div className="flex items-start justify-between mb-2">
                                          <div className="bg-blue-50 dark:bg-blue-500/20 p-2 rounded-lg text-blue-600 dark:text-blue-400"><Plane className="w-4 h-4" /></div>
                                          <span className="text-xs text-slate-500 font-mono">14:30</span>
                                      </div>
                                      <div className="font-medium text-slate-900 dark:text-slate-200">Flight to NRT</div>
                                      <div className="text-xs text-slate-500 mt-1">JL 005 • Terminal 2</div>
                                  </div>
                                  <div className="bg-white dark:bg-[#15151A] p-4 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm ring-1 ring-brand-500/20">
                                      <div className="flex items-start justify-between mb-2">
                                          <div className="bg-purple-50 dark:bg-purple-500/20 p-2 rounded-lg text-purple-600 dark:text-purple-400"><Hotel className="w-4 h-4" /></div>
                                          <span className="text-xs text-slate-500 font-mono">17:00</span>
                                      </div>
                                      <div className="font-medium text-slate-900 dark:text-slate-200">Check-in: Granbell</div>
                                      <div className="text-xs text-slate-500 mt-1">Booking #88291</div>
                                  </div>
                              </div>
                          </div>

                          {/* Day 2 Column */}
                          <div className="w-72 flex-shrink-0">
                              <div className="flex items-center justify-between mb-4">
                                  <h3 className="font-semibold text-slate-700 dark:text-slate-300">Oct 13 - Exploration</h3>
                                  <span className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full border border-slate-300 dark:border-white/5">Planning</span>
                              </div>
                              <div className="space-y-3">
                                  <div className="bg-white dark:bg-[#15151A] p-4 rounded-xl border border-l-4 border-l-orange-500/80 border-y-slate-200 border-r-slate-200 dark:border-y-white/5 dark:border-r-white/5 shadow-sm transition-all">
                                      <div className="flex items-start justify-between mb-2">
                                          <div className="bg-orange-50 dark:bg-orange-500/20 p-2 rounded-lg text-orange-600 dark:text-orange-400"><Coffee className="w-4 h-4" /></div>
                                          <span className="text-xs text-slate-500 font-mono">09:00</span>
                                      </div>
                                      <div className="font-medium text-slate-900 dark:text-slate-200">Breakfast at Tsukiji</div>
                                      <div className="text-xs text-slate-500 mt-1">Team Vote: 3/4 Yes</div>
                                  </div>
                                  <div className="border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-xl p-4 flex items-center justify-center text-slate-500 text-sm hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors hover:bg-slate-100 dark:hover:bg-white/5">
                                      + Add Activity
                                  </div>
                              </div>
                          </div>
                          
                          {/* Map Placeholder */}
                          <div className="flex-1 bg-slate-100 dark:bg-[#121216] rounded-xl flex items-center justify-center relative overflow-hidden min-w-[200px] border border-slate-200 dark:border-white/5 transition-colors duration-300">
                              <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/139.7005,35.6585,13,0/400x400?access_token=PLACEHOLDER')] bg-cover filter grayscale"></div>
                              <MapPin className="w-12 h-12 text-slate-400 dark:text-slate-700 z-10" />
                              <div className="absolute bottom-4 left-4 bg-white dark:bg-[#1A1A20] px-3 py-2 rounded-lg shadow-lg text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 z-10">
                                  📍 Shibuya Crossing
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>

          {/* MOBILE MOCKUP WRAPPER */}
          <div className="relative mt-8 md:mt-0 md:absolute md:bottom-[-20px] md:right-[2%] lg:right-[5%] z-20">
             {/* Phone Frame */}
             <div className="w-[280px] md:w-[300px] h-[580px] md:h-[600px] border-[12px] border-[#1A1A1D] rounded-[3rem] bg-[#0B0B0F] shadow-2xl overflow-hidden relative ring-1 ring-white/10">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-[#1A1A1D] rounded-b-2xl z-30"></div>
                
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 pt-3 text-white text-[10px] font-medium z-20 relative">
                   <span>9:41</span>
                   <div className="flex gap-1.5">
                      <Signal size={12} className="text-white" />
                      <Wifi size={12} className="text-white" />
                      <Battery size={12} className="text-white" />
                   </div>
                </div>

                {/* App Content */}
                <div className="bg-slate-50 dark:bg-[#0B0B0F] h-full w-full pt-8 flex flex-col">
                    {/* Mobile Header */}
                    <div className="px-5 mb-6 flex justify-between items-center">
                        <div>
                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Current Trip</div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                Tokyo <span className="text-lg">🇯🇵</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden border-2 border-white dark:border-slate-700">
                            <img src="https://i.pravatar.cc/150?u=1" alt="User" />
                        </div>
                    </div>

                    {/* Budget Card */}
                    <div className="mx-5 p-4 bg-brand-600 rounded-2xl text-white shadow-lg shadow-brand-600/30 mb-6 relative overflow-hidden group hover:scale-[1.02] transition-transform">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
                        <div className="relative z-10">
                            <div className="text-brand-100 text-xs mb-1">Total Spent</div>
                            <div className="text-2xl font-bold mb-3">$1,240.50</div>
                            <div className="w-full bg-black/20 h-1.5 rounded-full">
                                <div className="bg-white h-1.5 rounded-full w-[65%]"></div>
                            </div>
                            <div className="flex justify-between text-[10px] mt-2 text-brand-100">
                                <span>$2,000 Budget</span>
                                <span>62%</span>
                            </div>
                        </div>
                    </div>

                    {/* Timeline / Feed */}
                    <div className="flex-1 px-5 overflow-y-auto pb-20 space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                        <div className="text-sm font-bold text-slate-900 dark:text-white mb-2 sticky top-0 bg-slate-50 dark:bg-[#0B0B0F] py-2 z-10">Today, Oct 12</div>
                        
                        {/* Item 1 */}
                        <div className="flex gap-4">
                           <div className="flex flex-col items-center">
                              <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 my-1"></div>
                              <div className="w-0.5 flex-1 bg-slate-200 dark:bg-slate-800"></div>
                           </div>
                           <div className="flex-1 pb-4">
                              <div className="text-xs text-slate-500 mb-1">14:30</div>
                              <div className="bg-white dark:bg-[#15151A] p-3 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
                                  <div className="flex items-center gap-3 mb-2">
                                      <div className="p-2 bg-blue-50 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                                          <Plane size={16} />
                                      </div>
                                      <div>
                                          <div className="font-bold text-sm text-slate-900 dark:text-white">Flight to NRT</div>
                                          <div className="text-xs text-slate-500">Gate 24A • On Time</div>
                                      </div>
                                  </div>
                                  <div className="flex gap-2 mt-2">
                                      <button className="flex-1 py-1.5 bg-slate-100 dark:bg-white/5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300">Pass</button>
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
                              <div className="text-xs text-slate-500 mb-1">17:00</div>
                              <div className="bg-white dark:bg-[#15151A] p-3 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm opacity-80">
                                  <div className="flex items-center gap-3">
                                      <div className="p-2 bg-purple-50 dark:bg-purple-500/20 rounded-lg text-purple-600 dark:text-purple-400">
                                          <Hotel size={16} />
                                      </div>
                                      <div>
                                          <div className="font-bold text-sm text-slate-900 dark:text-white">Granbell Hotel</div>
                                          <div className="text-xs text-slate-500">Check-in</div>
                                      </div>
                                  </div>
                              </div>
                           </div>
                        </div>

                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 w-full bg-white/90 dark:bg-[#15151A]/90 backdrop-blur-md border-t border-slate-200 dark:border-white/5 py-4 px-6 flex justify-between items-center z-20">
                        <div className="flex flex-col items-center gap-1 text-brand-600 dark:text-brand-400">
                            <Home size={20} />
                            <span className="text-[10px] font-medium">Home</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <MapPin size={20} />
                            <span className="text-[10px] font-medium">Map</span>
                        </div>
                        <div className="flex items-center justify-center -mt-8 bg-brand-600 rounded-full w-12 h-12 shadow-lg shadow-brand-600/40 text-white hover:scale-105 transition-transform">
                            <Plus size={24} />
                        </div>
                         <div className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <CreditCard size={20} />
                            <span className="text-[10px] font-medium">Wallet</span>
                        </div>
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