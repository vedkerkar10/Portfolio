"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-24">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="relative w-32 h-32 mx-auto lg:mx-0">
            <Image
              src="/sponge.png"
              alt="Profile"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Ved Kerkar
            </h1>
            <h2 className="mt-2 text-lg text-muted-foreground">
              Full Stack Developer
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Building scalable applications and solving complex problems with modern technologies.
            </p>
          </div>

          <div className="flex gap-4">
            <Link href="https://github.com/vedkerkar10" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://instagram.com" className="hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </motion.div>

        {/* Education & Current Work */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Bachelor of Engineering (Computer)</h3>
                <p className="text-sm text-muted-foreground">Don Bosco College of Engineering, Goa • 2021-2025</p>
              </div>
              <div>
                {/* <h3 className="font-semibold">Computer Science 10+2</h3>
                <p className="text-sm text-muted-foreground">Shree Damodar • 2016-2020</p>
              */}
              </div> 
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Position</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold">Frontend Developer</h3>
              <p className="text-sm text-muted-foreground mb-2">sevaco • 2024-Present</p>
              <p className="text-sm text-muted-foreground">
                Website Development, UI/UX Design, Mobile Development, Backend Development
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}