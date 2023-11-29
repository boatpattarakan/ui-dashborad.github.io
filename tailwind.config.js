/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '450px',
      sm: '576px',
      md: '768px',
      lg: '990px',
      xl: '1400px',
    },
    extend: {
      container: {
        padding: {
          DEFAULT: '2rem',
        },
      },
    },
  },
  plugins: [],
}
