'use client'

import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

interface DropdownProps {
  label?: string
  placeholder?: string
  options: string[]
  state?: 'default' | 'hover' | 'active' | 'error' | 'disabled' | 'filled'
  hint?: string
  error?: string
  disabled?: boolean
  defaultValue?: string
  onChange?: (value: string) => void
}

export default function Dropdown({
  label,
  placeholder = 'Seleccionar...',
  options,
  state = 'default',
  hint,
  error,
  disabled,
  defaultValue,
  onChange,
}: DropdownProps) {
  const [selected, setSelected] = useState(defaultValue || '')
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isError = state === 'error'
  const isDisabled = state === 'disabled' || disabled

  const handleSelect = (value: string) => {
    setSelected(value)
    setOpen(false)
    onChange?.(value)
  }

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="space-y-1" ref={dropdownRef}>
      {label && <label className="block text-sm font-medium text-gray-900">{label}</label>}

      <div
        className={clsx(
          'relative w-full rounded-md border py-2 pl-3 pr-10 text-sm cursor-pointer transition',
          {
            'bg-white text-black border-gray-300': state === 'default' || state === 'filled',
            'border-[#5C00E0] ring-1 ring-[#5C00E0]': state === 'active' || open,
            'border-[#D60000] ring-1 ring-[#D60000] text-[#D60000]': isError,
            'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed': isDisabled,
          }
        )}
        onClick={() => {
          if (!isDisabled) setOpen(!open)
        }}
      >
        <span className="block truncate">{selected || placeholder}</span>
        <svg
          className={clsx('absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-transform', {
            'rotate-180': open,
            'text-gray-400': !isError && !isDisabled,
            'text-[#D60000]': isError,
          })}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>

        {open && (
          <ul className="absolute left-0 top-full z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5">
            {options.map((item, idx) => (
              <li
                key={idx}
                className={clsx(
                  'cursor-pointer px-4 py-2 hover:bg-[#F3F0FF] hover:text-[#5C00E0] transition',
                  {
                    'text-[#5C00E0] font-medium': selected === item,
                  }
                )}
                onClick={() => handleSelect(item)}
              >
                <div className="flex items-center justify-between">
                  <span>{item}</span>
                  {selected === item && (
                    <svg
                      className="w-4 h-4 text-[#00A15D]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {(hint || error) && (
        <p className={clsx('text-xs mt-1', isError ? 'text-[#D60000]' : 'text-gray-500')}>
          {isError ? error : hint}
        </p>
      )}
    </div>
  )
}
