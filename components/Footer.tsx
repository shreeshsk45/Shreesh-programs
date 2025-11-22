import React from 'react';
import { Map, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black text-slate-900 dark:text-white py-12 border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Map className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">TripSync</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              The all-in-one platform for the modern traveler. Plan, book, and explore the world with confidence.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-slate-200">Product</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-slate-200">Company</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-slate-200">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">© 2024 TripSync Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};