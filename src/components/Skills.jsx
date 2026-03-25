import React from 'react';

// Reusable Skill Card Component (Previous Format)
const SkillCard = ({ name, icon, level }) => (
  <div className="bg-[#0c0c0c] p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center hover:border-cyan-500/50 hover:bg-[#111111] transition-all duration-500 group shadow-lg hover:-translate-y-2">
    <div className="h-14 w-14 mb-6 flex items-center justify-center transition-all duration-500">
      <img 
        src={icon} 
        alt={name} 
        className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500" 
      />
    </div>
    <h3 className="font-bold mb-1 text-white tracking-tight group-hover:text-cyan-400 transition-colors text-center">{name}</h3>
    <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{level}</span>
  </div>
);

const Skills = () => {
  const sections = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", level: "Expert" },
        { name: "CSS3", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png", level: "Expert" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", level: "Advanced" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", level: "Advanced" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", level: "Expert" },
      ]
    },
    {
      title: "Backend & Core",
      skills: [
        { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ED8B00", level: "Expert" },
        { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/6DB33F", level: "Advanced" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", level: "Intermediate" },
        { name: "REST APIs", icon: "https://cdn.simpleicons.org/postman/FF6C37", level: "Expert" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", level: "Advanced" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", level: "Advanced" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A24A", level: "Intermediate" },
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "IntelliJ IDEA", icon: "https://cdn.simpleicons.org/intellijidea/000000/white", level: "Expert" },
        { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37", level: "Advanced" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", level: "Basic" },
        { name: "Git & GitHub", icon: "https://cdn.simpleicons.org/github/white", level: "Advanced" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-10 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Arsenal.</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto md:mx-0 rounded-full"></div>
          <p className="mt-8 text-gray-500 max-w-2xl text-lg font-light leading-relaxed">
            A comprehensive suite of technologies focused on building <span className="text-white font-medium italic">scalable backend architectures</span> and modern user interfaces.
          </p>
        </div>

        {/* Skill Sections Mapping */}
        {sections.map((section, idx) => (
          <div key={idx} className="mb-20 last:mb-0">
            <h3 className="text-xl font-bold text-white/40 uppercase tracking-[0.3em] mb-10 text-center md:text-left">
              {section.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {section.skills.map((skill) => (
                <SkillCard 
                  key={skill.name} 
                  name={skill.name} 
                  icon={skill.icon} 
                  level={skill.level} 
                />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;