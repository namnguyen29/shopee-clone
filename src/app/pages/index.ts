import { lazy } from 'react';

export const Home = lazy(async () => ({
  default: (await import('./Home/Home')).Home
}));

export const Login = lazy(async () => ({
  default: (await import('./Login/Login')).Login
}));

export const ProductList = lazy(async () => ({
  default: (await import('./ProductList/ProductList')).ProductList
}));

export const Register = lazy(async () => ({
  default: (await import('./Register/Register')).Register
}));
