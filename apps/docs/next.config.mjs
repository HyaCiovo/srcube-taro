import createMDX from '@next/mdx'

// /** @type {import('rehype-pretty-code').Options} */
// const options = {
//   // See Options section below.
// }

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      ['remark-frontmatter'],
      ['remark-mdx-frontmatter'],
      ['remark-gfm', { singleTilde: false, throwOnError: true }],
    ],
    rehypePlugins: [
      ['@stefanprobst/rehype-extract-toc'],
    ],
  },
})

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    turbo: {
      resolveAlias: {
        '@tarojs/components/lib/react': '@tarojs/components-react/dist',
        '@tarojs/components': '@tarojs/components-react/dist',
      },
      rules: {
        '*.raw.js': {
          loaders: ['raw-loader'],
        },
        '*.raw.jsx': {
          loaders: ['raw-loader'],
        },
        '*.raw.ts': {
          loaders: ['raw-loader'],
        },
        '*.raw.tsx': {
          loaders: ['raw-loader'],
        },
        '*.raw.css': {
          loaders: ['raw-loader'],
          as: '*.js',
        },
      },
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@tarojs/components/lib/react': '@tarojs/components-react/dist',
      '@tarojs/components': '@tarojs/components-react/dist',
    }

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.raw.js$/i,
        use: 'raw-loader',
      },
      {
        test: /\.raw.jsx$/i,
        use: 'raw-loader',
      },
      {
        test: /\.raw.ts$/i,
        use: 'raw-loader',
      },
      {
        test: /\.raw.tsx$/i,
        use: 'raw-loader',
      },
      {
        test: /\.raw.css$/i,
        use: 'raw-loader',
      },
    ]

    return config
  },
}

export default withMDX(config)
