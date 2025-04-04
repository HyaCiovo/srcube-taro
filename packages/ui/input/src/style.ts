import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const input = tv({
  slots: {
    wrapper: [
      'relative inline-flex items-center gap-3',
      'px-3',
      'w-full min-w-0',
      'transition-all duration-200 ease-out',
      'outline-none',
      'bg-slate-50',
    ],
    input: ['w-full h-full', 'bg-transparent', 'border-none outline-none'],
    clearButton: [''],
    startContent: 'flex-shrink-0 flex items-center justify-center',
    endContent: 'flex-shrink-0 flex items-center justify-center',
  },
  variants: {
    variant: {
      flat: {
        wrapper: 'border-transparent bg-gray-100',
      },
      bordered: {
        wrapper: 'border-2 border-gray-300',
      },
    },
    size: {
      xs: {
        wrapper: 'px-2 h-6 rounded-md',
        input: 'text-xs',
        startContent: 'text-xs',
        endContent: 'text-xs',
      },
      sm: {
        wrapper: 'px-2 h-8 rounded-lg',
        input: 'text-sm',
        startContent: 'text-sm',
        endContent: 'text-sm',
      },
      md: {
        wrapper: 'px-3 h-10 rounded-xl',
        input: 'text-base',
        startContent: 'text-base',
        endContent: 'text-base',
      },
      lg: {
        wrapper: 'px-4 h-12 rounded-2xl',
        input: 'text-lg',
        startContent: 'text-lg',
        endContent: 'text-lg',
      },
    },
    status: {
      default: {},
      primary: {
        wrapper: 'border-primary-500 bg-primary-50',
      },
      success: {
        wrapper: 'border-success-500 bg-success-50',
      },
      warning: {
        wrapper: 'border-warning-500 bg-warning-50',
      },
      danger: {
        wrapper: 'border-danger-500 bg-danger-50',
      },
    },
    disabled: {
      true: {
        wrapper: 'opacity-50 cursor-not-allowed',
        input: 'cursor-not-allowed',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'flat',
    status: 'default',
  },
})

export type InputVariantProps = VariantProps<typeof input>
export type InputSlots = keyof ReturnType<typeof input>
