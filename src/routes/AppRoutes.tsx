import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { authProtectedWHorizonRoutes } from './authProtectedWHorizonRoutes';
import RoleMiddleware from './RoleMiddleware';
import { Suspense } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Loader } from '@/components/ui/Loader';

const AppRoutes = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				{/* Public routes */}
				{publicRoutes.map((route, idx) => (
					<Route key={idx} path={route.path} element={<MainLayout>{route.component}</MainLayout>} />
				))}

				{/* Protected routes */}
				{authProtectedWHorizonRoutes.map((route, idx) => (
					<Route
						key={idx}
						path={route.path}
						element={
							<RoleMiddleware allowedRoles={route?.allowedRoles || []}>
								<MainLayout>{route.component}</MainLayout>
							</RoleMiddleware>
						}
					/>
				))}
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
