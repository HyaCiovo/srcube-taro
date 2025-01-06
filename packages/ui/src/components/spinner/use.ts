import { NativeProps } from '@/utils/native-props'
import { SlotsToClasses } from '@/utils/types'
import { View, type ViewProps } from '@tarojs/components'
import cn from 'classnames'
import { useMemo, type ForwardedRef, type ReactNode } from 'react'
import { type VariantProps } from 'tailwind-variants'
import { spinner, SpinnerSlots } from './style'

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
  /**
   * Class names for slots
   */
  classNames?: SlotsToClasses<SpinnerSlots>
}

export type UseSpinnerProps = Props &
  Omit<NativeProps<ViewProps>, keyof SpinnerVariantProps> &
  SpinnerVariantProps

export const useSpinner = (props: UseSpinnerProps) => {
  const { ref, size, color, label, className, classNames, ...rest } = props

  const slots = useMemo(
    () => spinner({ size, color, className }),
    [size, color, className],
  )

  const styles = useMemo(
    () => ({
      base: cn(slots.base({ class: classNames?.base }), className),
      icon: cn(slots.icon({ class: classNames?.icon })),
      label: cn(slots.label({ class: classNames?.label })),
    }),
    [classNames?.base, classNames?.icon, classNames?.label, className],
  )

  const getSpinnerProps = () => ({
    ...rest,
  })

  return {
    Component: View,
    domRef: ref,
    slots,
    styles,
    label,
    getSpinnerProps,
  }
}

export type UseSpinnerReturn = ReturnType<typeof useSpinner>
