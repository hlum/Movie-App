/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",      // For Expo Router pages
    "./components/**/*.{js,jsx,ts,tsx}", // For shared components
    "./screens/**/*.{js,jsx,ts,tsx}",   // (if using screens directory)
    "./App.{js,jsx,ts,tsx}",            // Root file
  ],
  presets: [require("nativewind/preset")],
};
