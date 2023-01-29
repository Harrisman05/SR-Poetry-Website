import React from 'react';
import hero_image from '../../assets/profile_pic.png';
import About from './About';
import HeroText from './HeroText';

const Hero = () => {
  return (
    <div className='w-4/5 mx-auto p-2 flex flex-wrap gap-8 justify-around items-center '>
      <HeroText />
      <img src={hero_image} className='h-auto w-48' alt='hero_image' />
      <About/>
    </div>
  );
};

export default Hero;
