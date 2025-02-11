import type { ViewProps } from '@tarojs/components'
import type { UseAvatarProps } from './use'
import { Image, Text } from '@tarojs/components'
import { forwardRef, memo, useMemo } from 'react'
import { useAvatar } from './use'

export interface AvatarProps extends UseAvatarProps {}

const Avatar = forwardRef<ViewProps, AvatarProps>((props, ref) => {
  const { Component, src, getAvatarProps, getImageProps } = useAvatar({
    ...props,
    ref,
  })

  const fallback = useMemo(() => {
    if (!props.fallback)
      return <></>

    return <Text>{props.name}</Text>
  }, [props.name, props.fallback])

  return (
    <Component {...getAvatarProps()}>
      {src && <Image {...getImageProps()} />}
      {fallback}
    </Component>
  )
})

Avatar.displayName = 'Srcube.Avatar'

export default memo(Avatar)
