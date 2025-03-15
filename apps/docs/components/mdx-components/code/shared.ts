import type { JSX } from 'react'
import type { BundledLanguage } from 'shiki/bundle/web'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki/bundle/web'

async function codeblock(code: string, lang: BundledLanguage = 'bash') {
  const out = await codeToHast(code, {
    lang,
    theme: 'catppuccin-mocha',
    colorReplacements: {
      // background to transparent
      '#1e1e2e': 'transparent',
    },
  })

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
  }) as JSX.Element
}

export const highlights = {
  codeblock,
}
