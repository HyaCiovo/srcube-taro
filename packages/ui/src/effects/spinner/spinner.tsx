import { View } from '@tarojs/components'
import { forwardRef } from 'react'
import { useSpinner, type UseSpinnerProps } from './use'

export interface SpinnerProps extends UseSpinnerProps {}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const { Component, domRef, label, getSpinnerProps } = useSpinner(props)

  return (
    <Component ref={domRef} {...getSpinnerProps()}>
      <View className="i-[svg-spinners--90-ring-with-bg]" />
      {label}
    </Component>
  )
})

Spinner.displayName = 'Srcube.Spinner'

export default Spinner
