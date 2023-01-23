import React from 'react';
import NavBar from '../components/nav/NavBar';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <section className='flex justify-center max-w-8xl h-screen bg-pink-50'>
      <header className='w-[800px] mx-auto'>
        <Hero />
        <About />
        <Footer />
      </header>
    </section>
  );
};

export default Home;
