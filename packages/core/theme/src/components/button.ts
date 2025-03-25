import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const button = tv({
  base: [
    'relative inline-flex items-center justify-center',
    'gap-2 mx-0',
    'font-semibold',
    'transition-all duration-200 ease-out',
    'border border-solid after:border-none',
    'outline-none',
  ],
  variants: {
    color: {
      // !Runtime Bug: Default button text color need to be important
      default: 'bg-gray-100 border-gray-200 !text-black !dark:text-white',
      primary: 'bg-primary border-primary text-white',
      success: 'bg-success border-success text-white',
      warning: 'bg-warning border-warning text-white',
      danger: 'bg-danger border-danger text-white',
    },
    size: {
      xs: 'h-6 px-2 text-xs rounded-md',
      sm: 'h-8 px-3 text-sm rounded-lg',
      md: 'h-10 px-4 text-base rounded-xl',
      lg: 'h-12 px-6 text-lg rounded-2xl',
    },
    variant: {
      solid: '',
      outline: 'bg-transparent border-4 shadow-none',
      flat: 'border-none shadow-none',
      text: 'bg-transparent border-none shadow-none',
      shadow: 'shadow-md',
    },
    disabled: {
      true: 'opacity-50 active:scale-100',
      false: 'active:scale-95',
    },
    block: {
      true: 'w-full',
    },
  },
  compoundVariants: [
    {
      variant: 'outline',
      color: 'primary',
      class: 'text-primary-500',
    },
    {
      variant: 'outline',
      color: 'success',
      class: 'text-success-500',
    },
    {
      variant: 'outline',
      color: 'warning',
      class: 'text-warning-500',
    },
    {
      variant: 'outline',
      color: 'danger',
      class: 'text-danger-500',
    },
    {
      variant: 'flat',
      color: 'primary',
      class: 'bg-primary-200 text-primary-500',
    },
    {
      variant: 'flat',
      color: 'success',
      class: 'bg-success-200 text-success-500',
    },
    {
      variant: 'flat',
      color: 'warning',
      class: 'bg-warning-200 text-warning-500',
    },
    {
      variant: 'flat',
      color: 'danger',
      class: 'bg-danger-200 text-danger-500',
    },
    {
      variant: 'text',
      color: 'primary',
      class: 'text-primary-500',
    },
    {
      variant: 'text',
      color: 'success',
      class: 'text-success-500',
    },
    {
      variant: 'text',
      color: 'warning',
      class: 'text-warning-500',
    },
    {
      variant: 'text',
      color: 'danger',
      class: 'text-danger-500',
    },
    {
      variant: 'shadow',
      color: 'primary',
      class: 'shadow-primary-500',
    },
    {
      variant: 'shadow',
      color: 'success',
      class: 'shadow-success-500',
    },
    {
      variant: 'shadow',
      color: 'warning',
      class: 'shadow-warning-500',
    },
    {
      variant: 'shadow',
      color: 'danger',
      class: 'shadow-danger-500',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'default',
    variant: 'solid',
  },
})

export type ButtonVariantProps = VariantProps<typeof button>

export const buttonHover = tv({
  base: '',
  variants: {
    color: {
      default: 'bg-gray-200',
      primary: 'bg-primary-600',
      success: 'bg-success-600',
      warning: 'bg-warning-600',
      danger: 'bg-danger-600',
    },
    variant: {
      solid: '',
      outline: 'bg-transparent',
      flat: 'border-none',
      text: 'border-none',
      shadow: '',
    },
  },
  compoundVariants: [
    {
      variant: 'outline',
      color: 'primary',
      class: 'text-primary-600',
    },
    {
      variant: 'outline',
      color: 'success',
      class: 'text-success-600',
    },
    {
      variant: 'outline',
      color: 'warning',
      class: 'text-warning-600',
    },
    {
      variant: 'outline',
      color: 'danger',
      class: 'text-danger-600',
    },
    {
      variant: 'flat',
      color: 'primary',
      class: 'bg-primary-300 text-primary-600',
    },
    {
      variant: 'flat',
      color: 'success',
      class: 'bg-success-300 text-success-600',
    },
    {
      variant: 'flat',
      color: 'warning',
      class: 'bg-warning-300 text-warning-600',
    },
    {
      variant: 'flat',
      color: 'danger',
      class: 'bg-danger-300 text-danger-600',
    },
    {
      variant: 'text',
      color: 'primary',
      class: 'text-primary-600',
    },
    {
      variant: 'text',
      color: 'success',
      class: 'text-success-600',
    },
    {
      variant: 'text',
      color: 'warning',
      class: 'text-warning-600',
    },
    {
      variant: 'text',
      color: 'danger',
      class: 'text-danger-600',
    },
    {
      variant: 'shadow',
      color: 'primary',
      class: 'shadow-primary-400',
    },
    {
      variant: 'shadow',
      color: 'success',
      class: 'shadow-success-400',
    },
    {
      variant: 'shadow',
      color: 'warning',
      class: 'shadow-warning-400',
    },
    {
      variant: 'shadow',
      color: 'danger',
      class: 'shadow-danger-400',
    },
  ],
  defaultVariants: {
    color: 'default',
    variant: 'solid',
  },
})

export type ButtonHoverVariantProps = VariantProps<typeof buttonHover>
