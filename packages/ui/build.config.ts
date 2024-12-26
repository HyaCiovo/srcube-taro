import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src',
      outDir: './dist',
    },
  ],
  declaration: true,
  failOnWarn: false,
  rollup: { emitCJS: true },
  hooks: {
    'build:done': async () => {
      const { replaceTscAliasPaths } = await import('tsc-alias')
      await replaceTscAliasPaths({
        configFile: './tsconfig.json',
      })
    },
  },
  externals: [
    'react',
    'react-dom',
    '@tarojs/components',
    '@tarojs/taro',
  ],
})
