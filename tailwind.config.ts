import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F9E9E9',
          100: '#F4D3D3',
          200: '#E8A7A7',
          300: '#DD7C7B',
          400: '#D1504F',
          500: '#C62423',
          600: '#9E1D1C',
          700: '#771615'
        },
        black: '#2B2325',
        white: '#F0EEE9'
      },
    },
  },
  plugins: [],
};
export default config;
