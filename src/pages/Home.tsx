import React from 'react';
import NavBar from '../components/nav/NavBar';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <section className='flex justify-center'>
      <div className='w-[800px] mx-auto'>
        <Hero />
        <About />
      </div>
    </section>
  );
};

export default Home;
