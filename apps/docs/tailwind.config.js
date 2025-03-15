import { dynamicIconsPlugin } from '@egoist/tailwindcss-icons'
import { heroui } from '@heroui/react'
import { srcubeUI } from '@srcube-taro/ui/plugins'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@srcube-taro/**/*.{html,cjs,mjs,jsx}',
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
        codeblock: {
          DEFAULT: '#151515',
          100: '#2d2d2d',
        },
      },
    },
  },
  plugins: [
    heroui(),
    srcubeUI({
      prefix: 'srcube',
    }),
    dynamicIconsPlugin(),
    typography(),
  ],
}
