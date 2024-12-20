"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const certifications = [
  {
    name: "Web Developer Bootcamp",
    issuer: "Udemy",
    date: "2023",
    
  },
  {
    name: "Google AI-ML Virtual Internship",
    issuer: "Google Cloud",
    date: "2023",
    
  },
  {
    name: "Data Structures and Algorithms in Python",
    issuer: "Nptel",
    date: "2022",
    
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold">Certifications</h2>
          {/* <p className="text-muted-foreground">Professional certifications and achievements</p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">{cert.date}</Badge>
                      <span className="text-xs text-muted-foreground">ID: {cert.id}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}