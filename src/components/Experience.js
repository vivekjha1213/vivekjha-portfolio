import React from 'react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="section-title text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 bg-clip-text text-transparent uppercase tracking-wider relative">
          Battle History
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 rounded-full shadow-lg shadow-pink-500/50"></div>
        </h2>
        
        <div className="timeline relative pl-16">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/50"></div>
          
          {data.map((job, index) => (
            <div 
              key={index} 
              className="timeline-item bg-gray-900 border-2 border-purple-500 rounded-2xl p-8 mb-8 transition-all duration-300 hover:translate-x-4 hover:shadow-2xl hover:shadow-purple-500/50 relative group"
            >
              <div className="absolute -left-12 top-10 text-3xl text-blue-400 animate-pulse">●</div>
              
              <div className="timeline-header flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-2">{job.company}</h3>
                  <p className="timeline-role text-xl text-pink-400 font-bold">{job.role}</p>
                  <p className="text-gray-400 mt-1">{job.location}</p>
                </div>
                <div className="timeline-date text-green-400 font-bold text-lg bg-green-400/10 px-4 py-2 rounded-full">
                  {job.duration}
                </div>
              </div>
              
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, respIndex) => (
                  <li 
                    key={respIndex} 
                    className="text-gray-300 leading-relaxed pl-8 relative"
                  >
                    <span className="absolute left-0 text-yellow-400 text-lg">⚡</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;