"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"

const headline = ["Where", "tradition", "is", "woven", "with", "tenderness"]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-32"
    >
      {/* soft decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 size-72 rounded-full bg-blush blur-3xl opacity-50" />
      <div className="pointer-events-none absolute -right-20 bottom-10 size-80 rounded-full bg-sage blur-3xl opacity-40" />
      <div className="pointer-events-none absolute right-1/3 top-10 size-40 rounded-full bg-gold blur-3xl opacity-40" />

      {/* rotating decorative ring */}
      <motion.div
        style={{ y: textY }}
        className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
      >
        <div className="animate-spin-slow size-[640px] rounded-full border border-dashed border-primary/20" />
      </motion.div>

      <motion.div style={{ y: textY }} className="relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur"
        >
          <Sparkles className="size-3.5 text-primary" />
          Handcrafted in Morocco
        </motion.span>

        <h1 className="mx-auto max-w-4xl text-balance font-serif text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`mr-3 inline-block ${
                word === "tenderness" || word === "tradition" ? "italic text-primary" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Each Maison Lalla caftan is hand-embroidered by master artisans — a soft
          celebration of Moroccan heritage, made to make you feel like royalty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#collection"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_rgba(190,120,110,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_40px_rgba(190,120,110,0.45)]"
          >
            Explore the collection
          </a>
          <a
            href="#atelier"
            className="rounded-full border border-border bg-card/60 px-8 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all duration-300 hover:bg-card"
          >
            Our atelier
          </a>
        </motion.div>
      </motion.div>

      {/* hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="relative z-10 mt-14 w-full max-w-md"
      >
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border border-border/60 shadow-[0_30px_80px_rgba(190,140,130,0.25)]"
        >
          <Image
            src="/caftan-hero.png"
            alt="Model wearing a blush pink hand-embroidered Moroccan caftan"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute -left-6 top-10 rounded-2xl border border-border/60 bg-card/90 px-4 py-3 shadow-lg backdrop-blur"
        >
          <p className="font-serif text-2xl font-semibold text-foreground">120+</p>
          <p className="text-xs text-muted-foreground">artisan hours / piece</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute -right-4 bottom-16 rounded-2xl border border-border/60 bg-card/90 px-4 py-3 shadow-lg backdrop-blur"
        >
          <p className="font-serif text-2xl font-semibold text-primary">100%</p>
          <p className="text-xs text-muted-foreground">pure silk &amp; gold thread</p>
        </motion.div>
      </motion.div>

      <motion.a
        href="#collection"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mt-12 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground"
      >
        Scroll
        <ArrowDown className="size-4 animate-bounce" />
      </motion.a>
    </section>
  )
}
