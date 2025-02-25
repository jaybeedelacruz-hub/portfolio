import React from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';

const Home = () => {
  return (
    <>
      <div className="bg-white dark:bg-red-950 pt-24 px-12 sm:px-24 py-16 h-screen overflow-auto space-y-16">
        <Hero />
        <p className="text-5xl text-center text-white font-bold tracking-wider">
          EXPERTISE
        </p>
        <Expertise />
        <p className="text-5xl text-center text-white font-bold tracking-wider">
          PROJECTS
        </p>
      </div>
    </>
  );
};

export default Home;
