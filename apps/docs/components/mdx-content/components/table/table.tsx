'use client'

import type { PropsWithChildren } from 'react'
import {
  Code,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from '@heroui/react'
import cn from 'classnames'
import { nanoid } from 'nanoid'

export { Table }

export function THead({ children }: PropsWithChildren) {
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

export function TRow({ children }: PropsWithChildren) {
  return <tr>{children}</tr>
}

export function TCell({ children }: PropsWithChildren) {
  return (
    <td className="text-sm p-2 max-w-[200px] overflow-auto whitespace-normal break-normal">
      {children}
    </td>
  )
}

export interface APITableProps {
  data: {
    attribute: string
    type: string
    description: string
    deprecated?: boolean
    default?: string
  }[]
}

export function APITable({ data }: APITableProps) {
  return (
    <Table aria-label="API table" removeWrapper className="not-prose">
      <TableHeader>
        <TableColumn width={200}>Props</TableColumn>
        <TableColumn>Type</TableColumn>
        <TableColumn>Default</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map(item => (
          <TableRow key={nanoid()}>
            <TableCell className="flex items-center gap-2">
              <Code size="sm" className="text-xs text-default-600">
                {item.attribute}
              </Code>
              <Tooltip content={item.description}>
                <i className="i-[ci--info] text-base text-default-400" />
              </Tooltip>
            </TableCell>
            <TableCell>
              <Code size="sm" className="text-xs">
                {item.type}
              </Code>
            </TableCell>
            <TableCell>
              <Code size="sm" className="text-xs">
                {item.default}
              </Code>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
