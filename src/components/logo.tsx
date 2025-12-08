import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LogoProps {
    className?: string
}

export default function Logo({className}:LogoProps) {
  return (
    <Link href='/'>
        <Image
            src='/logo.webp'
            alt='Logo'
            width={150}
            height={100}
            className={className}
        />

    </Link>
  )
}
