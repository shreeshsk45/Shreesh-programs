
import React from 'react';
import { ShieldCheck, Fingerprint, Lock, CreditCard, EyeOff, Server, Key, FileCheck, AlertCircle } from 'lucide-react';

export const Security: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0B0B0F] relative overflow-hidden transition-colors duration-300">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-widest mb-6 border border-green-200 dark:border-green-700/30">
            <ShieldCheck size={14} />
            Uncompromised Security
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Your privacy is not a setting.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500 dark:from-brand-400 dark:to-accent-400">
              It's our foundation.
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We believe travel data is personal. That's why we've built a fortress around your digital footprint. 
            No hidden trackers, no data mining, and absolutely zero compromises on safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CARD 1: BIOMETRICS (Large visual emphasis) */}
          <div className="md:col-span-2 group relative bg-white dark:bg-[#15151A] rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-white/5 shadow-xl overflow-hidden hover:border-brand-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-500/10 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
              <div className="bg-brand-50 dark:bg-brand-500/10 p-4 rounded-2xl text-brand-600 dark:text-brand-400 ring-1 ring-brand-500/20">
                <Fingerprint size={48} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Biometric Gatekeeping (FIDO2)</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  TripSync integrates directly with your device's hardware security module. 
                  Accessing your digital wallet requires a confirmed <span className="text-slate-900 dark:text-white font-semibold">FaceID, TouchID, or Windows Hello</span> scan.
                </p>
                <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-500">
                   <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full"></div>iOS FaceID</span>
                   <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full"></div>Android Biometrics</span>
                   <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full"></div>Windows Hello</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: ENCRYPTION (Vertical) */}
          <div className="group relative bg-slate-900 dark:bg-black rounded-3xl p-8 border border-slate-800 dark:border-white/10 shadow-xl overflow-hidden text-white">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md mb-6">
                   <Lock className="text-white" size={24} />
                </div>
                <div>
                   <h3 className="text-xl font-bold mb-2">AES-256 Encryption</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">
                      Your National IDs and Passport data are encrypted at rest using military-grade standards. Even our engineers see only scrambled noise.
                   </p>
                </div>
             </div>
          </div>

          {/* CARD 3: TOKENIZATION */}
          <div className="group relative bg-white dark:bg-[#15151A] rounded-3xl p-8 border border-slate-200 dark:border-white/5 shadow-xl overflow-hidden hover:border-purple-500/30 transition-all duration-500">
             <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-brand-500"></div>
             <div className="bg-purple-50 dark:bg-purple-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                <CreditCard size={24} />
             </div>
             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Zero-Knowledge Payments</h3>
             <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We use PCI-DSS compliant tokenization. We never store your raw card numbers; only encrypted tokens exist on our servers.
             </p>
          </div>

          {/* CARD 4: LOCAL STORAGE */}
          <div className="md:col-span-2 group relative bg-white dark:bg-[#15151A] rounded-3xl p-8 border border-slate-200 dark:border-white/5 shadow-xl overflow-hidden hover:border-accent-500/30 transition-all duration-500 flex flex-col md:flex-row items-center gap-8">
             <div className="flex-1 order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                   <div className="bg-accent-50 dark:bg-accent-500/10 p-2 rounded-lg text-accent-600 dark:text-accent-400">
                      <Server size={20} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white">Local-First Architecture</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                   Sensitive documents are stored locally on your device's secure enclave. 
                   They are only synced to the cloud when you explicitly choose to back them up.
                </p>
             </div>
             <div className="order-1 md:order-2 flex-shrink-0 bg-slate-50 dark:bg-black/40 p-4 rounded-2xl border border-slate-200 dark:border-white/5 w-full md:w-auto min-w-[250px]">
                <div className="flex items-center gap-3 border-b border-slate-200 dark:border-white/10 pb-3 mb-3">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-xs font-mono text-slate-500 dark:text-slate-400">ENCRYPTION_STATUS: ACTIVE</span>
                </div>
                <div className="space-y-2 font-mono text-xs">
                   <div className="flex justify-between text-slate-900 dark:text-white"><span>Aadhaar_Vault</span> <span>LOCKED</span></div>
                   <div className="flex justify-between text-slate-500"><span>Passport_Data</span> <span>*******</span></div>
                   <div className="flex justify-between text-slate-500"><span>Credit_Card</span> <span>TOKEN_77A</span></div>
                </div>
             </div>
          </div>
          
          {/* NEW CARD 5: PRIVACY MANIFESTO (Full Width) */}
          <div className="md:col-span-3 bg-gradient-to-br from-slate-100 to-white dark:from-[#1A1A20] dark:to-[#15151A] rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-white/5 shadow-xl mt-4">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
               <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-full text-red-600 dark:text-red-400">
                 <EyeOff size={32} />
               </div>
               <div className="flex-1">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Our Ironclad Privacy Covenant</h3>
                 <p className="text-slate-600 dark:text-slate-400 mb-4">
                    We operate on a simple principle: <span className="font-bold text-slate-900 dark:text-white">You are the customer, not the product.</span>
                 </p>
                 <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <li className="flex items-center justify-center md:justify-start gap-2">
                        <FileCheck size={16} className="text-green-500" /> No Data Selling
                    </li>
                    <li className="flex items-center justify-center md:justify-start gap-2">
                        <FileCheck size={16} className="text-green-500" /> No Hidden Trackers
                    </li>
                    <li className="flex items-center justify-center md:justify-start gap-2">
                        <FileCheck size={16} className="text-green-500" /> GDPR & CCPA Compliant
                    </li>
                 </ul>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
