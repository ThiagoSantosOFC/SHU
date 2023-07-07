/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'azul': {
        '50': '#eff6ff',
        '100': '#dbeafe',
        '200': '#b9d8fd',
        '300': '#94c6fc',
        '400': '#62a7f8',
        '500': '#3d85f4',
        '600': '#2866e8',
        '700': '#1f51d6',
        '800': '#2043ad',
        '900': '#1f3c89',
        '950': '#182653',
    },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
