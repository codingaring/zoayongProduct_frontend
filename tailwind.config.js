/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/*.css'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: 'var(--color-green-20)',
          hover: 'var(--color-green-40)',
        },
        secondary: {
          default: 'var(--color-yellow-20',
          hover: 'var(--color-yellow-40',
        },
        /** color variant */
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        gray: {
          150: 'var(--color-gray-150)',
          140: 'var(--color-gray-140)',
          130: 'var(--color-gray-130)',
          120: 'var(--color-gray-120)',
          110: 'var(--color-gray-110)',
          100: 'var(--color-gray-100)',
          90: 'var(--color-gray-90)',
          80: 'var(--color-gray-80)',
          70: 'var(--color-gray-70)',
          60: 'var(--color-gray-60)',
          50: 'var(--color-gray-50)',
          40: 'var(--color-gray-40)',
          30: 'var(--color-gray-30)',
          20: 'var(--color-gray-20)',
          10: 'var(--color-gray-10)',
        },
        w_gray: {
          150: 'var(--color-warm-gray-150)',
          140: 'var(--color-warm-gray-140)',
          130: 'var(--color-warm-gray-130)',
          120: 'var(--color-warm-gray-120)',
          110: 'var(--color-warm-gray-110)',
          100: 'var(--color-warm-gray-100)',
          90: 'var(--color-warm-gray-90)',
          80: 'var(--color-warm-gray-80)',
          70: 'var(--color-warm-gray-70)',
          60: 'var(--color-warm-gray-60)',
          50: 'var(--color-warm-gray-50)',
          40: 'var(--color-warm-gray-40)',
          30: 'var(--color-warm-gray-30)',
          20: 'var(--color-warm-gray-20)',
          10: 'var(--color-warm-gray-10)',
        },
        yellow: {
          120: 'var(--color-yellow-120)',
          110: 'var(--color-yellow-110)',
          100: 'var(--color-yellow-100)',
          90: 'var(--color-yellow-90)',
          80: 'var(--color-yellow-80)',
          70: 'var(--color-yellow-70)',
          60: 'var(--color-yellow-60)',
          50: 'var(--color-yellow-50)',
          40: 'var(--color-yellow-40)',
          30: 'var(--color-yellow-30)',
          20: 'var(--color-yellow-20)',
          10: 'var(--color-yellow-10)',
        },
        red: {
          120: 'var(--color-red-120)',
          110: 'var(--color-red-110)',
          100: 'var(--color-red-100)',
          90: 'var(--color-red-90)',
          80: 'var(--color-red-80)',
          70: 'var(--color-red-70)',
          60: 'var(--color-red-60)',
          50: 'var(--color-red-50)',
          40: 'var(--color-red-40)',
          30: 'var(--color-red-30)',
          20: 'var(--color-red-20)',
          10: 'var(--color-red-10)',
        },
        blue: {
          120: 'var(--color-blue-120)',
          110: 'var(--color-blue-110)',
          100: 'var(--color-blue-100)',
          90: 'var(--color-blue-90)',
          80: 'var(--color-blue-80)',
          70: 'var(--color-blue-70)',
          60: 'var(--color-blue-60)',
          50: 'var(--color-blue-50)',
          40: 'var(--color-blue-40)',
          30: 'var(--color-blue-30)',
          20: 'var(--color-blue-20)',
          10: 'var(--color-blue-10)',
        },
        green: {
          120: 'var(--color-green-120)',
          110: 'var(--color-green-110)',
          100: 'var(--color-green-100)',
          90: 'var(--color-green-90)',
          80: 'var(--color-green-80)',
          70: 'var(--color-green-70)',
          60: 'var(--color-green-60)',
          50: 'var(--color-green-50)',
          40: 'var(--color-green-40)',
          30: 'var(--color-green-30)',
          20: 'var(--color-green-20)',
          10: 'var(--color-green-10)',
        },
      },
    },
  },
  plugins: [],
};
