'use client'

import clsx from "clsx"


type TypographyVariant =
  | 'display1'
  | 'display2'
  | 'display3'
  | 'display4'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'bodyXL'
  | 'bodyL'
  | 'bodyM'
  | 'bodyS'

type Weight = 'bold' | 'semibold' | 'medium' | 'regular'

interface TypographyProps {
  variant?: TypographyVariant
  weight?: Weight
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export default function Typography({
  variant = 'bodyM',
  weight = 'regular',
  children,
  className,
  as: Tag = 'p',
}: TypographyProps) {
  return (
    <Tag className={clsx(variantClasses[variant], weightClasses[weight], className)}>
      {children}
    </Tag>
  )
}

const variantClasses: Record<TypographyVariant, string> = {
  // Display
  display1: 'text-[36px] leading-[44px] md:text-[48px] md:leading-[56px] lg:text-[60px] lg:leading-[72px]',
  display2: 'text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[56px]',
  display3: 'text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px]',
  display4: 'text-[20px] leading-[28px] md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px]',

  // Heading
  heading1: 'text-[24px] leading-[32px] md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px]',
  heading2: 'text-[20px] leading-[28px] md:text-[24px] md:leading-[32px] lg:text-[28px] lg:leading-[36px]',
  heading3: 'text-[18px] leading-[26px] md:text-[22px] md:leading-[30px] lg:text-[24px] lg:leading-[32px]',
  heading4: 'text-[16px] leading-[24px] md:text-[18px] md:leading-[26px] lg:text-[20px] lg:leading-[28px]',

  // Body
  bodyXL: 'text-[16px] leading-[24px] md:text-[18px] md:leading-[28px]',
  bodyL: 'text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]',
  bodyM: 'text-[12px] leading-[18px] md:text-[14px] md:leading-[20px]',
  bodyS: 'text-[10px] leading-[16px] md:text-[12px] md:leading-[16px]',
}

const weightClasses: Record<Weight, string> = {
  bold: 'font-bold',
  semibold: 'font-semibold',
  medium: 'font-medium',
  regular: 'font-normal',
}