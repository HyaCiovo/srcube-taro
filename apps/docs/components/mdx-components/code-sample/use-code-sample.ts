import type { SandpackProps } from '@codesandbox/sandpack-react'
// import type { FileCode } from './types'
import { scope } from './react-live-sample'
import { transformCode } from './utils'

export interface UseCodeSampleProps extends SandpackProps {
  code?: string
}

export function useCodeSample(props: UseCodeSampleProps) {
  const { code: inputCode, files: inputFiles } = props

  let code = inputCode?.trim()
  let noInline = false

  const files = (inputFiles || {})

  // let filesCode: FileCode[] = []

  // Transform scope to key text value
  const scopeKeys = Object.keys(scope)
  // Convert scopeKeys to key text value
  const scopeValues = scopeKeys.map(key => ({ [key]: `${key}` }))

  const imports = Object.assign({}, ...scopeValues)

  // If single file
  if (Object.keys(files).length === 1) {
    // get first item from files
    const file = Object.values(files)[0] as string

    code = transformCode(file, imports)
  }

  noInline = code!.includes('render')

  return {
    files,
    code,
    noInline,
  }
}
