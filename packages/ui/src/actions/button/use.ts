import { NativeProps } from '@/utils/native-props'
import {
  ITouchEvent,
  Button as NativeButton,
  type ButtonProps as NativeButtonProps,
} from '@tarojs/components'
import {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useMemo,
  type ForwardedRef,
} from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'relative inline-flex items-center justify-center',
    'gap-2',
    'font-semibold',
    'transition-all duration-200 ease-out',
    'border border-solid after:border-none',
    'outline-none',
    'shadow-sm',
    'active:scale-95',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  variants: {
    color: {
      default: 'bg-gray-100 border-gray-200 text-gray-700',
      primary: 'bg-primary-500 border-primary-500 text-white',
      secondary: 'bg-secondary-500 border-secondary-500 text-white',
      success: 'bg-success-500 border-success-500 text-white',
      warning: 'bg-warning-500 border-warning-500 text-white',
      danger: 'bg-danger-500 border-danger-500 text-white',
    },
    size: {
      xs: 'h-6 px-2 text-xs rounded-md',
      sm: 'h-8 px-3 text-sm rounded-lg',
      md: 'h-10 px-4 text-base rounded-xl',
      lg: 'h-12 px-6 text-lg rounded-2xl',
    },
    variant: {
      solid: '',
      outline: ['bg-transparent', 'border-4'],
      ghost: ['bg-transparent', 'border-transparent'],
      link: [
        'bg-transparent',
        'border-transparent',
        'shadow-none',
        'underline',
        'hover:opacity-80',
      ],
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
    },
    block: {
      true: 'w-full',
    },
  },
  compoundVariants: [
    {
      variant: 'outline',
      color: 'primary',
      class: 'text-primary-500',
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: 'text-secondary-500',
    },
    {
      variant: 'outline',
      color: 'success',
      class: 'text-success-500',
    },
    {
      variant: 'outline',
      color: 'warning',
      class: 'text-warning-500',
    },
    {
      variant: 'outline',
      color: 'danger',
      class: 'text-danger-500',
    },
    {
      variant: 'ghost',
      color: 'primary',
      class: 'text-primary-500',
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: 'text-secondary-500',
    },
    {
      variant: 'ghost',
      color: 'success',
      class: 'text-success-500',
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: 'text-warning-500',
    },
    {
      variant: 'ghost',
      color: 'danger',
      class: 'text-danger-500',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'default',
    variant: 'solid',
    hoverStyle: 'default',
  },
})

const buttonHover = tv({
  base: '',
  variants: {
    color: {
      default: 'bg-gray-100',
      primary: 'bg-primary-600',
      secondary: 'bg-secondary-600',
      success: 'bg-success-600',
      warning: 'bg-warning-600',
      danger: 'bg-danger-600',
    },
  },
})

type ButtonVariantsProps = VariantProps<typeof button>

interface Props {
  /**
   * Ref to the DOM element
   */
  ref?: ForwardedRef<NativeButtonProps>
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

export type UseButtonProps = PropsWithChildren<
  Props &
    Omit<NativeProps<NativeButtonProps>, keyof ButtonVariantsProps> &
    ButtonVariantsProps
>

export const useButton = (props: UseButtonProps) => {
  const {
    ref,
    variant,
    color,
    size,
    disabled,
    loading,
    block,
    className,
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
    () =>
      button({
        variant,
        color,
        size,
        disabled: disabled || loading,
        block,
        className,
      }),
    [variant, color, size, disabled, loading, block, className],
  )

  const hoverStyles = useMemo(() => buttonHover({ color }), [color])

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
      className: styles,
      hoverClass: hoverStyles,
      disabled: disabled || loading,
      onClick: handleTap,
      ...rest,
    }
  }, [styles, disabled, loading, handleTap])

  return {
    Component,
    domRef: ref,
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
