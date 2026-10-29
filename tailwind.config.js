/** Token dari design.md v1.0 — jangan menambah hex baru di luar berkas ini + app/globals.css. */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.ts'],
  theme: {
    extend: {
      colors: {
        teal: {
          900: '#0B3B38',
          800: '#124A46',
          700: '#17605A',
          600: '#1E756D',
          300: '#8FC4BC',
          100: '#E3F0ED',
          50: '#F0F7F5',
        },
        gold: {
          700: '#6B5212',
          600: '#8F702B',
          500: '#B08E3F',
          300: '#D8BE84',
          100: '#F7EEDC',
        },
        coral: {
          700: '#A83E28',
          600: '#C24A2E',
          500: '#D9603F',
          100: '#FBE7E0',
        },
        plum: {
          700: '#5C3350',
          600: '#7A3E63',
          500: '#96527C',
          100: '#F5E7EF',
        },
        olive: {
          700: '#3F5A33',
          600: '#55733F',
          500: '#6E8B53',
          100: '#EDF3E6',
        },
        sky: {
          700: '#1F5673',
          600: '#2C6E8F',
          500: '#3E88A8',
          100: '#E9F3F7',
        },
        sun: {
          500: '#EFA92F',
          100: '#FDF1D6',
        },
        cream: {
          50: '#FEFBF6',
          100: '#FBF3E7',
          200: '#F5E7D3',
        },
        ink: {
          DEFAULT: '#231F1A',
          soft: '#6C655C',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'ui-rounded', '"Trebuchet MS"', 'system-ui', 'sans-serif'],
        sans: ['"Nunito Sans"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        panel: '32px',
        card: '24px',
        field: '12px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(35,31,26,.05), 0 16px 32px -20px rgba(35,31,26,.18)',
        lift: '0 2px 4px rgba(35,31,26,.06), 0 24px 48px -24px rgba(35,31,26,.24)',
      },
      maxWidth: {
        container: '1200px',
        form: '720px',
      },
      transitionTimingFunction: {
        warm: 'cubic-bezier(0.2, 0.6, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
