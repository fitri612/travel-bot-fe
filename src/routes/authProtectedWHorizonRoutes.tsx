import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

// Lazy load pages
const Password = lazy(() => import('../pages/Auth/Password/PasswordPage'));
const Page404 = lazy(() => import('../pages/Error/Page404'));

// Public route list
export const authProtectedWHorizonRoutes = [
  { path: '/auth/ubah-pwd', component: <Password />, allowedRoles: ['admin', 'user'] },
  { path: '/404', component: <Page404 /> },
  { path: '*', component: <Navigate to={'/404'} /> },
];
