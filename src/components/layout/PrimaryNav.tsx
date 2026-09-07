import { cn } from '@/utils/cn';
import { Button, SearchBar } from '@/components/ui';
import TravelBotLogo from '@/assets/icons/TravelBotLogo';

interface PrimaryNavProps {
	onSignUp?: () => void;
	onLogin?: () => void;
	className?: string;
}

function PrimaryNav({ onSignUp, onLogin, className }: PrimaryNavProps) {
	return (
		<header className={cn('sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-slate-300', 'h-16 flex items-center gap-4 px-4 md:px-8 py-3', className)}>
			{/* Brand Logo & Name — Left */}
			<a href="/" className="flex items-center gap-2 shrink-0 no-underline" aria-label="Travel Bot Home">
				<TravelBotLogo />
				<span className="text-white font-bold text-lg hidden sm:block tracking-tight">
					Travel<span className="text-blue-500">Bot</span>
				</span>
			</a>

			{/* Navigation Links — Desktop */}
			<nav className="hidden md:flex items-center gap-1">
				<a href="/explore" className="text-slate-300 hover:text-white font-medium text-sm px-3 py-2 rounded-xl hover:bg-slate-800 transition-colors">
					Jelajah Wisata
				</a>
				<a href="/history" className="text-slate-300 hover:text-white font-medium text-sm px-3 py-2 rounded-xl hover:bg-slate-800 transition-colors">
					Riwayat Chat
				</a>
			</nav>

			{/* Search Bar — Center */}
			<div className="flex-1 max-w-[480px] mx-auto hidden sm:block">
				<SearchBar />
			</div>

			{/* Right Cluster Action Buttons */}
			<div className="flex items-center gap-2 ml-auto">
				<Button variant="secondary" onClick={onLogin} className="bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl px-4 py-2 text-sm border border-slate-700 transition-colors">
					Masuk
				</Button>
				<Button variant="primary" onClick={onSignUp} className="bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl px-4 py-2 text-sm shadow-sm transition-colors">
					Daftar
				</Button>
			</div>
		</header>
	);
}

export { PrimaryNav };
export type { PrimaryNavProps };
