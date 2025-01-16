import { ReactRef } from '@srcube-taro/utils-react'
import { type NativeProps } from '@srcube-taro/utils-taro'
import { View, type ViewProps } from '@tarojs/components'
import { useCallback, useMemo } from 'react'
import { box, type BoxVariantsProps } from './style'

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
      className: styles,
      ...rest,
    }
  }, [styles, ref])

  return {
    Component,
    domRef: ref,
    children,
    getBoxProps,
  }
}

export type UseBoxReturn = ReturnType<typeof useBox>
