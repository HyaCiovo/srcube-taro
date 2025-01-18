import { Image, Text, type ViewProps } from '@tarojs/components'
import { forwardRef, useMemo } from 'react'
import { useAvatar, type UseAvatarProps } from './use'

export interface AvatarProps extends UseAvatarProps {}

const Avatar = forwardRef<ViewProps, AvatarProps>((props, ref) => {
  const { Component, src, getAvatarProps, getImageProps } = useAvatar({
    ...props,
    ref,
  })

  const fallback = useMemo(() => {
    if (!props.fallback) return <></>

    return <Text>{props.name}</Text>
  }, [props.name])

  return (
    <Component {...getAvatarProps()}>
      {src && <Image {...getImageProps()} />}
      {fallback}
    </Component>
  )
})

Avatar.displayName = 'Srcube.Avatar'

export default Avatar
