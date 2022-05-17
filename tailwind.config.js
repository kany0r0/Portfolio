module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        success: '#0070f3',
        cyan: '#79FFE1',
        'portfolio-lime': '#bfff07',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        cursive: ['"Playfair Display"'],
        display: ['Oswald'],
        body: ['Heebo'],
        handwritten: ['"Square peg"'],
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
        '9xl': '8rem',
        '10xl': '9.75rem',
        '11xl': '11.5rem',
        'home-callout': '5.3rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}