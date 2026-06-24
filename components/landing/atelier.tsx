"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const steps = [
  { n: "01", title: "Sketched by hand", text: "Every silhouette begins as a drawing in our Fès atelier." },
  { n: "02", title: "Hand embroidered", text: "Master maâlems thread real gold into pure silk, stitch by stitch." },
  { n: "03", title: "Fitted to you", text: "Each caftan is tailored to your exact measurements with love." },
]

export function Atelier() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="atelier" ref={ref} className="relative overflow-hidden bg-secondary/40 px-4 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <motion.div style={{ y }} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-border/60 shadow-[0_30px_80px_rgba(190,140,130,0.2)]">
            <Image
              src="/caftan-craft.png"
              alt="Artisan hand-embroidering gold thread onto pink silk"
              fill
              className="object-cover"
            />
          </div>
          <motion.div
            animate={{ rotate: [0, 6, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-4 size-28 rounded-full border border-primary/30 bg-card/90 p-3 shadow-lg backdrop-blur"
          >
            <div className="flex size-full flex-col items-center justify-center rounded-full bg-blush/50 text-center">
              <span className="font-serif text-xl font-semibold text-primary">Est.</span>
              <span className="text-xs text-foreground/70">1968</span>
            </div>
          </motion.div>
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium uppercase tracking-[0.25em] text-primary"
          >
            The Atelier
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-3 max-w-md text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl"
          >
            Slow craft, made with <span className="italic text-primary">soul</span>
          </motion.h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            For three generations our family has kept the art of Moroccan caftan
            making alive — honouring centuries of tradition while letting each
            gown feel light, modern and unmistakably you.
          </p>

          <div className="mt-10 flex flex-col gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group flex items-start gap-5 bg-card p-6 transition-colors hover:bg-blush/20"
              >
                <span className="font-serif text-3xl font-semibold text-primary/40 transition-colors group-hover:text-primary">
                  {s.n}
                </span>
                <div>
                  <p className="font-serif text-xl font-medium text-foreground">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
