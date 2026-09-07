import { type ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils'

// DESIGN.md filter-chip:
//   default → bg surface-card, text ink, rounded-r-full, padding 8px 16px
//   active  → bg ink, text on-dark (fully inverted)

interface FilterChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  label: string
}

function FilterChip({ active = false, label, className, ...props }: FilterChipProps) {
  return (
    <button
      role="checkbox"
      aria-checked={active}
      className={cn(
        'inline-flex items-center text-button-md font-bold',
        'px-lg py-sm rounded-r-full whitespace-nowrap',
        'transition-colors duration-150 cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus-outer',
        // default
        !active && 'bg-surface-card text-ink hover:bg-secondary-bg',
        // active — fully inverted
        active  && 'bg-ink text-on-dark',
        className,
      )}
      {...props}
    >
      {label}
    </button>
  )
}

export { FilterChip }
export type { FilterChipProps }