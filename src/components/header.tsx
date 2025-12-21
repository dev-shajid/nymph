"use client"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, Briefcase, Mail, TrendingUp, MessageSquareQuoteIcon, InfoIcon, TextAlignEnd } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import Logo from "./logo"
import { useEffect, useState, useMemo, useCallback } from "react"
import Link from "next/link"
import { AppSidebar } from "./app-sidebar"
import { SidebarTrigger } from "./ui/sidebar"

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

  const sections = useMemo(() => navLinks.map(link => link.href.replace('#', '')), [])
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
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
  }, [sections])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

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
          <SidebarTrigger>
            <Button variant="ghost" size="icon">
              <TextAlignEnd className="h-5 w-5" />
            </Button>
          </SidebarTrigger>
          <AppSidebar menuItems={navLinks} activeSection={activeSection} />
        </div>
      </header>
    </>
  )
}
