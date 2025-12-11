"use client"
import { useRef, useEffect } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Stat } from "@/sanity/lib/queries"

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + (suffix || '')
      }
    })
  }, [springValue, suffix])

  return <span ref={ref} />
}

export function StatsSection({ stats }: { stats: Stat[] }) {
  if (!stats || stats.length === 0) return null

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "text-center md:border-r last:border-r-0 border-border transition-all duration-700",
              )}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
