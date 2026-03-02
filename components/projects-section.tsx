"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { FolderGit2, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Blinkit Sales Analysis Dashboard",
    type: "Power BI | Business Intelligence",
    github:
      "https://github.com/Alok-Mishraa/Blinkit-Sales-Analysis-Power-BI-Dashboard-",
    description:
      "Developed an interactive Power BI dashboard analyzing $1.20M in sales data across multiple outlet types and categories.",
    highlights: [
      "Total Sales: $1.20M",
      "8,523 items analyzed",
      "Identified Tier 3 cities as highest revenue contributors",
      "Found low-fat products outperform regular products",
      "Supermarket Type 1 generated majority revenue",
    ],
    tools: ["Power BI", "Power Query", "DAX", "Data Modeling"],
  },
  {
    title: "Telco Customer Churn Prediction",
    type: "Machine Learning | Classification",
    github:
      "https://github.com/Alok-Mishraa/Customer-Churn-Prediction-End-to-End-Project",
    description:
      "Built an end-to-end machine learning pipeline to predict customer churn using Logistic Regression and Random Forest models.",
    highlights: [
      "Data preprocessing & encoding",
      "Feature scaling",
      "Model evaluation using Accuracy, F1, ROC-AUC",
      "Confusion matrix visualization",
      "Business insights for customer retention",
    ],
    tools: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
  },
  {
    title: "Superstore Sales Analysis & Forecasting",
    type: "Time Series Forecasting | ARIMA",
    github:
      "https://github.com/Alok-Mishraa/Sales-Data-Analysis-Forecasting-Project",
    description:
      "Performed sales analysis and forecasting using ARIMA time-series modeling with automated validation checks.",
    highlights: [
      "Category-wise sales analysis",
      "Region-wise profit analysis",
      "Monthly sales resampling",
      "ARIMA model selection based on AIC",
      "6-month future sales forecasting",
      "Built-in automated tests for validation",
    ],
    tools: ["Python", "Pandas", "NumPy", "Statsmodels", "Matplotlib", "Seaborn"],
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.1)

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <FolderGit2 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Projects
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-primary">
                    {project.type}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-col gap-2">
                  {project.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    View GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
