import type { Config } from 'tailwindcss'
import { dynamicIconsPlugin } from '@egoist/tailwindcss-icons'
import { srcubeUI } from '@srcube-taro/ui/plugins'
import colors from 'tailwindcss/colors'

export default {
  content: [
    '../../node_modules/@srcube-taro/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        warning: colors.amber,
        success: colors.emerald,
        danger: colors.rose,
      },
    },
  },
  plugins: [
    srcubeUI({
      prefix: 'srcube',
    }),
    dynamicIconsPlugin(),
  ],
  corePlugins: {
    preflight: false,
  },
} satisfies Config
