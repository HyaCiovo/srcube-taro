import cn from 'classnames'
import NextImage from 'next/image'
import { type PropsWithChildren } from 'react'

function Table({ children }: PropsWithChildren) {
  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <table className="border-collapse border-spacing-0 w-full">
        {children}
      </table>
    </div>
  )
}

function THead({ children }: PropsWithChildren) {
  return (
    <thead
      className={cn(
        '[&>tr]:h-12',
        '[&>tr>th]:py-0',
        '[&>tr>th]:align-middle',
        '[&>tr>th]:bg-default-400/20',
        'dark:[&>tr>th]:bg-default-600/10',
        '[&>tr>th]:text-default-600 [&>tr>th]:text-xs',
        '[&>tr>th]:text-left [&>tr>th]:pl-2',
        '[&>tr>th:first-child]:rounded-l-lg',
        '[&>tr>th:last-child]:rounded-r-lg',
      )}
    >
      {children}
    </thead>
  )
}

function TRow({ children }: PropsWithChildren) {
  return <tr>{children}</tr>
}

function TCell({ children }: PropsWithChildren) {
  return (
    <td className="text-sm p-2 max-w-[200px] overflow-auto whitespace-normal break-normal">
      {children}
    </td>
  )
}

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

function LinkedHeading({
  children,
  ...props
}: PropsWithChildren<LinkedHeadingProps>) {
  const { as, id: idProp, linked = true, className, ...rest } = props

  const Component = as

  const level = linkedLevels[as] || 1

  let id = idProp

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

function List({ children }: PropsWithChildren) {
  return (
    <ul className="list-disc flex flex-col gap-2 ml-4 mt-2 [&>li>strong]:text-pink-500 dark:[&>li>strong]:text-cyan-600">
      {children}
    </ul>
  )
}

// function InlineCode({ children }: PropsWithChildren) {
//   return (
//     <code className="bg-default-200 dark:bg-default-800 px-1 rounded-md text-sm">
//       {children}
//     </code>
//   )
// }

// function Code({
//   children,
//   ...props
// }: PropsWithChildren<{ className?: string; meta?: string }>) {
//   const { className, meta } = props

//   const isMultiLine = (children as string)?.split?.('\n')?.length > 2

//   const language = (className?.replace(/language-/, '') ?? 'jsx') as Language
//   const codeString = String(children).trim()

//   if (!className) {
//     return <InlineCode>{children}</InlineCode>
//   }

//   return (
//     <code className="bg-default-200 dark:bg-default-800 px-1 rounded-md text-sm">
//       {children}
//     </code>
//   )
// }

const MDXComponents = {
  /**
   * Next.js components
   */
  Image: NextImage,
  /**
   * MDX components
   */
  Table,
  THead,
  TRow,
  TCell,
  LinkedHeading,
  List,
  /**
   * Markdown components
   */
  // ...Icons,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <LinkedHeading as="h1" linked={false} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <LinkedHeading as="h2" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <LinkedHeading as="h3" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <LinkedHeading as="h4" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-medium" {...props} />
  ),
  table: Table,
  thead: THead,
  tr: TRow,
  td: TCell,
}

export default MDXComponents
