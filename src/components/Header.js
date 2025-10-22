import React from 'react';

const Header = ({ data }) => {
  return (
    <header id="home" className="min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="bg-animation"></div>
      <div className="stars"></div>
      <div className="header-content text-center z-10 px-5">
        <h1 className="glitch-text mb-8">{data.name}</h1>
        
        <div className="subtitle-container my-8">
          <span className="typing-text text-2xl text-green-400 font-mono border-r-2 border-green-400 inline-block whitespace-nowrap overflow-hidden animate-typing">
            {data.title}
          </span>
        </div>

        <div className="badge-container flex gap-4 justify-center flex-wrap my-8">
          {data.badges.map((badge, index) => (
            <div key={index} className="badge px-6 py-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg shadow-purple-500/50 animate-float">
              {badge}
            </div>
          ))}
        </div>

        <div className="contact-grid grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mt-10 px-5">
          {data.socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-btn p-4 bg-gray-800 border-2 border-blue-400 text-blue-400 rounded-lg font-bold transition-all duration-300 hover:bg-blue-400 hover:text-gray-900 hover:shadow-lg hover:shadow-blue-400/50 flex items-center justify-center gap-2"
            >
              <span className="text-xl">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="text-4xl text-green-400">⌄</span>
      </div>
    </header>
  );
};

export default Header;