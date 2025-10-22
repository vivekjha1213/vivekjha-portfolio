import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 bg-clip-text text-transparent uppercase tracking-wider relative">
          Mission Portfolio
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 rounded-full shadow-lg shadow-pink-500/50"></div>
        </h2>
        
        <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.map((project, index) => (
            <div 
              key={index} 
              className="project-card bg-gray-900 border-2 border-pink-500 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-pink-500/50 group"
            >
              <div className="project-header bg-gradient-to-br from-purple-600 to-pink-600 p-8 relative overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-radial-gradient circle white opacity-20 animate-ripple"></div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white relative z-10">{project.name}</h3>
              </div>
              
              <div className="project-content p-6">
                <ul className="space-y-3 mb-6">
                  {project.details.map((detail, detailIndex) => (
                    <li 
                      key={detailIndex} 
                      className="text-gray-300 leading-relaxed pl-8 relative"
                    >
                      <span className="absolute left-0 text-green-400 text-lg">✦</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;