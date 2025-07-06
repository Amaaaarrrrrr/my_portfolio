import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import CaseStudies from '../components/CaseStudies';
import Achievements from '../components/Achievements';
import Blog from '../components/Blog';
import GitHubActivity from '../components/GitHubActivity';
import LiveDemo from '../components/LiveDemo';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LiveDemo />
      <CaseStudies />
      <Achievements />
      <Blog />
      <GitHubActivity />
      <Contact />
    </main>
  );
};

export default Home;