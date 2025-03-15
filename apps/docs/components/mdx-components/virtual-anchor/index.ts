export { VirtualAnchor } from './virtual-anchor'

export function virtualAnchorEncode(text?: string) {
  if (!text)
    return undefined

  return text.toLowerCase().replace(/ /g, '-')
}
