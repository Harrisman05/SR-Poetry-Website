import React from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// components

import NavBar from './components/nav/NavBar';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Poetry from './pages/Poetry';
import Media from './pages/Media';
import ContactMe from './pages/ContactMe';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={< RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='poetry' element={<Poetry />} />
      <Route path='media' element={<Media />} />
      <Route path='contact_me' element={<ContactMe />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
