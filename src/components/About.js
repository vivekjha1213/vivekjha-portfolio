import React from 'react';

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 bg-clip-text text-transparent uppercase tracking-wider relative">
          About The Legend
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 rounded-full shadow-lg shadow-pink-500/50"></div>
        </h2>
        
        <div className="about-grid grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="profile-box flex justify-center lg:justify-start">
            <div className="profile-card w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center text-7xl lg:text-9xl font-black text-white shadow-2xl shadow-blue-500/50 animate-rotate3d">
              {data.initials}
            </div>
          </div>
          
          <div className="about-text lg:col-span-2">
            {data.aboutParagraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-lg lg:text-xl leading-relaxed mb-6 relative pl-8 text-gray-300"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              >
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;