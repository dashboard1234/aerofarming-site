
import React from 'react';

const Impact: React.FC = () => {
  const stats = [
    { label: 'Increased Yield Revenue', value: '$66,000' },
    { label: 'Fertilizer Efficiency', value: '$20,000' },
    { label: 'Water Efficiency', value: '$16,000' },
    { label: 'Fuel Savings', value: '$4,000' }
  ];

  return (
    <section id="impact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Driving Profitability & Sustainability</h2>
          <p className="text-2xl lg:text-3xl text-emerald-400 font-bold">
            Average annual profit increase of <span className="text-white text-5xl">$118</span> per acre
          </p>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10 text-center">Estimated Annual Value (1,000-acre example)</h4>
            <div className="space-y-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-white/10 last:border-0">
                  <span className="text-slate-300 font-medium">{stat.label}</span>
                  <span className="text-2xl font-black text-emerald-400">{stat.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-8 mt-4 border-t-2 border-emerald-500/30">
                <span className="text-xl font-black uppercase text-emerald-400">Total Economic Value</span>
                <span className="text-4xl font-black text-white">~$118,000</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 space-y-12">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
                 <span className="text-3xl">🌍</span>
              </div>
              <div className="ml-8">
                <h4 className="text-2xl font-bold mb-4">Global Food Security</h4>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Precision application reduces chemical and water usage while maximizing yield to meet growing global demand.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
                 <span className="text-3xl">📉</span>
              </div>
              <div className="ml-8">
                <h4 className="text-2xl font-bold mb-4">Reduced Input Costs</h4>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Data-driven precision can save farms 20-35% on input costs while reducing their carbon footprint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
