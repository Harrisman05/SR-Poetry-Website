import { IoHome } from 'react-icons/io5';
import { IoBookSharp } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';
import { IoMailSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='sticky flex w-auto justify-between bg-blue-200 px-2 pt-1 font-handlee'>
      <div className='bg-slate-500'>
        <NavLink
          to='/'
          className='text-sm hover:cursor-pointer hover:text-purple-700 hover:underline md:text-base lg:text-lg'
        >
          <IoHome className='text-orange-900' />
          Home
        </NavLink>
      </div>
      <NavLink
        to='poetry-index'
        className='align-center flex flex-col text-sm hover:cursor-pointer hover:text-purple-700 hover:underline md:text-base lg:text-lg'
      >
        <IoBookSharp className='w-full text-green-600' />
        Poetry
      </NavLink>
      <NavLink
        to='media'
        className='align-center flex flex-col text-sm hover:cursor-pointer hover:text-purple-700 hover:underline md:text-base lg:text-lg'
      >
        <IoLogoYoutube className='w-full text-youtube-red' />
        Media
      </NavLink>
      <NavLink
        to='contact-me'
        className='align-center flex flex-col text-sm hover:cursor-pointer hover:text-purple-700 hover:underline md:text-base lg:text-lg'
      >
        <IoMailSharp className='w-full text-gray-600' />
        Contact me
      </NavLink>
    </nav>
  );
};

export default NavBar;
