import type { ReactRef } from '@srcube-taro/utils-react'
import type { NativeProps } from '@srcube-taro/utils-taro'
import type { ViewProps } from '@tarojs/components'
import type { BoxVariantsProps } from './style'
import { View } from '@tarojs/components'
import { useCallback, useMemo } from 'react'
import { box } from './style'

interface Props {
  ref?: ReactRef<ViewProps>
}

export type UseBoxProps = Props &
  Omit<NativeProps<ViewProps>, keyof BoxVariantsProps> &
  BoxVariantsProps

export function useBox(props: UseBoxProps) {
  const { ref, className, children, ...rest } = props

  const Component = View

  const styles = useMemo(
    () =>
      box({
        className,
      }),
    [className],
  )

  const getBoxProps = useCallback(() => {
    return {
      ref,
      className: styles,
      ...rest,
    }
  }, [styles, ref, rest])

  return {
    Component,
    domRef: ref,
    children,
    getBoxProps,
  }
}

export type UseBoxReturn = ReturnType<typeof useBox>
