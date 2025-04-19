"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function Header() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold font-heading bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-transparent bg-clip-text"
        >
          Ansh Rajput
        </Link>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="rounded-full"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>

            {isMenuOpen && (
              <div className="fixed inset-0 top-16 bg-white dark:bg-gray-900 z-40 p-4">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="#work"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Work
                  </Link>
                  <Link
                    href="#timeline"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Timeline
                  </Link>
                  <Link
                    href="#experience"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Experience
                  </Link>
                  <Link
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center">
            <nav className="flex items-center space-x-4 mr-3">
              <Link
                href="#work"
                className="text-sm font-medium hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                Work
              </Link>
              <Link
                href="#timeline"
                className="text-sm font-medium hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                Timeline
              </Link>
              <Link
                href="#experience"
                className="text-sm font-medium hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                Contact
              </Link>
            </nav>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
        )}
      </div>
    </motion.header>
  )
}
