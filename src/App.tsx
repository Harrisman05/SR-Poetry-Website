import React from 'react';
import NavBar from './components/nav/NavBar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <section className='flex justify-center max-w-8xl h-screen bg-pink-50'>
      <section className='w-[800px] mx-auto'>
        <NavBar />
        <Hero />
        <About />
        <Footer />
      </section>
    </section>
  );
}

export default App;
