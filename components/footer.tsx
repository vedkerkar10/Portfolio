import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Link href="https://github.com" className="text-muted-foreground hover:text-primary">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}