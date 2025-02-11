import antfu from '@antfu/eslint-config'
import taroApp from '@srcube-taro/eslint-config/taro-app'

export default antfu(
  {
    react: true,
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      }],
    },
  },
  taroApp,
)
