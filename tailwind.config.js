/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",      // For Expo Router pages
    "./components/**/*.{js,jsx,ts,tsx}", // For shared components
    "./screens/**/*.{js,jsx,ts,tsx}",   // (if using screens directory)
    "./App.{js,jsx,ts,tsx}",            // Root file
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',
        accent: '#AB8BFF',
        light: {
          100: '#D6C6FF',
          200: '#A8B5DB',
          300: '#9CA4AB',
        },
        dark: {
          100: '#221f3d',
          200: '#0f0d23',
        }
      }
    }
  }
};
