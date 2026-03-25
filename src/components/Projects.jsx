import React from 'react';

const ProjectCard = ({ title, desc, tech, image }) => (
  <div className="group relative bg-[#080808] rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden flex flex-col h-full">
    
    {/* 1. Image Section - Fixed Height for perfect alignment */}
    <div className="relative h-48 w-full overflow-hidden border-b border-white/5 bg-[#111]">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
      />
      {/* Gradient Overlay to blend with card */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
    </div>

    {/* 2. Content Section */}
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <div className="flex gap-3 text-gray-500">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-white cursor-pointer transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-cyan-400 cursor-pointer transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </div>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
        {desc}
      </p>

      {/* 3. Tech Tags - Pushed to the bottom for alignment */}
      <div className="mt-auto flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-[9px] font-bold px-2 py-1 bg-cyan-500/5 text-cyan-500/60 border border-cyan-500/10 rounded uppercase tracking-widest">
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* Subtle Glow Effect on Hover */}
    <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
  </div>
);

const Projects = () => {
  const projectData = [
    {
      title: "Internship Finder",
      desc: "Full-stack placement portal with JWT auth and real-time tracking.",
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500', 
    },
    {
      title: "Grocery E-Commerce",
      desc: "High-concurrency Spring Boot backend with optimized MySQL schemas.",
      tech: ['Java', 'Spring Boot', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: "Portfolio v2",
      desc: "Modern cinematic portfolio using Framer Motion and Tailwind CSS.",
      tech: ['React', 'Tailwind', 'GSAP'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=500',
    }
  ];

  return (
    <section id="projects" className="py-10 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        
        {/* Alignment Header matching your Skills/Hero style */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Work.</span>
          </h2>
        </div>

        {/* 3-Column Grid for Professional Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;