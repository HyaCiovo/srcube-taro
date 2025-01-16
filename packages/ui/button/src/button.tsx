import { Spinner } from '@srcube-taro/spinner'
import { type ButtonProps as NativeButtonProps } from '@tarojs/components'
import { forwardRef } from 'react'
import { useButton, UseButtonProps } from './use'

export interface ButtonProps extends UseButtonProps {}

const Button = forwardRef<NativeButtonProps, ButtonProps>((props, ref) => {
  const {
    Component,
    domRef,
    styles,
    loading,
    startContent,
    endContent,
    spinner = <Spinner />,
    spinnerPlacement,
    children,
    getButtonProps,
  } = useButton({
    ...props,
    ref,
  })

  return (
    <Component
      ref={domRef}
      className={styles.normal}
      hoverClass={styles.hover}
      {...getButtonProps()}
    >
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
