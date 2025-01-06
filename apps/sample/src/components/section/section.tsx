import { Box } from '@srcube-taro/ui'
import cn from 'classnames'
import { PropsWithChildren, type FC } from 'react'

export interface SectionProps {
  title: string
  contentClass?: string
}

const Section: FC<PropsWithChildren<SectionProps>> = (props) => {
  const { title, children, contentClass } = props

  return (
    <Box className="flex flex-col gap-2 mx-4 rounded-lg">
      <Box className="flex items-center px-2 text-xs font-bold">{title}</Box>
      <Box className={cn(contentClass)}>{children}</Box>
    </Box>
  )
}

Section.displayName = 'Sample.Section'

export default Section
