import type { PropsWithChildren } from 'react'
import cn from 'classnames'
import { VirtualAnchor, virtualAnchorEncode } from '../virtual-anchor'

export interface LinkedHeadingProps {
  as: keyof JSX.IntrinsicElements
  id?: string
  linked?: boolean
  className?: string
}

const linkedLevels: Record<string, number> = {
  h1: 0,
  h2: 1,
  h3: 2,
  h4: 3,
}

export function LinkedHeading({ children, ...props }: PropsWithChildren<LinkedHeadingProps>) {
  const { as, id: idProp, linked = true, className, ...rest } = props

  const Component = as

  const level = linkedLevels[as] || 1

  const id = idProp || virtualAnchorEncode(children as string)

  return (
    <Component
      className={cn({ 'linked-heading': linked }, linked ? { 'scroll-mt-24': level > 0 } : className)}
      data-id={id}
      data-level={level}
      data-name={children}
      id={id}
      {...rest}
    >
      {linked ? <VirtualAnchor id={id}>{children}</VirtualAnchor> : <>{children}</>}
    </Component>
  )
}

export function H1(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <LinkedHeading as="h1" linked={false} {...props} />
}

export function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <LinkedHeading as="h2" {...props} />
}

export function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <LinkedHeading as="h3" {...props} />
}

export function H4(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <LinkedHeading as="h4" {...props} />
}
