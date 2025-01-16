// import { Box } from '@srcube-taro/ui'
import { View } from '@tarojs/components'
import { PropsWithChildren, type FC } from 'react'
import { tv } from 'tailwind-variants'

export interface PageProps {
  className?: string
}

const page = tv({
  base: 'py-4 px-3 min-h-screen bg-slate-100',
})

const Page: FC<PropsWithChildren<PageProps>> = (props) => {
  const { children, className } = props

  return <View className={page({ className })}>{children}</View>
}

Page.displayName = 'Sample.Page'

export default Page
