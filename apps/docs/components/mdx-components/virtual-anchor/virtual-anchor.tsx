import type { PropsWithChildren } from 'react'
import Link from 'next/link'

interface VirtualAnchorProps {
  id?: string
}

function VirtualAnchor({ children, ...props }: PropsWithChildren<VirtualAnchorProps>) {
  const { id } = props

  return (
    <Link
      href={`#${id}`}
      className="relative w-fit flex items-center gap-1 group text-inherit no-underline transition-opacity hover:opacity-80"
    >
      {children}
      <i className="i-[ph--hash] text-2xl opacity-0 group-hover:opacity-100" />
    </Link>
  )
}

VirtualAnchor.displayName = 'VirtualAnchor'

export { VirtualAnchor }
