import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// components

import NavBar from './components/nav/NavBar';

// pages
import Home from './pages/Home';
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
    <header>
      < NavBar /> 
    </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
