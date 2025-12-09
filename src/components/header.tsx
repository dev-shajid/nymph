"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, MoonIcon, SunIcon, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import Logo from "./logo"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 pt-0 backdrop-blur-lg border-b border-border" : "bg-transparent pt-4",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo/>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  aria-label="Theme Toggle"
                  variant='ghost'
                  size='icon'
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {
                    theme === "light" ?
                      <MoonIcon className="size-4" /> :
                      <SunIcon className="size-4" />
                  }
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              className="text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 bg-transparent border border-foreground"
            >
              Let's Talk
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button className="mt-2 bg-primary text-primary-foreground">Let's Talk</Button>
        </nav>
      </div>
    </header>
  )
}
