import type { ButtonVariantProps } from '@srcube-taro/theme'
import type { ReactRef } from '@srcube-taro/utils-react'
import type { NativeProps } from '@srcube-taro/utils-taro'
import type { ITouchEvent, ButtonProps as NativeButtonProps } from '@tarojs/components'
import type { ReactNode } from 'react'
import { button, buttonHover } from '@srcube-taro/theme'
import { Button as NativeButton } from '@tarojs/components'
import { useCallback, useMemo } from 'react'

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
    [variant, color, size, disabled, loading, block, className, hoverClass],
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
      if (disabled || loading)
        return

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
  }, [disabled, loading, rest, handleTap])

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
