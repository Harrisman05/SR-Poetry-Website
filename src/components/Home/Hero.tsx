import React from 'react';
import hero_image from '../../assets/profile_pic.png';
import HeroText from './HeroText';

const Hero = () => {
  return (
    <div className='p-2 flex flex-wrap gap-4 justify-around items-center '>
      <HeroText />
      <img src={hero_image} className='h-auto w-48' alt='hero_image' />
    </div>
  );
};

export default Hero;
