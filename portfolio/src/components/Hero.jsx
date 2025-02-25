import React from 'react';
import { Image } from '../assets/images/image';

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-0">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center text-black dark:text-white bg-red-900 px-12 py-8 space-y-4 text-start rounded-3xl">
        <p className="text-5xl leading-tight">
          I'm Jaybee a growing{' '}
          <span className="text-red-400 font-semibold">Web Developer</span>
        </p>
        <p className="text-2xl">A passionate learner and a tech enthusiast</p>
        <p className="text-2xl">Who is specialize in Web Development</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center">
        <img src={Image.Coding} alt="" className="h-96" />
      </div>
    </div>
  );
};

export default Hero;
