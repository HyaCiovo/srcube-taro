import type { Config } from 'tailwindcss'
import { SrcubeUI } from '@srcube-taro/ui/plugins'
import { iconsPlugin, dynamicIconsPlugin } from '@egoist/tailwindcss-icons'

export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/@srcube-taro/ui/**/*.{html,cjs,mjs,jsx}',
  ],
  theme: {},
  plugins: [
    SrcubeUI({
      prefix: 'srcube',
      themes: {},
    }),
    iconsPlugin(),
    dynamicIconsPlugin(),
  ],
  corePlugins: {
    preflight: false,
  },
} satisfies Config
