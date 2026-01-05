
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Ready to build your urban farm?</h2>
            <p className="text-emerald-100 text-lg mb-12 max-w-2xl leading-relaxed">
              Connect with our consultation team to design your customized aeroponic facility. 
              Whether it's a home set-up or a commercial enterprise, we have the tools to make it thrive.
            </p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-emerald-200">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Alex Rivera"
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white placeholder-emerald-300/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-emerald-200">Email Address</label>
                <input 
                  type="email" 
                  placeholder="alex@aerofarming.ai"
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white placeholder-emerald-300/50"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-emerald-200">Your Vision</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your space and goals..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white placeholder-emerald-300/50"
                ></textarea>
              </div>
              <button className="md:col-span-2 py-5 bg-white text-emerald-900 font-black text-lg rounded-2xl hover:bg-emerald-50 transition-all shadow-xl">
                Send Consultation Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
