import type { AnchorHTMLAttributes } from 'react'
import cn from 'classnames'

function Anchor({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={cn(
        'relative font-semibold no-underline',
        'after:content-[""] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:rounded-full after:h-[1px] after:bg-primary-400 dark:after:bg-default-300 hover:after:h-[2px]',
        props.className,
      )}
    >
      {children}
    </a>
  )
}

export default Anchor
