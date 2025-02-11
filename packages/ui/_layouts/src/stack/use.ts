import type { ReactRef } from '@srcube-taro/utils-react'
import type { NativeProps } from '@srcube-taro/utils-taro'
import type { ViewProps } from '@tarojs/components'
import type { StackVariantsProps } from './style'
import { View } from '@tarojs/components'
import { useCallback, useMemo } from 'react'
import { stack } from './style'

interface Props {
  ref?: ReactRef<ViewProps>
  direction?: 'horizontal' | 'vertical'
  spacing?: 'xs' | 'sm' | 'md' | 'lg'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
}

export type UseStackProps = Props &
  Omit<NativeProps<ViewProps>, keyof StackVariantsProps> &
  StackVariantsProps

export function useStack(props: UseStackProps) {
  const { ref, className, children, direction, spacing, align, justify, ...rest } = props

  const Component = View

  const styles = useMemo(
    () =>
      stack({
        direction,
        spacing,
        align,
        justify,
        className,
      }),
    [direction, spacing, align, justify, className],
  )

  const getStackProps = useCallback(() => {
    return {
      className: styles,
      ...rest,
    }
  }, [styles, rest])

  return {
    Component,
    domRef: ref,
    children,
    getStackProps,
  }
}
