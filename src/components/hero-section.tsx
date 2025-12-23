"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FadeInUp } from "@/components/ui/fade-in-up"

export function HeroSection() {
  // Parallax effect for text
  const sectionRef = useRef<HTMLElement>(null)
  return (
    <section
      ref={sectionRef}
      className="relative flex items-center overflow-hidden bg-background py-24"
    >
      <>
        <div
          className="absolute top-1/8 left-1/2 size-90 dark:bg-primary/25 bg-primary/30 rounded-full blur-3xl"/>
        <div
          className="absolute top-1/8 right-1/2 size-90 dark:bg-primary/25 bg-primary/20 rounded-full blur-3xl"/>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.09)_1px,transparent_1px)] bg-size-[64px_64px]" />
      </>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <>
          {/* Badge */}
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md mb-8 hover:bg-foreground/10 transition-colors cursor-default">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 dark:bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-foreground/70 uppercase">Globally Trusted Partner</span>
            </div>
          </FadeInUp>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight mb-6">
            <FadeInUp delay={0.3} className="block text-balance">
              We Build
            </FadeInUp>
            <FadeInUp delay={0.4} className="block text-primary">
              Future-Ready
            </FadeInUp>
            <FadeInUp delay={0.5} className="block text-balance">
              Software
            </FadeInUp>
          </h1>

          <FadeInUp className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-balance">
            Empowering businesses with cutting-edge AI, Cloud, and Custom Software Solutions that drive
            <span className="text-foreground font-medium"> digital transformation</span>.
          </FadeInUp>

          <FadeInUp delay={0.7} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 md:px-8 md:py-6 text-base group sm:w-40! md:w-48!"
              asChild
            >
              <Link href="#contact">
                Get Started
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-secondary md:px-8 md:py-6 text-base bg-transparent sm:w-40! md:w-48!"
              asChild
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </FadeInUp>
        </>
      </div>
    </section>
  )
}
