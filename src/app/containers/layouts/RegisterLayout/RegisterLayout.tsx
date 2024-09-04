import { Outlet, useLocation } from 'react-router-dom';

import { RegisterFooter, RegisterHeader } from '@app-containers/components';

export const RegisterLayout = () => {
  const location = useLocation();

  return (
    <div className="registerLayout min-h-screen">
      <RegisterHeader path={location.pathname} />
      <main className="bg-sp-orange-0">
        <div className="flex h-[600px] items-center justify-center bg-[url('/sp-banner.png')] bg-contain bg-center bg-no-repeat">
          <Outlet />
        </div>
      </main>
      <RegisterFooter />
    </div>
  );
};
