import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission logic (e.g., EmailJS or an API call)
    console.log("Form Submitted");
    
    // Show success message
    setIsSubmitted(true);

    // Automatically hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);

    // Optional: Reset the form
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-10 bg-[#030303] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: CONTACT DETAILS */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-[10px] font-bold uppercase tracking-widest">
                Contact
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                Let’s build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">together.</span>
              </h2>
              <p className="text-gray-500 max-w-md text-lg font-light leading-relaxed">
                Currently open to <span className="text-white font-medium">Full Stack</span> opportunities and technical collaborations.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Email</p>
                  <a href="mailto:dnyaneshwar.panchal@email.com" className="text-white font-medium hover:text-cyan-400 transition-colors text-lg">dnyaneshwar.panchal@email.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Professional</p>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/dnyaneshwar-panchal-136127328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white font-medium hover:text-blue-400 transition-colors">LinkedIn</a>
                    <span className="text-white/10">/</span>
                    <a href="https://github.com/Dnyaneshwar99-UX" className="text-white font-medium hover:text-white/60 transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="bg-[#0c0c0c] p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* SUCCESS MESSAGE OVERLAY */}
            {isSubmitted ? (
              <div className="relative z-20 flex flex-col items-center justify-center h-full py-12 text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center border border-cyan-500/20 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Thanks for reaching out, Dnyaneshwar will <br/> get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-[10px] font-black uppercase tracking-widest text-cyan-400 hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Name</label>
                    <input required type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-500/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                    <input required type="email" placeholder="email@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-500/50 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea required rows="4" placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-500/50 transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-white text-black font-black rounded-2xl text-xs tracking-[0.2em] uppercase hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all active:scale-95">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;