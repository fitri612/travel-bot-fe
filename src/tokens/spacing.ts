export const spacing = {
  xxs:     '4px',
  xs:      '6px',
  sm:      '8px',
  md:      '12px',
  lg:      '16px',
  xl:      '24px',
  xxl:     '32px',
  section: '64px',
} as const

export const radius = {
  none: '0px',
  sm:   '8px',
  md:   '16px',
  lg:   '32px',
  full: '9999px',
} as const

export type SpacingToken = keyof typeof spacing
export type RadiusToken  = keyof typeof radius