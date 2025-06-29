import React from 'react';
import Banner from './Banner';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default Home;