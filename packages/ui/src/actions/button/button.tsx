import { type ButtonProps as NativeButtonProps } from '@tarojs/components'
import { forwardRef } from 'react'
import { useButton, UseButtonProps } from './use'
import { Spinner } from '@/effects/spinner'

export interface ButtonProps extends UseButtonProps {}

const Button = forwardRef<NativeButtonProps, ButtonProps>((props, ref) => {
  const {
    Component,
    domRef,
    loading,
    startContent,
    endContent,
    spinner = <Spinner color="current" />,
    spinnerPlacement,
    children,
    getButtonProps,
  } = useButton({
    ...props,
    ref,
  })

  return (
    <Component ref={domRef} {...getButtonProps()}>
      {startContent}
      {loading && spinnerPlacement === 'start' && spinner}
      {children}
      {loading && spinnerPlacement === 'end' && spinner}
      {endContent}
    </Component>
  )
})

Button.displayName = 'Srcube.Button'

export default Button
