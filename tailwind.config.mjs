/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F4F0E8',
          deep: '#E8E2D6',
          cream: '#FAF6EF',
          warm: '#EDE6DA',
        },
        ink: {
          DEFAULT: '#1A1816',
          soft: '#363230',
          muted: '#5C5752',
          faint: '#8A847C',
        },
        forest: {
          DEFAULT: '#1E3A2F',
          light: '#2D5244',
          deep: '#152921',
        },
        accent: {
          gold: '#C4A574',
          rust: '#A06840',
          cream: '#F0E6D4',
        },
        line: {
          DEFAULT: '#D8D0C4',
          strong: '#B8AEA0',
        },
        column: {
          language: '#4A6278',
          cognition: '#1E3A2F',
          society: '#7A4048',
          education: '#3D5C5C',
          humanities: '#8B5E3C',
          life: '#556B52',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        serif: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '42rem',
        article: '46rem',
        magazine: '72rem',
        narrow: '36rem',
      },
      fontSize: {
        'display-lg': ['3.25rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        display: ['2.5rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        deck: ['1.1875rem', { lineHeight: '1.55' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      backgroundImage: {
        'cover-weave':
          'repeating-linear-gradient(-12deg, transparent, transparent 11px, rgba(255,255,255,0.03) 11px, rgba(255,255,255,0.03) 12px)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
