import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind classes safely — resolves conflicts (e.g. bg-primary + bg-canvas → bg-canvas)
 * Usage: cn('bg-primary text-on-primary', isPressed && 'bg-primary-pressed')
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}