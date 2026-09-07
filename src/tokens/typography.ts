export const typography = {
	displayXl: { fontSize: '70px', fontWeight: '600', lineHeight: 1.1, letterSpacing: '-1.2px' },
	displayLg: { fontSize: '44px', fontWeight: '700', lineHeight: 1.15, letterSpacing: '-0.8px' },
	headingXl: { fontSize: '28px', fontWeight: '700', lineHeight: 1.2, letterSpacing: '-1.2px' },
	headingLg: { fontSize: '22px', fontWeight: '600', lineHeight: 1.25, letterSpacing: '0' },
	headingMd: { fontSize: '18px', fontWeight: '600', lineHeight: 1.3, letterSpacing: '0' },
	bodyMd: { fontSize: '16px', fontWeight: '400', lineHeight: 1.4, letterSpacing: '0' },
	bodyStrong: { fontSize: '16px', fontWeight: '600', lineHeight: 1.4, letterSpacing: '0' },
	bodySm: { fontSize: '14px', fontWeight: '400', lineHeight: 1.4, letterSpacing: '0' },
	bodySmStrong: { fontSize: '14px', fontWeight: '700', lineHeight: 1.4, letterSpacing: '0' },
	captionMd: { fontSize: '12px', fontWeight: '500', lineHeight: 1.5, letterSpacing: '0' },
	captionSm: { fontSize: '12px', fontWeight: '400', lineHeight: 1.4, letterSpacing: '0' },
	linkMd: { fontSize: '16px', fontWeight: '600', lineHeight: 1.4, letterSpacing: '0' },
	buttonMd: { fontSize: '14px', fontWeight: '700', lineHeight: 1, letterSpacing: '0' },
	buttonSm: { fontSize: '12px', fontWeight: '700', lineHeight: 1, letterSpacing: '0' },
} as const;

export type TypographyToken = keyof typeof typography;
