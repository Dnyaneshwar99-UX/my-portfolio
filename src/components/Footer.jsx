import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030303] pt-20 pb-10 px-6 md:px-10 overflow-hidden border-t border-white/5">
      {/* Decorative Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tighter">
              Dnyaneshwar <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Panchal.</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Full Stack Java Developer specializing in high-performance backend systems and modern UI/UX design. Based in Nagpur, India.
            </p>
            <div className="flex gap-4">
               {/* Simple GitHub Icon SVG */}
               <a href="https://github.com/Dnyaneshwar99-UX" className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-gray-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
               </a>
               {/* Simple LinkedIn Icon SVG */}
               <a href="https://www.linkedin.com/in/dnyaneshwar-panchal-136127328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-500/50 hover:text-blue-400 transition-all text-gray-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
               </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Navigation</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Status Column */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Status</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Available for Hire</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Nagpur, MH, India <br />
              CSE @ TGPCET
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-medium text-gray-600 uppercase tracking-widest text-center md:text-left">
            © {currentYear} Dnyaneshwar Panchal. <br className="md:hidden" /> Crafted with React & Tailwind.
          </p>
          <div className="flex items-center gap-4 text-[9px] font-bold text-gray-700 uppercase tracking-[0.2em]">
            <span>Privacy</span>
            <span>•</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;