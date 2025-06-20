import { type JSX } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';

const MainLayout = (): JSX.Element => {
  return (
    <div>
      <Header />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
