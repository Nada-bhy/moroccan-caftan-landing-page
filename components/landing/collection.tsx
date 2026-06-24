"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

type Piece = {
  id: string
  name: string
  tag: string
  price: string
  image: string
  swatch: string
  note: string
}

const pieces: Piece[] = [
  {
    id: "blush",
    name: "Lalla Rose",
    tag: "Blush Silk",
    price: "$1,240",
    image: "/caftan-blush.png",
    swatch: "var(--blush)",
    note: "A whisper of pink silk traced with delicate gold sfifa braiding.",
  },
  {
    id: "mint",
    name: "Lalla Yasmine",
    tag: "Sage Mint",
    price: "$1,380",
    image: "/caftan-mint.png",
    swatch: "var(--sage)",
    note: "Soft sage chiffon adorned with pearl beadwork and silver thread.",
  },
  {
    id: "gold",
    name: "Lalla Nour",
    tag: "Champagne Gold",
    price: "$1,560",
    image: "/caftan-gold.png",
    swatch: "var(--gold)",
    note: "Champagne satin layered with ivory embroidery and tiny crystals.",
  },
]

export function Collection() {
  const [active, setActive] = useState(0)
  const piece = pieces[active]

  return (
    <section id="collection" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-medium uppercase tracking-[0.25em] text-primary"
            >
              The Collection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-3 max-w-xl text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl"
            >
              Three signature caftans, endlessly adored
            </motion.h2>
          </div>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            Hover or tap a piece to explore its colour story. Every gown is made
            to order and tailored to you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* main feature image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 bg-secondary/40 sm:aspect-[5/4] lg:aspect-auto lg:min-h-[560px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={piece.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image src={piece.image} alt={piece.name} fill className="object-cover" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-foreground/40 to-transparent p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={piece.id + "-info"}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-serif text-3xl font-semibold text-background">{piece.name}</p>
                  <p className="text-sm text-background/85">{piece.note}</p>
                </motion.div>
              </AnimatePresence>
              <span className="rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground shadow">
                {piece.price}
              </span>
            </div>
          </div>

          {/* selectable list */}
          <div className="flex flex-col gap-4">
            {pieces.map((p, i) => (
              <motion.button
                key={p.id}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group flex items-center gap-5 rounded-3xl border p-4 text-left transition-all duration-300 ${
                  active === i
                    ? "border-primary/40 bg-card shadow-[0_12px_40px_rgba(190,140,130,0.18)]"
                    : "border-border/60 bg-card/40 hover:bg-card/70"
                }`}
              >
                <div
                  className="relative size-20 shrink-0 overflow-hidden rounded-2xl"
                  style={{ backgroundColor: p.swatch }}
                >
                  <Image src={p.image} alt={p.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</p>
                  <p className="font-serif text-2xl font-medium text-foreground">{p.name}</p>
                </div>
                <span
                  className={`flex size-10 items-center justify-center rounded-full transition-all duration-300 ${
                    active === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground group-hover:bg-primary/15"
                  }`}
                >
                  <ArrowUpRight className="size-5" />
                </span>
              </motion.button>
            ))}

            <div className="mt-2 flex items-center gap-3 rounded-3xl border border-dashed border-primary/30 bg-blush/30 p-5">
              <span className="font-serif text-2xl italic text-primary">Lalla</span>
              <p className="text-sm leading-relaxed text-foreground/70">
                Can&apos;t decide? Book a private styling session and we&apos;ll
                design a one-of-a-kind caftan just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
