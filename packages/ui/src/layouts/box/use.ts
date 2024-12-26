import { type NativeProps } from '@/utils/native-props'
import { View, type ViewProps } from '@tarojs/components'
import { ForwardedRef, useCallback, useMemo } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const box = tv({
  base: '',
})

interface Props {
  ref?: ForwardedRef<ViewProps>
}

type BoxVariantsProps = VariantProps<typeof box>

export type UseBoxProps = Props &
  Omit<NativeProps<ViewProps>, keyof BoxVariantsProps> &
  BoxVariantsProps

export const useBox = (props: UseBoxProps) => {
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
