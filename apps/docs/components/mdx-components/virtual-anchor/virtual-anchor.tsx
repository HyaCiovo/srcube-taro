import type { PropsWithChildren } from 'react'
import Link from 'next/link'

interface VirtualAnchorProps {
  id?: string
}

function VirtualAnchor({ children, ...props }: PropsWithChildren<VirtualAnchorProps>) {
  const { id } = props

  return <Link href={`#${id}`} className="no-underline">{children}</Link>
}

VirtualAnchor.displayName = 'VirtualAnchor'

export { VirtualAnchor }
