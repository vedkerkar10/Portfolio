"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="fixed w-full backdrop-blur-lg bg-background/80 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">

          <div className="text-lg hidden md:flex items-center justify-center space-x-12">
            <Link href="/#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="/#experience" className="hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="/#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#projects" className="block px-3 py-2 hover:text-primary">
              Projects
            </Link>
            <Link href="/#skills" className="block px-3 py-2 hover:text-primary">
              Skills
            </Link>
            <Link href="/#experience" className="block px-3 py-2 hover:text-primary">
              Experience
            </Link>
            <Link href="/#contact" className="block px-3 py-2 hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}