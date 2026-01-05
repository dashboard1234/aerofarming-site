
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: 'Step 1: Plan',
      desc: 'Define the flight area using standard KML maps. Our software automatically generates the optimal flight plan.',
      img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=400'
    },
    {
      title: 'Step 2: Fly',
      desc: 'The drone executes missions fully autonomously, navigating sub-canopy using computer vision and side-loaded HD cameras.',
      img: 'https://images.unsplash.com/photo-1508614589041-895b83967616?auto=format&fit=crop&w=400'
    },
    {
      title: 'Step 3: Analyze',
      desc: 'Data is uploaded to our SaaS platform where AI reconstructs the orchard and performs blossom/fruit counts.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Simple Three-Step Process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 border border-slate-100 shadow-sm group-hover:shadow-xl transition-all">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-emerald-400 font-bold block mb-1">PHASE {idx + 1}</span>
                  <h3 className="text-2xl font-black">{step.title.split(': ')[1]}</h3>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-center px-4">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-4 translate-x-1/2 z-10 text-slate-200">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
