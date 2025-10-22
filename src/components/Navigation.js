import React from 'react';

const Navigation = ({ activeSection }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-5 right-5 z-50 bg-gray-900/90 backdrop-blur-md border-2 border-purple-500 rounded-2xl p-4 shadow-2xl shadow-purple-500/30">
      <ul className="flex flex-wrap gap-4 justify-center">
        {navItems.map(item => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 ${
                activeSection === item.id 
                  ? 'text-purple-400 bg-purple-400/20 shadow-lg shadow-purple-500/30' 
                  : 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/10'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;