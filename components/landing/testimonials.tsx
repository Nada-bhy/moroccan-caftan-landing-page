"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const reviews = [
  {
    quote:
      "I wore my Lalla Rose caftan to my engagement and felt like a queen. The embroidery is beyond anything I've ever seen.",
    name: "Salma B.",
    place: "Casablanca",
  },
  {
    quote:
      "The fit was absolutely perfect. You can feel the love and the hours stitched into every inch of fabric.",
    name: "Amélie R.",
    place: "Paris",
  },
  {
    quote:
      "Soft colours, dreamy silk, and the kindest fitting experience. Maison Lalla is pure poetry.",
    name: "Layla H.",
    place: "Dubai",
  },
]

export function Testimonials() {
  return (
    <section id="stories" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Love Letters
          </span>
          <h2 className="mt-3 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Adored by women everywhere
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="flex flex-col gap-5 rounded-3xl border border-border/60 bg-card p-7 shadow-[0_10px_40px_rgba(190,140,130,0.08)]"
            >
              <Quote className="size-8 text-primary/40" />
              <blockquote className="text-pretty font-serif text-xl leading-relaxed text-foreground">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-2">
                <span className="flex size-11 items-center justify-center rounded-full bg-blush font-serif text-lg font-semibold text-primary">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="font-medium text-foreground">{r.name}</p>
                  <p className="text-sm text-muted-foreground">{r.place}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
