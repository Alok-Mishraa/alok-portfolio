"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Award, Trophy } from "lucide-react"

const certifications = [
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    org: "Forage (Feb 2026)",
    details: [
      "Built an interactive dashboard using Tableau for data-driven insights",
      "Used Excel for data classification and business intelligence reporting",
    ],
  },
  {
    title: "Data Science with Python Internship Certificate",
    org: "Eisystems Services & Technex'25 IIT BHU (2025)",
    details: [],
  },
]

const awards = [
  {
    title: "Best Innovation Award",
    year: "2024",
    description: "Developed BlueGen AI platform",
  },
  {
    title: "Runner-up Innovation Award",
    year: "2025",
    description:
      "Developed ASTRA-AI (AI frontend code generator using React + OpenAI API)",
  },
]

export function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.2)

  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Certifications & Awards
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Certifications */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Certifications
              </h3>
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <h4 className="font-semibold text-foreground">
                    {cert.title}
                  </h4>
                  <p className="mt-1 text-xs font-mono text-primary">
                    {cert.org}
                  </p>
                  {cert.details.length > 0 && (
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {cert.details.map((d, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Awards */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Awards
              </h3>
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-start gap-3">
                    <Trophy className="h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {award.title}
                      </h4>
                      <p className="mt-0.5 text-xs font-mono text-primary">
                        {award.year}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {award.description}
                      </p>
                    </div>
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
