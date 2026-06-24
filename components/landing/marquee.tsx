const words = [
  "Hand Embroidery",
  "Pure Silk",
  "Gold Thread",
  "Made in Fès",
  "Timeless Elegance",
  "Bespoke Fittings",
]

export function Marquee() {
  return (
    <div className="relative border-y border-border/60 bg-primary py-5 text-primary-foreground">
      <div className="flex w-max animate-marquee">
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <div key={i} className="flex items-center">
            <span className="px-8 font-serif text-xl italic">{w}</span>
            <span className="text-primary-foreground/50">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
