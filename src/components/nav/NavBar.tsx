import React from 'react';
import { IoHome } from 'react-icons/io5';
import { IoInformationCircleSharp } from 'react-icons/io5';
import { IoBookSharp } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';
import { IoMailSharp } from 'react-icons/io5';

const NavBar = () => {
  return (
    <nav className='sticky font-handlee bg-blue-100 px-2 pt-1 flex justify-between'>
      <a className='flex flex-col align-center text-sm hover:underline hover:cursor-pointer hover:text-purple-700'>
        <IoHome className='w-full text-black'/>
        Home
      </a>
      <a className='flex flex-col align-center text-sm hover:underline hover:cursor-pointer hover:text-purple-700'>
        <IoInformationCircleSharp className='w-full text-blue-400'  />
        About
      </a>
      <a className='flex flex-col align-center text-sm hover:underline hover:cursor-pointer hover:text-purple-700'>
        <IoBookSharp className='w-full text-green-600'  />
        Poetry
      </a>
      <a className='flex flex-col align-center text-sm hover:underline hover:cursor-pointer hover:text-purple-700'>
        <IoLogoYoutube className='w-full text-youtube-red' />
        Media
      </a>
      <a className='flex flex-col align-center text-sm hover:underline hover:cursor-pointer hover:text-purple-700'>
        <IoMailSharp className='w-full text-gray-600' />
        Contact me
      </a>
    </nav>
  );
};

export default NavBar;
