/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
    animation: {
      'spin-slow': 'spin 20s linear infinite',
    },
    colors: {
      mint: '#8FE3CF',
      coral: '#FF9E9E',
      skysoft: '#A3D5FF',
    },
  },
};
export const plugins = [require('@tailwindcss/aspect-ratio')];
