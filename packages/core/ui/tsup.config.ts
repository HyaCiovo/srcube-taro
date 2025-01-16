import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  format: ['esm', 'cjs'],
  clean: true,
  external: [
    'react',
    'react-dom',
    '@srcube-taro/layouts',
    '@srcube-taro/button',
    '@srcube-taro/input',
    '@srcube-taro/spinner',
    '@tarojs/components',
    '@tarojs/taro',
    'tailwind-variants',
  ],
})
