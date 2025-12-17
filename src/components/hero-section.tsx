"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

export function HeroSection() {
  // Parallax effect for text
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-background"
    >
      <>
        <motion.div
          className="absolute top-1/8 left-1/2 w-96 h-96 dark:bg-primary/50 bg-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/8 right-1/2 w-96 h-96 dark:bg-primary/50 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.09)_1px,transparent_1px)] bg-size-[64px_64px]" />
      </>

      <div className="relative z-10 max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} style={{ y: y2 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md mb-8 hover:bg-foreground/10 transition-colors cursor-default">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 dark:bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-foreground/70 uppercase">Globally Trusted Partner</span>
            </div>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="block text-balance"
            >
              We Build
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="block text-primary"
            >
              Future-Ready
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="block text-balance"
            >
              Software
            </motion.span>
          </h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-balance"
          >
            Empowering businesses with cutting-edge AI, Cloud, Blockchain, and Custom Software Solutions that drive
            <span className="text-foreground font-medium"> digital transformation</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
