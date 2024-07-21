// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 7s infinite', // Adjust the animation duration and type as per your preference
      },
    },
  },
  plugins: [],
};
