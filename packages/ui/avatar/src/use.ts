import type { AvatarSlots, AvatarVariantProps } from '@srcube-taro/theme'
import type { ReactRef } from '@srcube-taro/utils-react'
import type { NativeProps } from '@srcube-taro/utils-taro'
import type { SlotsToClasses } from '@srcube-taro/utils-tv'
import type { BaseEventOrig, ImageProps, ViewProps } from '@tarojs/components'
import { avatar } from '@srcube-taro/theme'
import { View } from '@tarojs/components'
import cn from 'classnames'
import { useCallback, useMemo } from 'react'

interface Props {
  /**
   * Ref to the DOM element
   */
  ref?: ReactRef<NativeProps<ViewProps>>
  /**
   * Ref to the image DOM element
   */
  imgRef?: ReactRef<NativeProps<ImageProps>>
  /**
   * The name of the person in the avatar. Used for the fallback text.
   */
  name?: string
  /**
   * The src of the image to be displayed.
   */
  src?: string
  /**
   * Custom fallback component for avatar
   */
  fallback?: React.ReactNode
  /**
   * Class names to apply to the avatar
   */
  classNames?: SlotsToClasses<AvatarSlots>
}

export type UseAvatarProps = Props &
  Omit<NativeProps<ViewProps & ImageProps>, keyof AvatarVariantProps | 'children'> &
  AvatarVariantProps

export function useAvatar(props: UseAvatarProps) {
  const {
    ref,
    imgRef,
    name,
    src,
    size,
    radius,
    fallback,
    className,
    classNames,
    onError,
    onLoad,
    ...rest
  } = props

  const Component = View

  const slots = useMemo(() => {
    return avatar({
      size,
      radius,
    })
  }, [size, radius])

  const styles = useMemo(() => {
    return {
      wrapper: cn(slots.wrapper({ class: classNames?.wrapper }), className),
      img: cn(slots.img({ class: classNames?.img })),
    }
  }, [className, classNames, slots])

  const handleImageError = useCallback(
    (error: BaseEventOrig<ImageProps.onErrorEventDetail>) => {
      onError?.(error)
    },
    [onError],
  )

  const handleImageLoad = useCallback(
    (load: BaseEventOrig<ImageProps.onLoadEventDetail>) => {
      onLoad?.(load)
    },
    [onLoad],
  )

  const getFallback = useCallback(() => {
    if (fallback)
      return fallback
    if (name)
      return name.charAt(0).toUpperCase()
    return null
  }, [fallback, name])

  const getAvatarProps = useCallback(() => {
    return {
      ref,
      className: styles.wrapper,
      ...rest,
    }
  }, [styles.wrapper, ref, rest])

  const getImageProps = useCallback(() => {
    return {
      ref: imgRef,
      src,
      className: styles.img,
      mode: 'aspectFit' as unknown as ImageProps['mode'],
      onError: handleImageError,
      onLoad: handleImageLoad,
    }
  }, [src, styles.img, imgRef, handleImageError, handleImageLoad])

  return {
    Component,
    src,
    getFallback,
    getAvatarProps,
    getImageProps,
  }
}

export type UseAvatarReturn = ReturnType<typeof useAvatar>
