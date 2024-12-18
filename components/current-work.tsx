"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

export function CurrentWork() {
  return (
    <section id="current-work" className="py-24 px-4 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Current Work</h2>
          <p className="text-muted-foreground">What I'm working on right now</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Senior Full Stack Developer
                <span className="text-sm font-normal text-primary">2023 - Present</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Currently working at TechCorp as a Senior Full Stack Developer, focusing on:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Leading the development of a next-generation SaaS platform</li>
                  <li>Mentoring junior developers and conducting code reviews</li>
                  <li>Implementing microservices architecture using Node.js and Docker</li>
                  <li>Optimizing application performance and scalability</li>
                </ul>
                <div className="pt-4">
                  <a
                    href="https://techcorp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Visit Company Website
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}