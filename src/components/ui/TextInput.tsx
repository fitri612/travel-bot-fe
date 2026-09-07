import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils';

// DESIGN.md text-input:
//   bg canvas, 1px solid ash, rounded-r-md, padding 11px 15px, height ~44px
// focused:
//   2px ink inner border + 4px focus-outer outer outline (double-ring signal)

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	className?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ label, error, className, id, ...props }, ref) => {
	const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

	return (
		<div className="flex flex-col gap-xs w-full">
			{label && (
				<label htmlFor={inputId} className="text-body-strong text-ink">
					{label}
				</label>
			)}
			<input
				ref={ref}
				id={inputId}
				className={cn(
					// base
					'w-full bg-canvas text-ink text-body-md',
					'h-input px-lg rounded-r-md',
					'border border-ash outline-none',
					'placeholder:text-ash',
					// double-ring focus — 2px ink inner + 4px focus-outer outer
					'focus:border-2 focus:border-ink focus:ring-4 focus:ring-focus-outer',
					'transition-shadow duration-150',
					// error state
					error && 'border-error focus:border-error focus:ring-error/30',
					className
				)}
				{...props}
			/>
			{error && <span className="text-caption-md text-error">{error}</span>}
		</div>
	);
});

TextInput.displayName = 'TextInput';

export { TextInput };
export type { TextInputProps };
