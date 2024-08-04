import { Outlet, useLocation } from 'react-router-dom';

import { RegisterFooter, RegisterHeader } from '@app-containers/components';

export const RegisterLayout = () => {
  const location = useLocation();

  return (
    <div className="registerLayout min-h-screen">
      <RegisterHeader path={location.pathname} />
      <Outlet />
      <RegisterFooter />
    </div>
  );
};
