
import React, { useState, useRef, useEffect } from 'react';
import { getFarmingInsight, generateReportSample } from '../services/geminiService';

const AIFarmingAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: any }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleAction = async (action: string) => {
    setLoading(true);
    setMessages(prev => [...prev, { role: 'user', content: action }]);
    
    try {
      let response;
      if (action.includes('Report A')) {
        response = await generateReportSample('A');
      } else if (action.includes('Report B')) {
        response = await generateReportSample('B');
      } else {
        response = await getFarmingInsight(action);
      }
      setMessages(prev => [...prev, { role: 'ai', content: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: "Connection error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const renderAIResponse = (content: any) => {
    if (typeof content === 'string') return <p className="whitespace-pre-wrap">{content}</p>;

    return (
      <div className="bg-emerald-900 text-white rounded-2xl p-6 border border-emerald-400/30">
        <h3 className="text-lg font-black mb-1 text-emerald-400 uppercase tracking-widest">{content.reportType}</h3>
        <p className="text-xs text-slate-300 mb-4">{content.orchardType}</p>
        <p className="text-sm mb-6 leading-relaxed italic border-l-2 border-emerald-500 pl-4">{content.summary}</p>
        <div className="grid grid-cols-1 gap-3">
          {content.metrics?.map((m: any, i: number) => (
            <div key={i} className="flex justify-between items-center bg-white/10 p-4 rounded-xl">
              <span className="text-xs font-bold text-slate-300">{m.label}</span>
              <div className="text-right">
                <span className="block font-black">{m.value}</span>
                <span className={`text-[10px] font-bold uppercase ${m.status === 'Normal' ? 'text-emerald-400' : 'text-amber-400'}`}>{m.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-slate-900 mb-2">AeroFarming Analytics</h2>
        <p className="text-slate-500">Sub-canopy intelligence reporting at your fingertips.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[700px] border border-slate-200">
        <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto space-y-8 bg-slate-50/50">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center px-12 opacity-50">
               <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center mb-6">
                 <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                 </svg>
               </div>
               <p className="text-lg font-bold text-slate-600 mb-4">Choose a report type to visualize sub-canopy data</p>
               <div className="flex flex-wrap justify-center gap-3">
                 <button onClick={() => handleAction('Generate Report A: Early Disease Detection')} className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl hover:border-emerald-500 transition-all font-bold text-slate-700">Disease Detection</button>
                 <button onClick={() => handleAction('Generate Report B: Yield & Blossom Counts')} className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl hover:border-emerald-500 transition-all font-bold text-slate-700">Yield Forecast</button>
               </div>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-5 ${msg.role === 'user' ? 'bg-emerald-600 text-white rounded-3xl rounded-tr-none' : 'bg-white rounded-3xl rounded-tl-none shadow-lg border border-slate-100'}`}>
                {renderAIResponse(msg.content)}
              </div>
            </div>
          ))}
          {loading && <div className="text-emerald-600 font-bold animate-pulse text-sm">AeroFarming AI is reconstructing orchard data...</div>}
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleAction(query); setQuery(''); }} className="p-6 bg-white border-t border-slate-100 flex space-x-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about your orchard data..."
            className="flex-grow px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none font-medium"
          />
          <button disabled={loading} className="p-4 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 transition-all shadow-lg">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default AIFarmingAssistant;
