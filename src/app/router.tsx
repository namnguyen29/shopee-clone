import { Suspense } from 'react';

import { createBrowserRouter, Outlet } from 'react-router-dom';

import { MainLayout, RegisterLayout } from '@app-containers/layouts';
import { Home, Login, ProductList, Register } from './pages';

export const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>IS LOADING...</div>}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/products',
            element: <ProductList />
          }
        ]
      },
      {
        path: '/',
        element: <RegisterLayout />,
        children: [
          {
            path: '/login',
            element: <Login />
          },
          {
            path: '/register',
            element: <Register />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <div>404, redirect to home</div>
  }
]);
