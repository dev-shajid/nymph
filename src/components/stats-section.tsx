"use client"
import { Marquee } from "@/components/ui/marquee"
import { FadeInUp } from "@/components/ui/fade-in-up"
import type { Stat } from "@/sanity/lib/queries"

export function StatsSection({ stats }: { stats: Stat[] }) {
  if (!stats || stats.length === 0) return null

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <FadeInUp>
        <Marquee pauseOnHover className="[--duration:30s] [--gap:4rem]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center min-w-[200px] px-8"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-muted-foreground text-sm md:text-base text-center">{stat.label}</p>
            </div>
          ))}
        </Marquee>
      </FadeInUp>
    </section>
  )
}
