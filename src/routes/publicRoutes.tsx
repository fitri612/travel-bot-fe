import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/HomePage'));
const About = lazy(() => import('../pages/About/AboutPage'));
const Page404 = lazy(() => import('../pages/Error/Page404'));

// Public route list
export const publicRoutes = [
  { path: '/', component: <Home /> },
  { path: '/about', component: <About /> },
  { path: '/404', component: <Page404 /> },
  { path: '*', component: <Navigate to={'/404'} /> },
];
