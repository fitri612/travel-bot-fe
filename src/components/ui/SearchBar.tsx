import { forwardRef, useState, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

const SearchIcon = () => (
	<svg
		className="absolute left-lg top-1/2 -translate-y-1/2 text-ash pointer-events-none"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="3" // Dipertebal sedikit agar ikon kaca pembesar terlihat tegas
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden
	>
		<circle cx="11" cy="11" r="8" />
		<path d="m21 21-4.35-4.35" />
	</svg>
);

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(({ className, placeholder = 'Search for ideas, fashion...', ...props }, ref) => {
	const [focused, setFocused] = useState(false);

	return (
		<div className="relative w-full flex items-center">
			<SearchIcon />
			<input
				ref={ref}
				type="search"
				placeholder={placeholder}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				className={cn(
					'w-full text-body-md text-ink font-medium',
					// PERBAIKAN: Ganti h-search-bar dengan padding vertikal py-[11px] & horizontal px
					// Gunakan rounded-full standar Tailwind v4
					'py-[11px] pl-[44px] pr-lg rounded-full outline-none',
					'transition-all duration-150 border',

					// default: surface-card bg, border samar sewarna background agar tinggi tidak berubah saat focus
					!focused && 'bg-surface-card border-surface-card',

					// focused: canvas bg + ash border
					focused && 'bg-canvas border-ash shadow-sm',

					'placeholder:text-mute',
					className
				)}
				{...props}
			/>
		</div>
	);
});

SearchBar.displayName = 'SearchBar';

export { SearchBar };
export type { SearchBarProps };
