import { ReactRef } from '@srcube-taro/utils-react'
import { NativeProps } from '@srcube-taro/utils-taro'
import { SlotsToClasses } from '@srcube-taro/utils-tv'
import { View, type ViewProps } from '@tarojs/components'
import cn from 'classnames'
import { useMemo, type ReactNode } from 'react'
import { spinner, SpinnerSlots, SpinnerVariantProps } from './style'

interface Props {
  /**
   * Ref to the DOM element
   */
  ref?: ReactRef<ViewProps>
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

  const Component = View

  const slots = useMemo(
    () => spinner({ size, color, className }),
    [size, color, className],
  )

  const styles = useMemo(
    () => ({
      wrapper: cn(slots.wrapper({ class: classNames?.wrapper }), className),
      icon: cn(slots.icon({ class: classNames?.icon })),
      label: cn(slots.label({ class: classNames?.label })),
    }),
    [className, classNames],
  )

  const getSpinnerProps = () => ({
    ...rest,
  })

  return {
    Component,
    domRef: ref,
    slots,
    styles,
    label,
    getSpinnerProps,
  }
}

export type UseSpinnerReturn = ReturnType<typeof useSpinner>
