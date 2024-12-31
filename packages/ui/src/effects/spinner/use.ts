import { tv, type VariantProps } from 'tailwind-variants'
import { NativeProps } from '@/utils/native-props'
import { View, type ViewProps } from '@tarojs/components'
import { useMemo, type ReactNode, type ForwardedRef } from 'react'

const spinner = tv({
  base: 'inline-flex items-center justify-center',
  variants: {
    size: {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12',
    },
    color: {
      current: 'text-current',
      white: 'text-white',
      default: 'text-gray-400',
      primary: 'text-primary-500',
      secondary: 'text-secondary-500',
      success: 'text-success-500',
      warning: 'text-warning-500',
      danger: 'text-danger-500',
    },
    labelPlacement: {
      top: 'flex-col-reverse',
      right: 'flex-row',
      bottom: 'flex-col',
      left: 'flex-row-reverse',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
    labelPlacement: 'right',
  },
})

type SpinnerVariantProps = VariantProps<typeof spinner>

interface Props {
  /**
   * Ref to the DOM element
   */
  ref?: ForwardedRef<ViewProps>
  /**
   * Label to display next to the spinner
   */
  label?: ReactNode
}

export type UseSpinnerProps = Props &
  Omit<NativeProps<ViewProps>, keyof SpinnerVariantProps> &
  SpinnerVariantProps

export const useSpinner = (props: UseSpinnerProps) => {
  const { ref, size, color, label, className, ...rest } = props

  const styles = useMemo(
    () => spinner({ size, color, className }),
    [size, color, className],
  )

  const getSpinnerProps = () => ({
    className: styles,
    ...rest,
  })

  return {
    Component: View,
    domRef: ref,
    label,
    getSpinnerProps,
  }
}

export type UseSpinnerReturn = ReturnType<typeof useSpinner>
