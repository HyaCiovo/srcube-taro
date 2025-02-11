import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const avatar = tv({
  slots: {
    wrapper: [
      'relative overflow-hidden',
      'flex justify-center items-center align-middle',
      'border-4 border-solid border-transparent',
    ],
    img: 'object-cover h-full',
  },
  variants: {
    size: {
      xs: {
        wrapper: 'size-8 text-xs',
      },
      sm: {
        wrapper: 'size-10 text-sm',
      },
      md: {
        wrapper: 'size-12 text-base',
      },
      lg: {
        wrapper: 'size-16 text-lg',
      },
    },
    radius: {
      xs: {
        wrapper: 'rounded-sm',
      },
      sm: {
        wrapper: 'rounded',
      },
      md: {
        wrapper: 'rounded-xl',
      },
      lg: {
        wrapper: 'rounded-2xl',
      },
      full: {
        wrapper: 'rounded-full',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    radius: 'full',
  },
})

export type AvatarVariantProps = VariantProps<typeof avatar>
export type AvatarSlots = keyof ReturnType<typeof avatar>
