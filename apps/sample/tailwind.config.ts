import type { Config } from 'tailwindcss'
import { dynamicIconsPlugin } from '@egoist/tailwindcss-icons'
import { SrcubeUI } from '@srcube-taro/ui/plugins'
import colors from 'tailwindcss/colors'

export default {
  content: [
    '../../node_modules/@srcube-taro/**/*.{html,cjs,mjs,jsx}',
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
    SrcubeUI({
      prefix: 'srcube',
    }),
    dynamicIconsPlugin(),
  ],
  corePlugins: {
    preflight: false,
  },
} satisfies Config
