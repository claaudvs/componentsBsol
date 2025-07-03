'use client'

import clsx from 'clsx'
import { ChartCircle } from 'iconsax-reactjs'
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'destructive'
type Size = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  isLoading?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading,
      iconLeft,
      iconRight,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={clsx(
          'inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none gap-2',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <ChartCircle className="animate-spin h-4 w-4" />
        ) : (
          <>
            {iconLeft && <span className="mr-1">{iconLeft}</span>}
            {children}
            {iconRight && <span className="ml-1">{iconRight}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

const variantStyles: Record<Variant, string> = {
  primary: "bg-[#5C00E0] text-white hover:bg-[#4400A8]",
  secondary: "bg-[#EDE9FE] text-[#5C00E0] hover:bg-[#d7d2f4]",
  tertiary:
    "bg-transparent text-(--purple-200) border border-(--purple-200) hover:underline hover:bg-(--purple-200)",
  destructive: "bg-[#D60000] text-white hover:bg-[#b40000]",
};

const sizeStyles: Record<Size, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-5 py-2.5',
  xl: 'text-base px-6 py-3',
}
