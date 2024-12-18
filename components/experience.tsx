"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Software Developer Intern",
    company: "The Grit City",
    period: "July - September 2024",
    description: "Developed a keyword parser and job portal incorporating AI chatbots",
    achievements: [
      "Webscraped Courses, Internship, Hackathons from different platforms using cheerio",
      "LLMs (Gemma2, Llama, Phi3) for personalized career guidance",
      "Utilized Groq API and prompt engineering techniques",
    ],
  },
  {
    title: "Frontend Web Developer and Designer Intern",
    company: "Sevaco Global Ventures Private Limited",
    period: "April 2024 - Present",
    description: "Designed and implemented the company’s website",
    achievements: [
      "Built real-time collaboration features",
      "Improved test coverage to 90%",
      "Optimized database queries",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          {/* <p className="text-muted-foreground">My professional journey</p> */}
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div>
                      {experience.title}
                      <span className="text-primary ml-2">@ {experience.company}</span>
                    </div>
                    <span className="text-sm font-normal text-muted-foreground">
                      {experience.period}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-">{experience.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}