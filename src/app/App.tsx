import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';

import { rootRouter } from './router';
import { appQueryClient } from '@app-core/configs';

export const App = () => {
  return (
    <QueryClientProvider client={appQueryClient}>
      <RouterProvider router={rootRouter} />
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
