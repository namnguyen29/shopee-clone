import { lazy } from 'react';

export const Home = lazy(() => import('./Home/Home').then(({ Home }) => ({ default: Home })));
export const Login = lazy(() => import('./Login/Login').then(({ Login }) => ({ default: Login })));
export const ProductList = lazy(() =>
  import('./ProductList/ProductList').then(({ ProductList }) => ({ default: ProductList }))
);
export const Register = lazy(() =>
  import('./Register/Register').then(({ Register }) => ({ default: Register }))
);
