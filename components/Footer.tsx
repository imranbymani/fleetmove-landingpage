
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-extrabold text-xl">F</span>
              </div>
              <span className="text-[22px] font-extrabold tracking-tight">FleetMove</span>
            </div>
            <p className="text-slate-400 font-medium text-[16px] leading-relaxed">
              Redefining urban mobility since 2018. Available in 150+ cities across the globe.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-slate-500 text-xs">Platform</h4>
            <ul className="space-y-4 font-bold text-slate-300">
              <li><a href="#" className="hover:text-indigo-400 transition-colors text-[16px]">Find a Ride</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors text-[16px]">Become a Driver</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors text-[16px]">Fleet Solutions</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors text-[16px]">Business Travel</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-slate-500 text-xs">Company</h4>
            <ul className="space-y-4 font-bold text-slate-300">
              <li><a href="#" className="hover:text-indigo-400 transition-colors text-[16px]">Our Story</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors text-[16px]">Sustainability</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors text-[16px]">Safety Hub</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors text-[16px]">Press & News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-slate-500 text-xs">Language</h4>
            <div className="flex items-center gap-3 bg-slate-800 p-3 rounded-2xl cursor-pointer hover:bg-slate-700 transition-colors">
              <Globe className="w-5 h-5 text-indigo-400" />
              <span className="font-bold text-[14px]">English (US)</span>
            </div>
            <p className="mt-8 text-slate-500 text-xs font-bold leading-relaxed">
              Available in App Store and Google Play. Support available 24/7.
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 font-bold text-[12px]">© 2025 FleetMove Technologies Inc.</p>
          <div className="flex gap-8 text-xs font-black text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors text-[12px]">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors text-[12px]">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors text-[12px]">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
