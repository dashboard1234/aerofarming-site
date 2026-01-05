
import React from 'react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="relative min-h-screen flex items-center bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="pt-20 lg:pt-0">
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-tight mb-8">
              AeroFarming
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-slate-700">
              <span className="text-emerald-600">Sub-Canopy</span> Intelligence<br/>
              for the Modern <span className="text-emerald-700 font-extrabold">Orchard</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed">
              Fully autonomous drone systems designed to navigate between plant rows—capturing the granular truth where diseases and fruit actually grow.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onGetStarted}
                className="px-10 py-5 bg-emerald-600 text-white font-bold text-lg rounded-full hover:bg-emerald-700 transition-all shadow-xl hover:shadow-emerald-200/50"
              >
                Access AI Reports
              </button>
              <a 
                href="#solution"
                className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 font-bold text-lg rounded-full hover:bg-slate-50 transition-all text-center"
              >
                Learn More
              </a>
            </div>
            <div className="mt-12 text-sm font-bold text-slate-400 uppercase tracking-widest">
              Innovation Round Investment Proposal
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1473415781350-58d34b4695e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Orchard rows" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 flex items-center justify-center p-6 text-center">
                <p className="text-white font-bold text-xl leading-tight">Autonomous Flight Navigation in GPS-Denied Environments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
