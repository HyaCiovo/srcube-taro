'use client'

import type { Key } from 'react'
import type { UseCodeSampleProps } from './use-code-sample'
import { Sandpack } from '@/components/sandpack'
import { Tab, Tabs } from '@heroui/react'
import { useState } from 'react'
import { ReactLive } from './react-live-sample'
import { useCodeSample } from './use-code-sample'

type TabKey = 'preview' | 'code'

interface CodeSampleProps extends UseCodeSampleProps {}

function CodeSample(props: CodeSampleProps) {
  const { files, code, noInline } = useCodeSample(props)

  const [current, setCurrent] = useState<TabKey>('preview')

  const handleSelectionChange = (tabKey: Key) => {
    setCurrent(tabKey as TabKey)
  }

  return (
    <Tabs
      selectedKey={current}
      classNames={{
        base: 'group mt-4',
        tabList: 'relative h-10',
      }}
      variant="underlined"
      aria-label="SrcubeUI code sample"
      onSelectionChange={handleSelectionChange}
    >
      <Tab key="preview" title="Preview">
        <div className="p-4 w-full border border-content3 rounded-xl bg-white dark:bg-black">
          <ReactLive code={code} noInline={noInline} />
        </div>
      </Tab>
      <Tab key="code" title="Code">
        <div className="not-prose">
          <Sandpack files={files} />
        </div>
      </Tab>
    </Tabs>
  )
}

CodeSample.displayName = 'CodeSample'

export { CodeSample }
