/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			// ─── COLORS ───────────────────────────────────────────────
			// Translated 1:1 from DESIGN.md colors section
			colors: {
				primary: '#e60023',
				'primary-pressed': '#cc001f',
				'on-primary': '#ffffff',
				ink: '#000000',
				'ink-soft': '#211922',
				body: '#33332e',
				charcoal: '#262622',
				mute: '#62625b',
				ash: '#91918c',
				stone: '#c8c8c1',
				hairline: '#dadad3',
				'hairline-soft': '#e5e5e0',
				'on-secondary': '#000000',
				'secondary-bg': '#e5e5e0',
				'secondary-pressed': '#c8c8c1',
				canvas: '#ffffff',
				'surface-soft': '#fbfbf9',
				'surface-card': '#f6f6f3',
				'surface-elevated': '#ffffff',
				'on-dark': '#ffffff',
				'on-dark-mute': 'rgba(255,255,255,0.7)',
				'surface-dark': '#262622',
				'focus-outer': '#435ee5',
				'focus-inner': '#ffffff',
				'accent-blue': '#617bff',
				'accent-purple': '#7e238b',
				'accent-purple-deep': '#6845ab',
				'success-deep': '#103c25',
				'success-pale': '#c7f0da',
				error: '#9e0a0a',
				'error-deep': '#cc001f',
			},

			// ─── FONT FAMILY ──────────────────────────────────────────
			// Pin Sans → Manrope (closest open-source substitute per DESIGN.md)
			fontFamily: {
				sans: ['Manrope', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
			},

			// ─── FONT SIZE ────────────────────────────────────────────
			// Each token includes [fontSize, { lineHeight, letterSpacing }]
			fontSize: {
				'display-xl': ['70px', { lineHeight: '1.1', letterSpacing: '-1.2px' }],
				'display-lg': ['44px', { lineHeight: '1.15', letterSpacing: '-0.8px' }],
				'heading-xl': ['28px', { lineHeight: '1.2', letterSpacing: '-1.2px' }],
				'heading-lg': ['22px', { lineHeight: '1.25', letterSpacing: '0' }],
				'heading-md': ['18px', { lineHeight: '1.3', letterSpacing: '0' }],
				'body-md': ['16px', { lineHeight: '1.4', letterSpacing: '0' }],
				'body-strong': ['16px', { lineHeight: '1.4', letterSpacing: '0' }],
				'body-sm': ['14px', { lineHeight: '1.4', letterSpacing: '0' }],
				'body-sm-strong': ['14px', { lineHeight: '1.4', letterSpacing: '0' }],
				'caption-md': ['12px', { lineHeight: '1.5', letterSpacing: '0' }],
				'caption-sm': ['12px', { lineHeight: '1.4', letterSpacing: '0' }],
				'link-md': ['16px', { lineHeight: '1.4', letterSpacing: '0' }],
				'button-md': ['14px', { lineHeight: '1', letterSpacing: '0' }],
				'button-sm': ['12px', { lineHeight: '1', letterSpacing: '0' }],
			},

			// ─── FONT WEIGHT ──────────────────────────────────────────
			fontWeight: {
				regular: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
			},

			// ─── BORDER RADIUS ────────────────────────────────────────
			// DESIGN.md rounded scale — r- prefix avoids conflict with Tailwind defaults
			borderRadius: {
				'r-none': '0px',
				'r-sm': '8px',
				'r-md': '16px',
				'r-lg': '32px',
				'r-full': '9999px',
			},

			// ─── SPACING ──────────────────────────────────────────────
			// Extends Tailwind's default scale with DESIGN.md tokens
			spacing: {
				xxs: '4px',
				xs: '6px',
				sm: '8px',
				md: '12px',
				lg: '16px',
				xl: '24px',
				xxl: '32px',
				section: '64px',
			},

			// ─── HEIGHT ───────────────────────────────────────────────
			height: {
				nav: '64px',
				'search-bar': '48px',
				input: '44px',
				btn: '40px',
			},

			// ─── MAX WIDTH ────────────────────────────────────────────
			maxWidth: {
				content: '1280px',
				modal: '480px',
			},

			// ─── BOX SHADOW ───────────────────────────────────────────
			// Only shadow in the system: the modal ambient
			boxShadow: {
				modal: '0 16px 48px rgba(0, 0, 0, 0.18)',
				none: 'none',
			},

			// ─── COLUMNS (masonry grid) ────────────────────────────────
			columns: {
				'pin-1': '1',
				'pin-2': '2',
				'pin-3': '3',
				'pin-4': '4',
				'pin-6': '6',
			},
		},
	},
	plugins: [],
};
