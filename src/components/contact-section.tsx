"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-background overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div
            className={cn(
              "transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
            )}
          >
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight wrap-break-words">
              Want to be a part
              <br />
              of our journey?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 wrap-break-words">
              We're always excited to connect with innovative businesses and ambitious projects. Reach out to discuss
              how we can help transform your ideas into reality.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:contact@nymphsolutions.com"
                    className="text-foreground break-all hover:text-primary transition-colors duration-200"
                  >
                    contact@nymphsolutions.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+8801777223622"
                    className="text-foreground wrap-break-words hover:text-primary transition-colors duration-200"
                  >
                    +8801777223622
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground wrap-break-words">Level 3, House No. 470, Road No. 31, Mohakhali DOHS, Dhaka, Bangladesh.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div
            className={cn(
              "transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="p-6 md:p-8 rounded-xl bg-card border border-border overflow-hidden">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="bg-input border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="bg-input border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="bg-input border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
