import { NavLink, Outlet } from 'react-router-dom';
import NavBar from '../components/nav/NavBar';
import Footer from '../components/footer/Footer';

const RootLayout = () => {
  return (
    <div className='root-layout max-w-8xl bg-sky-50'>
      <div className='max-w-[800px] flex flex-col min-h-screen mx-auto'>
        <header>
          <NavBar />
        </header>
        <main>
          <Outlet />
          {/* Outlet where to output page components that are nested in / route */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
