import React, { useState, useEffect } from 'react';


// Import components
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Navigation from './components/Navigation';

// Import data
import { personalData, skillsData, experienceData, projectsData, educationData } from './data/data';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navigation activeSection={activeSection} />
      <Header data={personalData} />
      <About data={personalData} />
      <Skills data={skillsData} />
      <Experience data={experienceData} />
      <Projects data={projectsData} />
      <Education data={educationData} />
    </div>
  );
}

export default App;