import { IoHome } from 'react-icons/io5';
import { IoBookSharp } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';
import { IoMailSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='sticky flex w-auto justify-between bg-blue-200 px-2 pt-1 font-handlee'>
      <div className='relative'>
        <NavLink
          to='/'
          className='text-sm hover:cursor-pointer hover:text-purple-700 hover:underline md:text-base lg:text-lg'
        >
          <IoHome className='relative left-[30%] text-orange-400' />
          Home
        </NavLink>
      </div>
      <div className='relative'>
        <NavLink
          to='poetry-index'
          className='text-sm hover:cursor-pointer hover:text-purple-700 hover:underline md:text-base lg:text-lg'
        >
          <IoBookSharp className='relative left-1/3 text-green-600' />
          Poetry
        </NavLink>
      </div>
      <div className='relative'>
        <NavLink
          to='media'
          className='text-sm hover:cursor-pointer hover:text-purple-700 hover:underline md:text-base lg:text-lg'
        >
          <IoLogoYoutube className='relative left-[31%] text-youtube-red' />
          Media
        </NavLink>
      </div>
      <div className='relative'>
        <NavLink
          to='contact-me'
          className='text-sm hover:cursor-pointer hover:text-purple-700 hover:underline md:text-base lg:text-lg'
        >
          <IoMailSharp className='relative left-[40%] text-gray-600' />
          Contact me
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
