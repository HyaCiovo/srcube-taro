import type { PropsWithChildren } from 'react'
import cn from 'classnames'
import { linkedLevels } from '.'

export interface LinkedHeadingProps {
  as: keyof JSX.IntrinsicElements
  id?: string
  linked?: boolean
  className?: string
}

export function LinkedHeading({ children, ...props }: PropsWithChildren<LinkedHeadingProps>) {
  const { as, id: idProp, linked = true, className, ...rest } = props

  const Component = as

  const level = linkedLevels[as] || 1

  const id = idProp

  return (
    <Component
      className={cn({ 'linked-heading': linked }, linked ? {} : className)}
      data-id={id}
      data-level={level}
      data-name={children}
      id={id}
      {...rest}
    >
      {/* {linked ? (
        <VirtualAnchor id={id}>{props.children}</VirtualAnchor>
      ) : ( */}
      <>{children}</>
      {/* )} */}
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
