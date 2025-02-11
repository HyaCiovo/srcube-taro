import type { ConfigArray } from 'typescript-eslint'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const config: ConfigArray = tseslint.config({
  languageOptions: {
    globals: {
      ...globals.node,
      defineAppConfig: 'readonly',
      definePageConfig: 'readonly',
    },
  },
  rules: {
    'no-console': 'off',
    'node/prefer-global/process': 'off',
  },
})

export default config
