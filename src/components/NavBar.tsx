import React from 'react';
import { IoHome } from 'react-icons/io5';
import { IoInformationCircleSharp } from 'react-icons/io5';
import { IoBookSharp } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';
import { IoMailSharp } from 'react-icons/io5';

const NavBar = () => {
  return (
    <nav className='font-esteban bg-violet-200 p-1 flex gap-4 justify-between'>
      <a className='flex flex-col align-center'>
        Home
        <IoHome className='w-full' />
      </a>
      <a className='flex flex-col align-center'>
        About
        <IoInformationCircleSharp className='w-full' />
      </a>
      <a className='flex flex-col align-center'>
        Poetry
        <IoBookSharp className='w-full' />
      </a>
      <a className='flex flex-col align-center'>
        Media
        <IoLogoYoutube className='w-full' />
      </a>
      <a className='flex flex-col align-center'>
        Contact me
        <IoMailSharp className='w-full' />
      </a>
    </nav>
  );
};

export default NavBar;
