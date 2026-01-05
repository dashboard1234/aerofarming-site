
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="text-2xl font-black">AeroFarming</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Digitizing the physical orchard, filling a critical data void in the AgTech market with sub-canopy intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-emerald-400 uppercase tracking-widest text-xs">Solution</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#solution" className="hover:text-emerald-400">Autonomous Drones</a></li>
              <li><a href="#solution" className="hover:text-emerald-400">Sub-Canopy AI</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-400">SaaS Platform</a></li>
              <li><a href="#impact" className="hover:text-emerald-400">Yield Forecasting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-emerald-400 uppercase tracking-widest text-xs">Market</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-emerald-400">Tree Nuts (2.8M+ acres)</a></li>
              <li><a href="#" className="hover:text-emerald-400">Citrus Fruit</a></li>
              <li><a href="#" className="hover:text-emerald-400">Berries & Grapes</a></li>
              <li><a href="#" className="hover:text-emerald-400">Global TAM</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-emerald-400 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#team" className="hover:text-emerald-400">Founding Team</a></li>
              <li><a href="#" className="hover:text-emerald-400">12-Month Roadmap</a></li>
              <li><a href="#" className="hover:text-emerald-400">Investor Portal</a></li>
              <li><a href="#contact" className="hover:text-emerald-400">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2024 AeroFarming AI. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
             <span className="font-bold text-slate-400 uppercase">Innovation Round Seed Round Proposal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
