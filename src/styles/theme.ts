export const theme = {
  colors: {
    black: '#0A0B0E',
    white: '#F5F6F8',
    brand: {
      primary: '#6366F1',
      primaryDark: '#4338CA',
      primaryLight: '#A5B4FC',
    },
    gray: {
      light: '#D1D5DB',
      medium: '#6B7280',
      dark: '#1F242D',
    },
    toast: {
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B',
      info: '#3B82F6',
    },
  },
  fonts: {
    display: "'Syne', sans-serif",
    sans: "'Plus Jakarta Sans', sans-serif",
    serif: "'Instrument Serif', serif",
    mono: "'JetBrains Mono', monospace",
    chaotic: "'Comic Sans MS', 'Comic Sans', 'Comic Neue', cursive",
  },
} as const;

export type ThemeType = typeof theme;