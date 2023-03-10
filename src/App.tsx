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
import PoetryIndex from './pages/PoetryIndex';
import PoemSelected from './pages/PoemSelected';
import Media from './pages/Media';
import ContactMe from './pages/ContactMe';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='poetry-index' element={<PoetryIndex />} />
      <Route path='poem-selected' element={<PoemSelected />} />
      <Route path='media' element={<Media />} />
      <Route path='contact-me' element={<ContactMe />} />
      <Route path='/*' element={<Home />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
