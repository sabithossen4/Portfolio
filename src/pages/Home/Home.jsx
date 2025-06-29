import React from 'react';
import Banner from './Banner';
import About from '../About';
import Skills from '../Skill';
import Contact from '../Contact';
import Experience from '../Experience';
import Project from '../Project';
import Education from '../Education';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <Banner />

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="project">
        <Project />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
