import type { PropsWithChildren } from 'react'
import cn from 'classnames'

export type InlineCodeProps = PropsWithChildren<{
  className?: string
}>

export function InlineCode({ children, className }: InlineCodeProps) {
  return (
    <code className={cn('bg-default-200 dark:bg-default-800 px-1 rounded-md text-sm', className)}>
      {children}
    </code>
  )
}

export type InlineCodeChipProps = PropsWithChildren<{
  className?: string
}>

export function InlineCodeChip({ children, className }: InlineCodeChipProps) {
  return (
    <InlineCode
      className={cn(
        'before:hidden after:hidden text-tiny rounded-md text-default-600 bg-default-100 dark:bg-default-100/80 px-1.5 py-0.5',
        className,
      )}
    >
      {children}
    </InlineCode>
  )
}

export type CodeProps = PropsWithChildren<{
  className?: string
}>

export function Code({ children, className }: CodeProps) {
  return (
    <code
      className={cn(
        'inline-block px-1 py-0.5 bg-black/10 dark:bg-white/10 rounded-md text-xs text-gray-500 dark:text-gray-400 font-thin before:hidden after:hidden',
        className,
      )}
    >
      {children}
    </code>
  )
}
