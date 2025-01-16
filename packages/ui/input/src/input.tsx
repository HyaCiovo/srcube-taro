import { View, type InputProps as NativeInputProps } from '@tarojs/components'
import { forwardRef } from 'react'
import { useInput, UseInputProps } from './use'

export interface InputProps extends UseInputProps {}

const Input = forwardRef<NativeInputProps, InputProps>((props, ref) => {
  const { Component, domRef, styles, startContent, endContent, getInputProps } =
    useInput({
      ...props,
      ref,
    })

  return (
    <View className={styles.wrapper}>
      {startContent && (
        <View className={styles.startContent}>{startContent}</View>
      )}
      <Component ref={domRef} className={styles.input} {...getInputProps()} />
      {endContent && <View className={styles.endContent}>{endContent}</View>}
    </View>
  )
})

Input.displayName = 'Srcube.Input'

export default Input
