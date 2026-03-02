"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { User } from "lucide-react"

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.2)

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <User className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              About Me
            </h2>
          </div>

          <div className="rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm">
            <p className="leading-relaxed text-muted-foreground">
              I am a B.Tech Information Technology student with hands-on
              experience in Data Analytics, Machine Learning, and Business
              Intelligence. I have completed a Data Science Internship at
              Eisystems Services (Technex&apos;25 IIT BHU), where I worked on sales
              forecasting using ARIMA models. I am passionate about solving
              real-world business problems using data-driven approaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
