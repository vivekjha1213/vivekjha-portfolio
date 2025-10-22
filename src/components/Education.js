import React from 'react';

const Education = ({ data }) => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="section-title text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 bg-clip-text text-transparent uppercase tracking-wider relative">
          Knowledge Base
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 rounded-full shadow-lg shadow-pink-500/50"></div>
        </h2>
        
        <div className="education-card bg-gray-900 border-2 border-green-400 rounded-2xl p-8 max-w-3xl mx-auto shadow-2xl shadow-green-400/30">
          <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-4">{data.degree}</h3>
          <p className="timeline-date text-green-400 font-bold text-lg mb-2">{data.duration}</p>
          <p className="text-xl text-gray-300 mb-4">{data.institution}</p>
          <p className="text-lg text-blue-400 font-semibold mb-6">CGPA: {data.cgpa}</p>
          
          <div className="specializations">
            <h4 className="text-lg font-bold text-pink-400 mb-3">Specializations:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {data.specializations.map((specialization, index) => (
                <li 
                  key={index} 
                  className="text-gray-300 flex items-center gap-2"
                >
                  <span className="text-green-400">▹</span>
                  {specialization}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;