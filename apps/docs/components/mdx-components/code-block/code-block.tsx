import { Skeleton } from '@heroui/react'
import { useLayoutEffect, useState } from 'react'
import { highlights } from '../code/shared'

interface CodeBlockProps {
  code: string
  initial?: JSX.Element
}

function CodeBlock(props: CodeBlockProps) {
  const { code, initial } = props

  const [nodes, setNodes] = useState(initial)

  useLayoutEffect(() => {
    void highlights.codeblock(code, 'tsx').then(setNodes)
  }, [code])

  if (!nodes) {
    return (
      <Skeleton classNames={{ base: 'dark max-h-[inherit] min-h-[200px] m-2 h-full rounded-lg', content: 'h-full' }} />
    )
  }

  return <div className="px-3 py-1 w-full text-sm border-box">{nodes}</div>
}

CodeBlock.displayName = 'CodeBlock'

export { CodeBlock }
