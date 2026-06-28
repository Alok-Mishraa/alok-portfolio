"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
      el.style.opacity = "1"
      el.style.transform = "translateY(0)"
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-1/4 -left-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
          Alok Mishra
        </h1>
        <p className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl">
          Data Analyst Associate | Business Intelligence & Data Analytics
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Currently working as a Data Analyst Associate at Insights Route, I
          transform data into actionable insights using SQL, Python, Power BI,
          and Business Intelligence tools.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1KGLwqjPjo97U_PXXlHVHWGkI7TTF4hHG/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:bg-muted"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <a
            href="https://github.com/Alok-Mishraa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/alokmishra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:alokkmishra33@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="tel:+918081982356"
            aria-label="Phone"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
