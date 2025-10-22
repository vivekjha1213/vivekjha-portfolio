import React from 'react';

const Skills = ({ data }) => {
  const getIconComponent = (icon) => {
    const icons = {
      '💻': '💻',
      '🔧': '🔧',
      '🗄️': '🗄️',
      '📡': '📡',
      '☁️': '☁️',
      '🤖': '🤖',
      '🚁': '🚁',
      '💼': '💼'
    };
    return icons[icon] || '⚡';
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 bg-clip-text text-transparent uppercase tracking-wider relative">
          Arsenal of Skills
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 rounded-full shadow-lg shadow-pink-500/50"></div>
        </h2>
        
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((skillCategory, index) => (
            <div 
              key={index} 
              className="skill-card bg-gray-900 border-2 border-blue-400 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/50 hover:border-green-400 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-0"></div>
              
              <h3 className="text-xl font-bold mb-4 text-pink-400 flex items-center gap-3">
                <span className="text-2xl">{getIconComponent(skillCategory.icon)}</span>
                {skillCategory.title}
              </h3>
              
              <div className="skill-tags flex flex-wrap gap-2">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-tag px-3 py-2 bg-blue-500/10 border border-blue-400 rounded-full text-sm transition-all duration-300 hover:bg-blue-400 hover:text-gray-900 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/50 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;