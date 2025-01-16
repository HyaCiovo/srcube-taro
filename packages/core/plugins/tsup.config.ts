import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  format: ['esm', 'cjs'],
  clean: true,
  external: [
    'react',
    'react-dom',
    '@tarojs/components',
    '@tarojs/taro',
    'tailwind-variants',
  ],
})
