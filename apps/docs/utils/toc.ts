import type { Toc } from '@stefanprobst/rehype-extract-toc'

type Heading = Omit<Toc[number], 'children'>

export function flattenToc(toc?: Toc) {
  if (!toc)
    return []

  return toc.reduce((acc, item) => {
    const { children, ...rest } = item

    acc.push(rest)

    if (children) {
      acc.push(...flattenToc(children))
    }
    return acc
  }, [] as Heading[])
}
