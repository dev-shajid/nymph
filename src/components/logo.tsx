'use client'

import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LogoProps {
    className?: string
}

export default function Logo({className}:LogoProps) {
  const { theme } = useTheme()
  return (
    <Link href='/'>
        <Image
            src={theme === 'light' ? '/logo-light.svg' : '/logo-dark.svg'}
            alt='Logo'
            width={150}
            height={100}
            className={cn(
              className,
            )}
        />

    </Link>
  )
}
