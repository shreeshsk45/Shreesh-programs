
import React, { useState, useEffect } from 'react';
import { ScanFace, Fingerprint, Lock, CheckCircle2, ShieldAlert } from 'lucide-react';

interface BiometricLockProps {
  onUnlock: () => void;
  type?: 'face' | 'fingerprint' | 'auto';
}

export const BiometricLock: React.FC<BiometricLockProps> = ({ onUnlock, type = 'auto' }) => {
  const [status, setStatus] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');

  const startScan = () => {
    setStatus('scanning');
    // Simulate biometric delay
    setTimeout(() => {
      setStatus('success');
      // Wait for success animation then unlock
      setTimeout(() => {
        onUnlock();
      }, 800);
    }, 2000);
  };

  // Auto start scan on mount if type is auto
  useEffect(() => {
    if (status === 'idle') {
        startScan();
    }
  }, []);

  return (
    <div className="absolute inset-0 z-50 bg-slate-50/90 dark:bg-[#0B0B0F]/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500">
      <div className="relative">
        {/* Scanning Effect Circles */}
        {status === 'scanning' && (
          <>
            <div className="absolute inset-0 bg-brand-500/20 rounded-full animate-ping"></div>
            <div className="absolute inset-0 bg-brand-500/10 rounded-full animate-pulse delay-75"></div>
          </>
        )}

        <div className={`relative w-24 h-24 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
            status === 'success' ? 'bg-green-500/10 border-green-500 text-green-500' : 
            status === 'scanning' ? 'bg-brand-500/10 border-brand-500 text-brand-500' : 
            'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500'
        }`}>
            {status === 'success' ? (
                <CheckCircle2 size={48} className="animate-in zoom-in duration-300" />
            ) : (
                <div className="relative">
                    <ScanFace size={48} className={`transition-opacity duration-300 ${status === 'scanning' ? 'opacity-100' : 'opacity-50'}`} />
                    {/* Scanning Bar Line */}
                    {status === 'scanning' && (
                        <div className="absolute top-0 left-0 w-full h-1 bg-brand-400 shadow-[0_0_10px_#6366f1] animate-scan"></div>
                    )}
                </div>
            )}
        </div>
      </div>

      <div className="mt-8 text-center space-y-2">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {status === 'scanning' ? 'Verifying Identity...' : 
             status === 'success' ? 'Access Granted' : 'Security Lock'}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
            {status === 'scanning' ? 'Please look at the camera or place finger on sensor' : 
             status === 'success' ? 'Decryping Wallet Data...' : 'Biometric Authentication Required'}
        </p>
      </div>

      <div className="mt-8 flex items-center gap-2 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        <Lock size={12} />
        Secured by FIDO2 WebAuthn
      </div>

      <style>{`
        @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
            animation: scan 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
};
