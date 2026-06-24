"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Send } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail("")
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contact" className="px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-border/60 bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12"
      >
        <div className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-gold/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full bg-blush/30 blur-3xl" />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance font-serif text-4xl font-medium leading-tight sm:text-5xl">
            Join the Maison and receive first looks
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/80">
            Be the first to see new pastel collections, private fittings and
            stories from our atelier.
          </p>

          <form
            onSubmit={submit}
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-6 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/60 outline-none transition focus:border-primary-foreground/60"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:scale-105"
            >
              {sent ? (
                <>
                  <Check className="size-4" /> Joined
                </>
              ) : (
                <>
                  <Send className="size-4" /> Subscribe
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
