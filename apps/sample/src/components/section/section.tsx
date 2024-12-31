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
    <Box className="flex flex-col mx-4 rounded-lg border border-gray-200">
      <Box className="flex items-center justify-center text-base font-medium">
        {title}
      </Box>
      <Box className={cn('p-4', contentClass)}>{children}</Box>
    </Box>
  )
}

Section.displayName = 'Sample.Section'

export default Section
