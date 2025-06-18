// src/components/layout/Layout.tsx
import { type JSX } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = (): JSX.Element => {
  return (
    <div>
      <h1>Header</h1>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
