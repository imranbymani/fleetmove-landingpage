
import React from 'react';
import { Car, Zap, Users, ShieldCheck } from 'lucide-react';

const serviceTiers = [
  {
    name: "Standard",
    price: "From $5.00",
    icon: <Car className="w-6 h-6" />,
    color: "indigo",
    features: ["Quick pickup", "Modern sedan", "Professional driver"]
  },
  {
    name: "Express",
    price: "From $8.50",
    icon: <Zap className="w-6 h-6" />,
    color: "purple",
    features: ["Priority matching", "Premium hybrid", "Fastest routes"]
  },
  {
    name: "Family",
    price: "From $12.00",
    icon: <Users className="w-6 h-6" />,
    color: "blue",
    features: ["Up to 6 seats", "Extra luggage", "Child-seat friendly"]
  },
  {
    name: "Elite",
    price: "From $25.00",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "slate",
    features: ["Top-tier luxury", "Elite chauffeurs", "VIP experience"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <p className="text-indigo-600 font-extrabold text-sm uppercase tracking-[0.2em]">Our Fleet</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Choose your style</h2>
            <p className="text-gray-500 max-w-md text-lg font-medium">From daily commutes to luxury events, find the perfect vehicle for any occasion.</p>
          </div>
          <button className="text-indigo-600 font-bold flex items-center gap-2 group">
            Compare all options
            <div className="w-8 h-8 rounded-full border border-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <Car className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceTiers.map((tier, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
              <div className={`w-14 h-14 bg-${tier.color}-50 text-${tier.color}-600 rounded-2xl flex items-center justify-center mb-8`}>
                {tier.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-1">{tier.name}</h3>
              <p className="text-indigo-600 font-bold text-sm mb-6">{tier.price}</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feat, fidx) => (
                  <li key={fidx} className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-200" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl border-2 border-slate-50 font-bold text-gray-700 hover:bg-slate-50 transition-colors">
                Select {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
