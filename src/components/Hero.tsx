import React from 'react';
import hero from '../assets/profile_pic.png';

const Hero = () => {
  return (
    <div className='flex justify-evenly bg-orange-50'>
      <img src={hero} className='h-auto w-48' alt='' />
      <h1 className='font-tangerine text-6xl text-center w-con'>
        Séamus
        <span className='block'>Rattigan</span>
      </h1>
    </div>
  );
};

export default Hero;
