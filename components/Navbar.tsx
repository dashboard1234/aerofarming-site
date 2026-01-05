
import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface NavbarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', tab: NavigationTab.HOME },
    { name: 'Solution', tab: NavigationTab.SOLUTION },
    { name: 'How it Works', tab: NavigationTab.HOW_IT_WORKS },
    { name: 'Impact', tab: NavigationTab.IMPACT },
    { name: 'Team', tab: NavigationTab.TEAM },
    { name: 'AI Assistant', tab: NavigationTab.AI_ASSISTANT },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#home" onClick={() => setActiveTab(NavigationTab.HOME)} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800">AeroFarming</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.tab}
                href={`#${item.tab}`}
                onClick={() => {
                  setActiveTab(item.tab);
                  setIsOpen(false);
                }}
                className={`text-sm font-semibold transition-colors ${
                  activeTab === item.tab ? 'text-emerald-600' : 'text-slate-500 hover:text-emerald-500'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setActiveTab(NavigationTab.CONTACT)}
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-700 transition-all shadow-md"
            >
              Contact Us
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.tab}
              href={`#${item.tab}`}
              onClick={() => {
                setActiveTab(item.tab);
                setIsOpen(false);
              }}
              className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-emerald-50 rounded-lg"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
