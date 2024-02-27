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
        'artikkeli': "url('./images/Artikkelit.jpg')",
        'trendi': "url('./images/Ruokatrendit.jpg')",
        'hävikki': "url('./images/Hävikki.jpg')",
        'pasta': "url('./images/Pasta.jpg')",
        'pastaa': "url('./images/Pastaa.jpg')",
        'albumi': "url('./images/albumi.jpg')",
        'carbonara': "url('./images/carbonara.jpg')",
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
};
