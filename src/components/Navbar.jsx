import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    
    // 1. Immediately close the menu so it doesn't block the view
    setIsMenuOpen(false);

    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      // 2. We use a small timeout for mobile to let the menu closing animation finish
      // This prevents "jumping" while the menu is disappearing
      setTimeout(() => {
        const offset = window.innerWidth < 768 ? 70 : 80; // Smaller offset for mobile
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 10); 
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <div className="flex items-center gap-2">
          <span className="text-cyan-500 font-mono text-xl">{'<>'}</span>
          <span className="font-black text-xl md:text-2xl tracking-tighter text-white">
            Java<span className="text-slate-500">Dev</span>
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, '#contact')}
            className="bg-cyan-600 text-white text-[11px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-cyan-500 transition-all active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden text-white p-2 outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 px-6 py-10 flex flex-col gap-8 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-bold uppercase tracking-[0.2em] text-slate-400 active:text-cyan-400"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-cyan-600 text-white text-center font-black py-4 rounded-xl uppercase tracking-widest text-sm"
            onClick={(e) => handleScroll(e, '#contact')}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;