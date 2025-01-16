import { View, ViewProps } from '@tarojs/components'
import cn from 'classnames'
import { forwardRef } from 'react'
import { useSpinner, type UseSpinnerProps } from './use'

export interface SpinnerProps extends UseSpinnerProps {}

const Spinner = forwardRef<ViewProps, SpinnerProps>((props, ref) => {
  const { Component, domRef, label, getSpinnerProps, styles } =
    useSpinner(props)

  return (
    <Component ref={domRef} className={styles.wrapper} {...getSpinnerProps()}>
      <View className={cn('i-[svg-spinners--90-ring-with-bg]', styles.icon)} />
      {label && <View className={styles.label}>{label}</View>}
    </Component>
  )
})

Spinner.displayName = 'Srcube.Spinner'

export default Spinner
