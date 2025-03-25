import { dynamicIconsPlugin } from '@egoist/tailwindcss-icons'
import { heroui } from '@heroui/react'
import { srcubeUI } from '@srcube-taro/ui/plugins'
import typography from '@tailwindcss/typography'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@srcube-taro/theme/dist/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './samples/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.blue[500],
          ...colors.blue,
        },
        codeblock: {
          DEFAULT: '#151515',
          100: '#2d2d2d',
        },
      },
    },
  },
  plugins: [
    heroui(),
    srcubeUI(),
    dynamicIconsPlugin(),
    typography(),
  ],
}
