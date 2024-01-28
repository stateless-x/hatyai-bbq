import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'mobile': '480px',
      'tablet': '640px',
      'desktop': '1024px',
    },
    colors:{
      'primary-yellow': '#FBB040',
      'nav-text': '#DCDCDC',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        'navbar-gray': 'rgba(61, 61, 61, 0.50)',
      },
      fontFamily: {
        chonburi: ['Chonburi', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
