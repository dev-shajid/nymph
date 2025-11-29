"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Target, Eye, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver innovative, high-quality software solutions that empower businesses to achieve their digital transformation goals and stay ahead in an ever-evolving technological landscape.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the world's most trusted software development partner, recognized for our technical excellence, innovative thinking, and commitment to client success.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, innovation, and client-centricity guide everything we do. We believe in building lasting partnerships through transparency, quality, and continuous improvement.",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={cn(
              "transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
            )}
          >
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">About Us</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Where deep tech meets
              <br />
              <span className="text-muted-foreground">a human mindset.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are a collective of curious and passionate technologists bound together by our deep tech knowledge, our
              human-centric mindset, and a passion for using technology and digital solutions to drive business
              transformation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At Nymph Solutions, we combine technical expertise with creative problem-solving to deliver solutions that
              truly make a difference. Our team of experts works closely with clients to understand their unique
              challenges and craft tailored solutions that drive measurable results.
            </p>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className={cn(
                    "p-6 rounded-xl bg-card border border-border transition-all duration-700",
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
                  )}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
