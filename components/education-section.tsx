"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Science Engineering (Data Science)",
    institution: "Buddha Institute of Technology (AKTU)",
    period: "Graduated: June 2026",
    grade: "CGPA: 7.0 / 10",
  },
  {
    degree: "Intermediate (12th), CBSE",
    institution: "Navals National Academy",
    period: "2021",
    grade: "Percentage: 65%",
  },
  {
    degree: "High School (10th), CBSE",
    institution: "G.N. National Public School",
    period: "2018",
    grade: "Percentage: 79%",
  },
]

export function EducationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.2)

  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Education
            </h2>
          </div>

          <div className="relative ml-4">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            <div className="flex flex-col gap-10">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="relative pl-8"
                  style={{
                    transitionDelay: `${i * 150}ms`,
                  }}
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                  <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="font-semibold text-foreground">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-mono text-primary">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                    <p className="mt-2 text-sm font-medium text-accent">
                      {edu.grade}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
