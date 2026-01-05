
import React from 'react';

const Team: React.FC = () => {
  const founders = [
    {
      name: 'Andy Zhang',
      role: 'Market Research & Business Model Creation',
      expertise: 'Deep analysis of market needs, customer validation, and crafting a scalable go-to-market strategy.',
      img: 'https://i.pravatar.cc/300?u=andy'
    },
    {
      name: 'Alex Gan',
      role: 'Software & Overall Technical Solution Design',
      expertise: 'Designing core autonomous flight software (A* + reinforcement learning) and the AI analytics platform.',
      img: 'https://i.pravatar.cc/300?u=alex'
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">The Founding Team</h2>
          <p className="text-xl text-slate-500">Bringing a fresh, digital-native perspective to a traditional industry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((person, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center p-8 bg-slate-50 rounded-[3rem] border border-slate-100 group hover:shadow-2xl transition-all">
              <div className="w-48 h-48 rounded-[2rem] overflow-hidden flex-shrink-0 mb-8 md:mb-0 border-4 border-white shadow-lg">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="md:ml-10 text-center md:text-left">
                <h3 className="text-2xl font-black text-slate-900 mb-1">{person.name}</h3>
                <p className="text-emerald-600 font-bold text-sm mb-4 uppercase tracking-widest">{person.role}</p>
                <div className="bg-white p-4 rounded-2xl border border-slate-200">
                  <p className="text-sm text-slate-500 italic">Expertise: <span className="text-slate-700 not-italic font-medium">{person.expertise}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
