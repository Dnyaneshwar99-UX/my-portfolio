import React from 'react';
import profilePic from '../assets/profile.png'; 
import resume from '../assets/Dnyaneshwar_Panchal_CV.pdf'; // Ensure this path is correct
import { Download } from 'lucide-react'; // Optional: if you use lucide-react

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 py-6 overflow-hidden bg-[#030303]">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* RIGHT COLUMN: PROFILE */}
        <div className="order-1 lg:order-2 flex justify-center items-center mt-16 lg:mt-0">
          <div className="relative group">
            <div className="absolute inset-[-18px] md:inset-[-45px] animate-[spin_15s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                <circle cx="50" cy="50" r="48" fill="none" stroke="url(#gradient)" strokeWidth="0.5" strokeDasharray="4 4" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute inset-[-10px] md:inset-[-25px] animate-[spin_8s_linear_infinite_reverse]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="48" fill="none" stroke="#06b6d4" strokeWidth="1.2" strokeDasharray="20 180" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              </svg>
            </div>
            <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-2 md:border-4 border-white/5 p-1.5 md:p-2 bg-[#0a0a0a] z-10">
              <div className="w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={profilePic} alt="Dnyaneshwar Panchal" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
              </div>
            </div>
            <div className="absolute -bottom-2 right-2 md:-bottom-4 md:right-0 bg-[#121212] border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-2xl z-20 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-tighter">Java Specialist</span>
            </div>
          </div>
        </div>

        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="order-2 lg:order-1 space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Projects
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight">
              Dnyaneshwar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                Panchal.
              </span>
            </h1>
            
            <p className="text-slate-400 text-sm sm:text-base md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Full Stack <span className="text-white font-medium italic">Java Developer</span> building high-performance backend systems at <span className="text-cyan-400 font-medium">TGPCET Nagpur</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-white text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 text-xs md:text-sm tracking-widest uppercase"
            >
              View Projects
            </a>
            
            {/* FIXED DOWNLOAD CV LINK */}
            <a 
              href={resume} // Path to the file in your public folder
              download="Dnyaneshwar_Panchal_CV.pdf" // The name the file will have when downloaded
              className="w-full sm:w-auto px-8 py-3.5 border border-white/10 hover:border-white/40 text-white font-bold rounded-full transition-all backdrop-blur-sm hover:bg-white/5 text-xs md:text-sm tracking-widest uppercase flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;