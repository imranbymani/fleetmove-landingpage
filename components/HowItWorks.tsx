
import React from 'react';
import { MapPin, Search, CalendarCheck } from 'lucide-react';

const steps = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Set Destination",
    desc: "Simply enter your destination and we'll calculate the best route for your journey.",
    color: "bg-blue-50 text-blue-600",
    number: "01"
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Choose Vehicle",
    desc: "Pick from a range of vehicles that suit your budget and style. See the price upfront.",
    color: "bg-purple-50 text-purple-600",
    number: "02"
  },
  {
    icon: <CalendarCheck className="w-5 h-5" />,
    title: "Enjoy the Ride",
    desc: "Track your driver in real-time and pay seamlessly through the app. Rate your experience.",
    color: "bg-indigo-50 text-indigo-600",
    number: "03"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <p className="text-indigo-600 font-extrabold text-sm uppercase tracking-[0.2em]">The Process</p>
          <h2 className="text-4xl md:text-[2.7rem] font-black text-gray-900">Simple steps to ride</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-[18px] font-medium">We've streamlined urban mobility so you can focus on where you're going, not how to get there.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <span className="absolute -top-10 -left-4 text-9xl font-black text-slate-50 group-hover:text-indigo-50/50 transition-colors duration-500 -z-10">{step.number}</span>
              <div className="space-y-6">
                <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                  {step.icon}
                </div>
                <h3 className="text-[24px] font-extrabold text-gray-900">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[14px] font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
