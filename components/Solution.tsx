
import React from 'react';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
              From Reactive Guesswork to Proactive Intelligence
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We are introducing a category-defining solution: a fully autonomous, AI-driven drone system designed specifically for the complex sub-canopy environment of orchards.
            </p>
            <div className="space-y-6 mb-12">
              <div className="flex items-start p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <span className="font-black">A</span>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Early Disease & Pest Detection</h4>
                  <p className="text-slate-500">Precise location mapping for targeted intervention before threats spread.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <span className="font-black">B</span>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Accurate Yield & Blossom Counts</h4>
                  <p className="text-slate-500">High-resolution forecasting for logistics and financial optimization.</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-500">
              <p className="text-emerald-800 font-semibold italic">
                "There is currently no direct competition offering this level of autonomous, sub-canopy granularity."
              </p>
            </div>
          </div>
          <div className="mt-16 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-lg h-64 grayscale opacity-60">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400" className="w-full h-full object-cover" alt="Before" />
                  <div className="absolute top-4 left-4 bg-slate-900/80 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">The Old Way</div>
                </div>
                <p className="text-center text-sm font-bold text-slate-400">Limited Top-Down Views</p>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-80 ring-4 ring-emerald-500 ring-offset-4">
                  <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400" className="w-full h-full object-cover" alt="After" />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">AeroFarming Way</div>
                </div>
                <p className="text-center text-sm font-bold text-emerald-600">Granular Sub-Canopy Truth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
