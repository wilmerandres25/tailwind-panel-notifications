/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Red': 'hsl(1, 90%, 64%)',
        'Blue': 'hsl(219, 85%, 26%)',
        'White': 'hsl(0, 0%, 100%)',
        'Very-light-greyish-blue': 'hsl(210, 60%, 98%)',
        'Light-greyish-blue-1': 'hsl(211, 68%, 94%)',
        'Light-greyish-blue-2': 'hsl(205, 33%, 90%)',
        'Greyish-blue': 'hsl(219, 14%, 63%)',
        'Dark-greyish-blue': 'hsl(219, 12%, 42%)',
        'Very-dark-blue': 'hsl(224, 21%, 14%)'
      },
      letterSpacing: {
        'light-wide': '5px' /* 9px. 2.5px = 0.15625, 5px = 0.3125 */
      },
      screens: {
        'tablet': '768px'
      },
      fontFamily: {
        'Plus-Jakarta-Sans': ['"Plus Jakarta Sans"']
      }
    },
  },
  plugins: [],
}

