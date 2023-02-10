import { NavLink, Outlet } from 'react-router-dom';
import NavBar from '../components/nav/NavBar';
import Footer from '../components/footer/Footer';

const RootLayout = () => {
  return (
    <div className='root-layout w-screen bg-orange-50'>
      <div className='absolute left-0 s:h-[38px] md:h-[44px] lg:h-[50px] w-screen bg-blue-200'></div>
      <div className='mx-auto flex min-h-[calc(100vh-17px)] max-w-[800px] flex-col'>
        <header>
          <NavBar />
        </header>
        <main>
          <Outlet />
          {/* Outlet where to output page components that are nested in / route */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
