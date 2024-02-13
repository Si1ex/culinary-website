/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'pack-train': "url('./images/Taustakuva.jpg')",
      },
    },
    backdropBlur: {
      'none': '0',
      'sm': '4px',
      'md': '8px',
      'lg': '12px',
      'xl': '16px',
      '2xl': '24px',
    },
  },
}
