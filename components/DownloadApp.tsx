
import React from 'react';
// Added missing Car and Zap icon imports
import { Apple, Play, Smartphone, Car, Zap } from 'lucide-react';

const DownloadApp: React.FC = () => {
  return (
    <section id="download" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="bg-indigo-600 rounded-[4rem] relative overflow-hidden flex flex-col lg:flex-row items-center">
          {/* Decorative Rings */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -mr-48 -mt-48 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full -mr-20 -mb-20 pointer-events-none" />

          <div className="lg:w-3/5 p-12 sm:p-20 space-y-10 relative z-10 text-center lg:text-left">
            <div className="inline-flex p-3 bg-white/10 rounded-2xl text-white mb-4">
              <Smartphone className="w-8 h-8" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Ready to ride?<br />
              Download the app.
            </h2>
            <p className="text-indigo-100 text-[18px] font-medium max-w-lg mx-auto lg:mx-0">
              Join millions of users worldwide who trust FleetMove for their daily transport. Fast, safe, and always reliable.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <button className="flex items-center gap-4 bg-white text-gray-900 px-6 py-4 rounded-2xl font-black hover:bg-indigo-50 transition-all shadow-xl">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold opacity-60 leading-none">Download on</p>
                  <p className="text-lg leading-tight">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-4 bg-gray-900 text-white px-6 py-4 rounded-2xl font-black hover:bg-black transition-all shadow-xl">
                <Play className="w-6 h-6 fill-white" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold opacity-60 leading-none">Get it on</p>
                  <p className="text-lg leading-tight">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          <div className="lg:w-2/5 relative flex justify-center pb-20 lg:pb-0">
            <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3.5rem] border-[12px] border-slate-800 shadow-2xl overflow-hidden ring-4 ring-white/10 rotate-3 -mr-12 lg:-mr-0">
               {/* App UI Content */}
               <div className="pt-12 p-6 flex flex-col h-full bg-white text-gray-900">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                       <div className="w-7 h-7 bg-indigo-600 rounded flex items-center justify-center text-[10px] text-white font-black">F</div>
                       <span className="font-extrabold text-sm tracking-tight">FleetMove</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                       <Smartphone className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="h-1 bg-gray-100 w-1/4 rounded" />
                    <h4 className="text-lg font-black leading-tight">Where are we<br />going today?</h4>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <div className="h-3 w-1/2 bg-gray-200 rounded" />
                    </div>
                    <div className="ml-1 w-px h-4 bg-gray-200" />
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600" />
                      <div className="h-3 w-3/4 bg-gray-200 rounded" />
                    </div>
                  </div>

                  <div className="flex gap-2 overflow-x-hidden">
                    <div className="p-3 rounded-2xl bg-indigo-600 text-white min-w-[120px]">
                      <div className="flex justify-between items-start mb-2">
                        <Car className="w-4 h-4" />
                        <span className="text-[10px] font-bold">$12</span>
                      </div>
                      <p className="text-[10px] font-bold">Standard</p>
                    </div>
                    <div className="p-3 rounded-2xl border border-gray-100 min-w-[120px]">
                      <div className="flex justify-between items-start mb-2">
                        <Zap className="w-4 h-4 text-purple-600" />
                        <span className="text-[10px] font-bold text-gray-400">$18</span>
                      </div>
                      <p className="text-[10px] font-bold text-gray-400">Express</p>
                    </div>
                  </div>

                  <button className="mt-auto w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-[11px] shadow-lg shadow-indigo-100">
                    BOOK RIDE NOW
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
