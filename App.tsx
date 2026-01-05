
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Team from './components/Team';
import AIFarmingAssistant from './components/AIFarmingAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NavigationTab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>(NavigationTab.HOME);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (Object.values(NavigationTab).includes(hash as NavigationTab)) {
        setActiveTab(hash as NavigationTab);
      } else {
        setActiveTab(NavigationTab.HOME);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case NavigationTab.HOME:
        return (
          <>
            <Hero onGetStarted={() => setActiveTab(NavigationTab.AI_ASSISTANT)} />
            <Problems />
            <Solution />
            <HowItWorks />
            <Impact />
            <Team />
          </>
        );
      case NavigationTab.SOLUTION:
        return <div className="pt-20"><Solution /><Problems /></div>;
      case NavigationTab.HOW_IT_WORKS:
        return <div className="pt-20"><HowItWorks /></div>;
      case NavigationTab.IMPACT:
        return <div className="pt-20"><Impact /></div>;
      case NavigationTab.TEAM:
        return <div className="pt-20"><Team /></div>;
      case NavigationTab.AI_ASSISTANT:
        return <div className="pt-24 min-h-screen bg-slate-50"><AIFarmingAssistant /></div>;
      case NavigationTab.CONTACT:
        return <div className="pt-20"><Contact /></div>;
      default:
        return <Hero onGetStarted={() => setActiveTab(NavigationTab.AI_ASSISTANT)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
