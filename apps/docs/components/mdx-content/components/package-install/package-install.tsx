'use client'

import type { Key } from 'react'
import { Tab, Tabs } from '@heroui/react'
import { useState } from 'react'

type PackageManagerName = 'npm' | 'yarn' | 'pnpm'

const packageManagers: Array<{ name: PackageManagerName, icon: JSX.Element }> = [
  { name: 'npm', icon: <i className="i-[devicon--npm]" /> },
  { name: 'yarn', icon: <i className="i-[devicon--yarn]" /> },
  { name: 'pnpm', icon: <i className="i-[devicon--pnpm]" /> },
]

export interface PackageInstallProps {
  commands: Partial<Record<PackageManagerName, React.Key>>
}

export function PackageInstall(props: PackageInstallProps) {
  const { commands } = props

  const [current, setCurrent] = useState<PackageManagerName>('npm')

  const handleSelectionChange = (tabKey: Key) => {
    setCurrent(tabKey as PackageManagerName)
  }

  return (
    <>
      <Tabs
        aria-label="HeroUI installation commands"
        classNames={{
          base: 'group mt-4 min-w-[300px] w-full overflow-x-auto',
          tabList: 'h-10',
        }}
        selectedKey={current}
        variant="underlined"
        onSelectionChange={handleSelectionChange}
      >
        {packageManagers.map(({ name, icon }) => (
          <Tab
            key={name}
            title={(
              <div className="flex items-center space-x-2">
                {icon}
                <span>{name}</span>
              </div>
            )}
          >
            {commands[name]}
          </Tab>
        ))}
      </Tabs>
    </>
  )
}
