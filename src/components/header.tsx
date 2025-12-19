"use client"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, Briefcase, Users, Home, Mail, TrendingUp, MessageSquareQuoteIcon, InfoIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip"
import Logo from "./logo"
import { motion } from "framer-motion"
import { Dock, DockIcon } from "./ui/dock"
import { useEffect, useState } from "react"
import Link from "next/link"

const navLinks = [
  { href: "#services", label: "Services", icon: Briefcase },
  { href: "#careers", label: "Careers", icon: TrendingUp },
  { href: "#about", label: "About", icon: InfoIcon },
  { href: "#testimonials", label: "Testimonials", icon: MessageSquareQuoteIcon },
  { href: "#contact", label: "Contact", icon: Mail },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Header - Desktop */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block",
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="shrink-0 py-4">
            <Logo />
            </div>

            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base transition-colors duration-200",
                    activeSection === link.href
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    aria-label="Theme Toggle"
                    variant='ghost'
                    size='icon'
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  >
                    {theme === "light" ? <MoonIcon className="size-4" /> : <SunIcon className="size-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle Theme</p>
                </TooltipContent>
              </Tooltip>

              <Button
                asChild
                className="text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 bg-transparent border border-foreground"
              >
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header - Logo and CTA */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="flex items-center justify-between h-16 px-4">
          <Logo />
          <Button
            asChild
            size="sm"
            className="text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 bg-transparent border border-foreground"
          >
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>
      </header>

      {/* Bottom Dock Navigation - Mobile Only */}
      <TooltipProvider>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <Dock
            iconSize={36}
            iconMagnification={48}
            iconDistance={100}
            className="bg-background/90 border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          >
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = activeSection === link.href
              return (
                <DockIcon key={link.href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-center w-full h-full rounded-full transition-colors duration-300",
                          isActive ? "bg-primary/20" : "hover:bg-primary/10"
                        )}
                      >
                        <Icon className={cn(
                          "size-5 transition-colors duration-300",
                          isActive ? "text-primary" : "text-muted-foreground"
                        )} />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="font-medium">
                      <p>{link.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              )
            })}

            {/* Theme Toggle in Dock */}
            <div className="w-px h-8 bg-border/60 mx-1" />

            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    aria-label="Theme Toggle"
                    className="flex items-center justify-center w-full h-full rounded-full transition-colors duration-300 hover:bg-primary/10"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  >
                    {theme === "light" ? <MoonIcon className="size-5 text-muted-foreground" /> : <SunIcon className="size-5 text-muted-foreground" />}
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" className="font-medium">
                  <p>Toggle Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </motion.div>
      </TooltipProvider>
    </>
  )
}
