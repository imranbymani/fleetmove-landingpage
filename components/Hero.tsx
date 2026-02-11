
import React from 'react';
import { ArrowRight, Star, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[5rem] hidden lg:block" />
      <div className="absolute top-40 right-40 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px]  bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2  bg-indigo-600"></span>
            </span>
            New: Airport express rides available now
          </div>

          <h1 className="text-4xl lg:text-8xl font-black text-gray-900 leading-[0.95] tracking-tight">
            Your journey <br />
            <span className="gradient-text">made easy.</span>
          </h1>

          <p className="text-[18px] text-gray-500 max-w-lg leading-relaxed font-medium">
            Reliable rides at your fingertips. Book instantly, track your driver, and travel safely with the world's most trusted mobility app.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="group flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-extrabold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
              Download Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-extrabold border-2 border-gray-100 hover:border-indigo-100 hover:bg-indigo-50 transition-all">
              <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                <Play className="w-3 h-3 fill-indigo-600 text-indigo-600 ml-0.5" />
              </div>
              How it works
            </button>
          </div>

          <div className="flex items-center gap-12 pt-6">
            <div>
              <p className="text-[36px] font-extrabold text-gray-900">10M+</p>
              <p className="text-[12px] font-bold text-gray-400 mt-1 uppercase tracking-widest">Users</p>
            </div>
            <div className="w-px h-12 bg-gray-100" />
            <div>
              <div className="flex items-center gap-2">
                <p className="text-[36px] font-extrabold text-gray-900">4.9</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
                  ))}
                </div>
              </div>
              <p className="text-[12px] font-bold text-gray-400 mt-1 uppercase tracking-widest">Reviews</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transform rotate-1 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200" 
              alt="FleetMove Ride"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-10 left-10 text-white space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Driver" />
                </div>
                <div>
                  <p className="text-xs font-bold opacity-80 uppercase">Coming to pick you up</p>
                  <p className="text-lg font-bold">David Johnson • Tesla Model S</p>
                </div>
              </div>
            </div>
          </div>
          {/* Floating Element */}
          <div className="absolute -bottom-6 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-gray-100 float">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-50 rounded-2xl flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-green-600 -rotate-45" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Estimated arrival</p>
                <p className="text-[16px] font-black text-gray-900">4 Minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
