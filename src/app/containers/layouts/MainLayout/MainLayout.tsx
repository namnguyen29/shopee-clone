import { Outlet } from 'react-router-dom';

import { RegisterFooter, MainHeader } from '@app-containers/components';

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <RegisterFooter />
    </div>
  );
};
