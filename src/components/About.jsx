import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-8 px-6 md:px-8 bg-[#050505] overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Section Title Side */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-2 block">01. Discovery</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me.</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-2/3 space-y-8">
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-semibold">Dnyaneshwar Panchal</span>, a passionate 
                Computer Science Engineering student at <span className="text-cyan-400">TGPCET, Nagpur</span>. 
                My journey into the world of technology began with a deep curiosity for how complex systems operate 
                behind the scenes.
              </p>
              
              <p>
                Currently, I am specializing as a <span className="text-white font-medium italic underline decoration-cyan-500/30">Java Full Stack Developer</span>. 
                I focus on architecting robust backend solutions using <span className="text-white">Spring Boot</span> while 
                maintaining a sharp eye for modern, responsive frontend interfaces with <span className="text-white">React</span>.
              </p>

              <p>
                I thrive on solving challenging problems and am constantly evolving my toolkit to build 
                applications that are not only functional but also deliver a premium user experience.
              </p>
            </div>

            {/* Stats/Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
              <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors duration-300 backdrop-blur-sm">
                <p className="text-xs uppercase text-slate-500 font-bold tracking-[0.2em] mb-2">Qualification</p>
                <p className="text-white font-bold text-2xl tracking-tight group-hover:text-cyan-400 transition-colors">B.Tech CSE</p>
                <p className="text-slate-500 text-sm mt-1">TGPCET, Nagpur</p>
              </div>

              <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors duration-300 backdrop-blur-sm">
                <p className="text-xs uppercase text-slate-500 font-bold tracking-[0.2em] mb-2">Location</p>
                <p className="text-white font-bold text-2xl tracking-tight group-hover:text-blue-400 transition-colors">Nagpur, India</p>
                <p className="text-slate-500 text-sm mt-1">Available for Remote Work</p>
              </div>
            </div>

            {/* Quick Skills Tag Cloud */}
            <div className="pt-6">
              <p className="text-white font-medium mb-4">Core Focus Area:</p>
              <div className="flex flex-wrap gap-3">
                {['Java', 'Spring Boot', 'Hibernate', 'React.js', 'MySQL', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-lg bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;