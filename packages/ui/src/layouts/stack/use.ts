import { type NativeProps } from '@/utils/native-props'
import { View, type ViewProps } from '@tarojs/components'
import { ForwardedRef, useCallback, useMemo } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const stack = tv({
  base: 'flex',
  variants: {
    direction: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    spacing: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-3',
      lg: 'gap-5',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
    spacing: 'md',
    align: 'stretch',
    justify: 'start',
  },
})

interface Props {
  ref?: ForwardedRef<ViewProps>
  direction?: 'horizontal' | 'vertical'
  spacing?: 'xs' | 'sm' | 'md' | 'lg'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
}

type StackVariantsProps = VariantProps<typeof stack>

export type UseStackProps = Props &
  Omit<NativeProps<ViewProps>, keyof StackVariantsProps> &
  StackVariantsProps

export const useStack = (props: UseStackProps) => {
  const {
    ref,
    className,
    children,
    direction,
    spacing,
    align,
    justify,
    ...rest
  } = props

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
