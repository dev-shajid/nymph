"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Nymph Solutions transformed our business operations with their AI-powered analytics platform. Their team's expertise and dedication exceeded our expectations.",
    author: "Sarah Chen",
    role: "CTO, TechForward Inc.",
    company: "TechForward",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
  },
  {
    quote:
      "The mobile app they developed for us has become central to our customer engagement strategy. Outstanding quality and seamless user experience.",
    author: "Michael Rodriguez",
    role: "Director of Digital, RetailMax",
    company: "RetailMax",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
  },
  {
    quote:
      "Their blockchain solution revolutionized our supply chain transparency. Professional, innovative, and always delivering on time.",
    author: "Emily Watson",
    role: "VP Operations, GlobalTrade",
    company: "GlobalTrade",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
  },
]

const clientLogos = ["TechForward", "RetailMax", "GlobalTrade", "InnovateCo", "DataDrive", "CloudFirst"]

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    x.set(clientX - left - width / 2)
    y.set(clientY - top - height / 2)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

  return (
    <motion.div
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos - Infinite Marquee */}
        <div className="mb-16 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="sm:text-2xl text-2xl font-bold text-center text-foreground mb-6 text-balance"
          >
            Trusted by innovative companies worldwide
            <br className="hidden md:block" />
            companies worldwide
          </motion.h2>
          <div className="flex overflow-hidden mask-image-linear-gradient">
            <motion.div
              className="flex gap-12 md:gap-24 items-center whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            >
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="text-xl md:text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-default"
                >
                  {logo}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium tracking-wider uppercase text-sm mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Hear from those who've experienced
            <br className="hidden md:block" />
            our commitment to excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty"
          >
            Discover how we've helped businesses achieve their goals through innovative solutions and dedicated partnership.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 perspective-1000">
          {testimonials.map((testimonial, index) => (
            <TiltCard
              key={testimonial.author}
              className="p-6 md:p-8 rounded-xl bg-card border border-border h-full"
            >
              <Quote className="h-8 w-8 text-primary/50 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
