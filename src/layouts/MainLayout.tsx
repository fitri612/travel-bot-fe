// src/layouts/MainLayout.tsx
import { FooterSection, PrimaryNav } from '@/components/layout';
import { ReactNode } from 'react';

type MainLayoutProps = {
	children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<div>
			<PrimaryNav />
			{children}
			<FooterSection />
		</div>
	);
}
