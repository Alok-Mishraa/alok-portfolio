"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Send, Linkedin, Github, Loader2 } from "lucide-react"

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, 0.2)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    // Simulate sending
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setTimeout(() => setSent(false), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Send className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Get In Touch
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Your message..."
                  className="rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : sent ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Links */}
            <div className="flex flex-col gap-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Feel free to reach out if you want to collaborate on a project,
                have a job opportunity, or just want to connect. I&apos;m always
                open to discussing data science, analytics, and new ideas.
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="https://linkedin.com/in/alokmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground hover:shadow-lg hover:shadow-primary/5"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  Connect on LinkedIn
                </a>
                <a
                  href="https://github.com/Alok-Mishraa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground hover:shadow-lg hover:shadow-primary/5"
                >
                  <Github className="h-5 w-5 text-primary" />
                  View GitHub
                </a>
                <a
                  href="mailto:alokkmishra33@gmail.com"
                  className="inline-flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground hover:shadow-lg hover:shadow-primary/5"
                >
                  <Send className="h-5 w-5 text-primary" />
                  alokkmishra33@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
