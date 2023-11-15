import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#312F2A',
        secondary: '#D7D5CD',
        accent: '#FF4C6C',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },

        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },

      animation: {
        // animateY: 'animateY 3s ease-in-out infinite',
        // rotateShip: 'rotateShip 2s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        shipAnimation:
          'animateY 3s ease-in-out infinite, rotateShip 2s linear infinite',
        lineMovement: 'moveLine 2s linear infinite',
        moveArrow: 'arrowY 1.5s infinite',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        moveLine: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-100vw)',
          },
        },
        rotateShip: {
          from: { transform: 'rotate(0)' },
          '33%': {
            transform: 'rotate(-2deg)',
          },
          '66%': {
            transform: 'rotate(2deg)',
          },
          to: { transform: 'rotate(0)' },
        },
        animateY: {
          from: { transform: 'translateY(0)' },
          '65%': {
            transform: 'translateY(30px)',
          },
          to: {
            transform: 'translateY(0px)',
          },
        },
        arrowY: {
          from: {
            transform: 'translatY(0)',
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          to: {
            transform: 'translateY(20px)',
            opacity: '0',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-antonio)'],
        mono: ['var(--font-vt323)'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    plugins: [require('tailwindcss-animate')],
  },
};
export default config;
