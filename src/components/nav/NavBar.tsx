import React from 'react';
import { IoHome } from 'react-icons/io5';
import { IoInformationCircleSharp } from 'react-icons/io5';
import { IoBookSharp } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';
import { IoMailSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='sticky font-handlee bg-blue-100 px-2 pt-1 flex justify-between w-auto'>
      <NavLink
        to='/'
        className='flex flex-col align-center text-sm hover:underline hover:cursor-pointer hover:text-purple-700'
      >
        <IoHome className='w-full text-black' />
        Home
      </NavLink>
      <NavLink
        to='about'
        className='flex flex-col align-center text-sm hover:underline hover:cursor-pointer hover:text-purple-700'
      >
        <IoInformationCircleSharp className='w-full text-blue-400' />
        About
      </NavLink>
      <NavLink
        to='poetry'
        className='flex flex-col align-center text-sm hover:underline hover:cursor-pointer hover:text-purple-700'
      >
        <IoBookSharp className='w-full text-green-600' />
        Poetry
      </NavLink>
      <NavLink
        to='media'
        className='flex flex-col align-center text-sm hover:underline hover:cursor-pointer hover:text-purple-700'
      >
        <IoLogoYoutube className='w-full text-youtube-red' />
        Media
      </NavLink>
      <NavLink
        to='contact_me'
        className='flex flex-col align-center text-sm hover:underline hover:cursor-pointer hover:text-purple-700'
      >
        <IoMailSharp className='w-full text-gray-600' />
        Contact me
      </NavLink>
    </nav>
  );
};

export default NavBar;
