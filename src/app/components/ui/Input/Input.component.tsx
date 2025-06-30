'use client'

import clsx from 'clsx'
import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes, forwardRef } from 'react'

type InputState = 'default' | 'active' | 'filled' | 'error' | 'disabled'
type Variant = 'input' | 'textarea'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  hint?: string
  error?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  state?: InputState
  variant?: Variant
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      label,
      placeholder,
      hint,
      error,
      iconLeft,
      iconRight,
      state = 'default',
      variant = 'input',
      disabled,
      className,
      textareaProps,
      ...props
    },
    ref
  ) => {
    const isError = state === 'error'
    const isDisabled = state === 'disabled' || disabled

    const baseClasses = clsx(
      'w-full rounded-lg border px-3 py-2 text-sm transition focus:outline-none',
      {
        'bg-white border-[#D1D5DB] text-black': state === 'default' || state === 'filled',
        'border-[#5C00E0] ring-1 ring-[#5C00E0]': state === 'active',
        'border-[#D60000] ring-1 ring-[#D60000] text-[#D60000] placeholder-[#D60000]': isError,
        'bg-[#F3F4F6] text-gray-400 border-gray-200 cursor-not-allowed': isDisabled,
      }
    )

    const inputContent = variant === 'textarea' ? (
      <textarea
        ref={ref as React.Ref<HTMLTextAreaElement>}
        disabled={isDisabled}
        className={clsx(baseClasses, className)}
        placeholder={placeholder}
        {...textareaProps}
      />
    ) : (
      <div
        className={clsx(
          'flex items-center w-full rounded-lg border',
          baseClasses,
          iconLeft || iconRight ? 'pl-10 pr-10' : ''
        )}
      >
        {iconLeft && <div className="absolute left-3 text-gray-400">{iconLeft}</div>}
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          disabled={isDisabled}
          className={clsx('w-full outline-none bg-transparent', isDisabled && 'cursor-not-allowed')}
          placeholder={placeholder}
          {...props}
        />
        {iconRight && <div className="absolute right-3 text-gray-400">{iconRight}</div>}
      </div>
    )

    return (
      <div className="space-y-1">
        {label && <label className="block text-sm font-medium text-gray-900">{label}</label>}
        <div className="relative">{inputContent}</div>
        {(hint || error) && (
          <p
            className={clsx('text-xs mt-1', {
              'text-gray-500': !isError,
              'text-[#D60000]': isError,
            })}
          >
            {isError ? error : hint}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
