"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Code, Database, Wrench, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming & Querying",
    icon: Code,
    skills: ["Python", "Basic SQL", "C"],
  },
  {
    title: "Libraries & Frameworks",
    icon: Database,
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Statsmodels",
      "Scikit-Learn",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Jupyter Notebook",
      "PyCharm",
      "VS Code",
      "Excel",
      "Power BI",
      "Tableau",
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Communication", "Teamwork"],
  },
]

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.15)

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Skills
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.title}
                className="group rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <cat.icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
