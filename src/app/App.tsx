import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';

import { rootRouter } from './router';
import { appQueryClient } from '@app-core/configs';

export const App = () => {
  return (
    <QueryClientProvider client={appQueryClient}>
      <RouterProvider router={rootRouter} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
