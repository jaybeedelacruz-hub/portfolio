import React from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Project from '../components/Project';

const Home = () => {
  return (
    <>
      <div className="bg-white dark:bg-red-950 pt-24 px-12 sm:px-24 py-16 space-y-16">
        <Hero />
        <p className="text-4xl sm:text-5xl text-center text-white font-bold tracking-wider">
          EXPERTISE
        </p>
        <Expertise />
        <p className="text-4xl sm:text-5xl text-center text-white font-bold tracking-wider">
          PROJECTS
        </p>
        <Project />
      </div>
    </>
  );
};

export default Home;
