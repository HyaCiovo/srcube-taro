import type { Config } from 'tailwindcss'
import { SrcubeUI } from '@srcube-taro/ui/plugins'
import { iconsPlugin, dynamicIconsPlugin } from '@egoist/tailwindcss-icons'
import colors from 'tailwindcss/colors'

export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/@srcube-taro/ui/**/*.{html,cjs,mjs,jsx}',
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
    iconsPlugin(),
    dynamicIconsPlugin(),
  ],
  corePlugins: {
    preflight: false,
  },
} satisfies Config
