import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils';

// Variants from DESIGN.md components section
type ButtonVariant =
	| 'primary' // bg primary red — universal CTA
	| 'secondary' // bg secondary-bg cream — second-tier actions
	| 'tertiary' // transparent ghost — low emphasis
	| 'icon-circular' // 40×40 circle — carousel paddles, close buttons
	| 'pill-on-image' // white pill overlaid on photography
	| 'disabled'; // flat soft-cream — non-interactive

type ButtonSize = 'lg' | 'md' | 'sm';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	children: ReactNode;
	className?: string;
}

// Base styles shared across all variants
const base =
	'inline-flex items-center justify-center font-bold leading-none ' +
	'transition-colors duration-150 cursor-pointer select-none ' +
	'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus-outer focus-visible:ring-offset-2';

// Variant → Tailwind class map
const variants: Record<ButtonVariant, string> = {
	primary: 'bg-primary text-on-primary rounded-full font-size-14 hover:bg-primary-pressed active:bg-primary-pressed',
	secondary: 'bg-secondary-bg text-on-secondary rounded-full hover:bg-secondary-pressed active:bg-secondary-pressed',
	tertiary: 'bg-transparent text-ink rounded-full hover:bg-surface-card active:bg-hairline-soft',
	'icon-circular': 'bg-surface-card text-ink rounded-full h-btn w-btn hover:bg-secondary-bg active:bg-secondary-pressed',
	'pill-on-image': 'bg-canvas text-ink rounded-full hover:bg-hairline-soft active:bg-stone',
	disabled: 'bg-surface-card text-ash rounded-full cursor-not-allowed',
};

// Size → padding map
// DESIGN.md: button-md → 14px/700, padding 6px 14px, height ~40px
//            button-sm → 12px/700, smaller padding
const sizes: Record<ButtonSize, string> = {
	lg: 'text-button-lg px-lg py-xs h-btn',
	md: 'text-button-md px-lg py-xs h-btn',
	sm: 'text-button-sm px-md py-xxs',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', size = 'md', className, children, disabled, ...props }, ref) => {
	const resolvedVariant = disabled ? 'disabled' : variant;
	const isIconCircular = variant === 'icon-circular';

	// 1. Ambil kelas warna khusus dari variant saat ini
    const variantColorClass = variants[resolvedVariant];
	return (
		<button
			ref={ref}
			disabled={resolvedVariant === 'disabled'}
			className={`${variantColorClass} ${cn(
				base,
				!isIconCircular && sizes[size],
				className
			)}`}
			{...props}
		>
			{children}
		</button>
	);
});

Button.displayName = 'Button';

export { Button };
export type { ButtonVariant, ButtonSize, ButtonProps };
