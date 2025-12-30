"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { FadeInUp } from "@/components/ui/fade-in-up"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"
import Image from "next/image"
import { Marquee } from "@/components/ui/marquee"
import type { Testimonial, ClientLogo } from "@/sanity/lib/queries"

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

export function TestimonialsSection({
  testimonials,
  clientLogos,
}: {
  testimonials: Testimonial[]
  clientLogos: ClientLogo[]
}) {
  if (!testimonials || testimonials.length === 0) return null

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos - Infinite Marquee */}
        {clientLogos && clientLogos.length > 0 && (
          <div className="mb-16 relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="sm:text-2xl text-2xl font-bold text-center text-foreground mb-6 text-balance"
            >
              Trusted by innovative companies worldwide
            </motion.h2>
            <Marquee pauseOnHover className="[--duration:30s] [--gap:3rem] mask-image-linear-gradient">
              {clientLogos.map((logo) => {
                const hasImage = !!logo.logoImage?.asset?.url
                const hasText = logo.showText

                // Skip if neither image nor text is available
                if (!hasImage && !hasText) return null

                return (
                  <div
                    key={logo.name}
                    className="flex items-center gap-2 group/logo cursor-pointer"
                  >
                    {/* Image appears first (prefix) if it exists */}
                    {hasImage && (
                      <div className="relative h-8 md:h-10 w-auto max-w-24 md:max-w-32 grayscale opacity-50 transition-all shrink-0 group-hover/logo:grayscale-0 group-hover/logo:opacity-100">
                        <Image
                          src={logo.logoImage!.asset.url}
                          alt={logo.name}
                          width={96}
                          height={40}
                          className="object-contain h-8 md:h-10 w-auto"
                        />
                      </div>
                    )}

                    {/* Text appears after image if enabled */}
                    {hasText && (
                      <span className={cn(
                        "font-bold text-muted-foreground/50 transition-colors whitespace-nowrap group-hover/logo:text-muted-foreground",
                        hasImage ? "text-lg md:text-xl font-semibold" : "text-xl md:text-2xl"
                      )}>
                        {logo.name}
                      </span>
                    )}
                  </div>
                )
              })}
            </Marquee>
          </div>
        )}

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

        <div className="flex flex-wrap justify-center gap-6 perspective-1000">
          {(() => {
            const isMobile = useIsMobile();
            return testimonials.map((testimonial, index) => {
              const content = (
                <>
                  <Quote className="h-8 w-8 text-primary/50 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={testimonial.avatar?.asset?.url || "/placeholder-avatar.png"}
                        alt={testimonial.author}
                        fill
                        objectFit="cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </>
              );
              return isMobile ? (
                <FadeInUp key={testimonial._id} className="w-full md:w-[320px] lg:w-[360px] xl:w-[380px] p-6 md:p-8 rounded-xl bg-card border border-border flex flex-col transform-3d">
                  {content}
                </FadeInUp>
              ) : (
                <TiltCard key={testimonial._id} className="w-full md:w-[320px] lg:w-[360px] xl:w-[380px] p-6 md:p-8 rounded-xl bg-card border border-border flex flex-col transform-3d">
                  {content}
                </TiltCard>
              );
            });
          })()}
        </div>
      </div>
    </section>
  )
}
