/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'yolo': 'linear-gradient(90deg, #5f64e1, #9a61a9)', 
          'yolo2': 'linear-gradient(90deg, rgba(1, 1, 40, .8), rgba(255, 255, 255, 0))',
          'yolo3': 'linear-gradient(358deg, rgba(1, 1, 40, .85), rgba(255, 255, 255, 0) 28%)',
          'yolo4': 'linear-gradient(270deg, rgba(1, 1, 40, .46), rgba(255, 255, 255, 0))',
          'yolo5' : 'linear-gradient(358deg, #010128 15%, rgba(255, 255, 255, 0))',
          'purpel': '#9a61a9'
      },
    },
  },
  plugins: [],
}
