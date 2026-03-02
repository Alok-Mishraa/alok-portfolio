"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.2)

  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Experience
            </h2>
          </div>

          <div className="rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Data Science Intern
                </h3>
                <p className="text-sm text-muted-foreground">
                  Eisystems Services | Technex&apos;25 IIT (BHU) Varanasi (Remote)
                </p>
              </div>
              <span className="mt-1 text-xs font-mono text-primary sm:mt-0 shrink-0">
                July 2025 – August 2025
              </span>
            </div>

            <ul className="mt-6 flex flex-col gap-3">
              {[
                "Completed 6-week Data Science internship",
                "Conducted Sales Forecasting project using ARIMA models",
                "Built and evaluated time series models",
                "Generated visualizations and forecasting reports",
                "Delivered strategic recommendations based on data insights",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
