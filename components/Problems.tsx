
import React from 'react';

const Problems: React.FC = () => {
  const issues = [
    {
      id: '1',
      title: 'Inefficient Manual Inspection',
      desc: 'Disease and pest detection is slow, subjective, and reactive. Threats often spread before human scouts spot them.',
      icon: '👁️'
    },
    {
      id: '2',
      title: 'The Precision Gap',
      desc: "Lacking granular data, owners resort to 'blanket treatments,' wasting money on chemicals and increasing environmental impact.",
      icon: '🚿'
    },
    {
      id: '3',
      title: 'Yield Estimation Blind Spots',
      desc: 'Inaccurate pre-harvest forecasts create massive logistical and financial risks, weakening negotiating power with buyers.',
      icon: '📊'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">The Modern Orchard is Facing a Perfect Storm</h2>
          <p className="text-xl text-slate-500 max-w-4xl mx-auto">
            Today's orchard owners are caught between labor shortages, record-high input costs, and the critical need for data. Intuition-based management is no longer sustainable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {issues.map(item => (
            <div key={item.id} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
              <div className="text-6xl mb-8 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.id}. {item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
