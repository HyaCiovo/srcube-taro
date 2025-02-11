import NextImage from 'next/image'

import { Code } from './components/code'
import { H1, H2, H3, H4 } from './components/heading'
import { PackageInstall } from './components/package-install'
import { APITable } from './components/table'
import { Strong } from './components/text'

const MDXComponents = {
  /**
   * Next.js components
   */
  Image: NextImage,
  /**
   * Docs components
   */
  PackageInstall,
  /**
   * Markdown components
   */
  // ...Icons,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  code: Code,
  strong: Strong,
  // table: Table,
  // thead: THead,
  // tr: TRow,
  // td: TCell,
  APITable,
}

export default MDXComponents
