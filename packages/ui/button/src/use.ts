import { type NativeProps } from '@srcube-taro/utils-taro'
import { type ReactRef } from '@srcube-taro/utils-react'
import {
  Button as NativeButton,
  type ITouchEvent,
  type ButtonProps as NativeButtonProps,
} from '@tarojs/components'
import { ReactNode, useCallback, useMemo } from 'react'
import { button, buttonHover, ButtonVariantProps } from './style'

interface Props {
  /**
   * Ref to the DOM element
   */
  ref?: ReactRef<NativeButtonProps>
  /**
   * Content to render before the button text
   */
  startContent?: ReactNode
  /**
   * Content to render after the button text
   */
  endContent?: ReactNode
  /**
   * Spinner to render
   */
  spinner?: ReactNode
  /**
   * Placement of the spinner
   * @default 'start'
   */
  spinnerPlacement?: 'start' | 'end'
}

export type UseButtonProps = Props &
  Omit<NativeProps<NativeButtonProps>, keyof ButtonVariantProps> &
  ButtonVariantProps

export function useButton(props: UseButtonProps) {
  const {
    ref,
    variant,
    color,
    size,
    disabled,
    loading,
    block,
    className,
    hoverClass,
    startContent,
    spinner,
    spinnerPlacement = 'start',
    endContent,
    children,
    onTap,
    ...rest
  } = props

  const Component = NativeButton

  const styles = useMemo(
    () => ({
      normal: button({
        variant,
        color,
        size,
        disabled: disabled || loading,
        block,
        className,
      }),
      hover: buttonHover({
        variant,
        color,
        className: hoverClass,
      }),
    }),
    [variant, color, size, disabled, loading, block, className],
  )

  const renderPlacedContent = useMemo(
    () => (placement: 'start' | 'end') => {
      if (loading && spinner && spinnerPlacement === placement) {
        return spinner
      }

      return placement === 'start' ? startContent : endContent
    },
    [loading, spinner, startContent, endContent, spinnerPlacement],
  )

  const handleTap = useCallback(
    (event: ITouchEvent) => {
      if (disabled || loading) return

      if (onTap) {
        onTap(event)
      }
    },
    [disabled, loading, onTap],
  )

  const getButtonProps = useCallback(() => {
    return {
      disabled: disabled || loading,
      onClick: handleTap,
      ...rest,
    }
  }, [styles, disabled, loading, handleTap])

  return {
    Component,
    domRef: ref,
    styles,
    startContent: renderPlacedContent('start'),
    endContent: renderPlacedContent('end'),
    spinner,
    spinnerPlacement,
    children,
    loading,
    getButtonProps,
  }
}

export type UseButtonReturn = ReturnType<typeof useButton>
