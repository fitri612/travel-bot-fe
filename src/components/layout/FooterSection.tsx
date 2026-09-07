import TravelBotLogo from '@/assets/icons/TravelBotLogo';
import { cn } from '@/utils/cn';

interface FooterSectionProps {
	className?: string;
}

function FooterSection({ className }: FooterSectionProps) {
	const year = new Date().getFullYear();

	return (
		<footer className={cn('bg-slate-900 border-t border-slate-800 py-6 px-6 md:px-8 text-slate-400', className)}>
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
				{/* Brand & Tagline */}
				<div className="flex items-center gap-2">
          <TravelBotLogo />
					<span className="text-white font-bold text-base tracking-tight">
						Travel<span className="text-blue-500">Bot</span>
					</span>
					<span className="hidden sm:inline text-xs text-slate-500 border-l border-slate-800 pl-2 ml-1">AI Travel Assistant</span>
				</div>

				{/* Quick Links */}
				<nav className="flex items-center gap-6 text-xs font-medium text-slate-300">
					<a href="#" className="hover:text-white transition-colors">
						Eksplor
					</a>
					<a href="#" className="hover:text-white transition-colors">
						Privasi
					</a>
					<a href="#" className="hover:text-white transition-colors">
						Syarat & Ketentuan
					</a>
					<a href="#" className="hover:text-white transition-colors">
						Bantuan
					</a>
				</nav>

				{/* Copyright */}
				<span className="text-xs text-slate-500">
					© {year} TravelBot. Created by{' '}
					<a href="https://www.linkedin.com/in/lailatul-fitriyah612/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-slate-300 hover:underline">
						Lailatul Fitriyah
					</a>
				</span>
			</div>
		</footer>
	);
}

export { FooterSection };
export type { FooterSectionProps };
