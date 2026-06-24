const columns = [
  { title: "Shop", links: ["New arrivals", "Caftans", "Takchitas", "Accessories"] },
  { title: "Maison", links: ["Our story", "The atelier", "Sustainability", "Journal"] },
  { title: "Care", links: ["Contact", "Shipping", "Bespoke fittings", "Care guide"] },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40 px-4 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-3xl font-semibold text-foreground">
              Maison <span className="italic text-primary">Lalla</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Handcrafted Moroccan caftans, woven with tenderness in Fès since 1968.
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
                {c.title}
              </p>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 py-7 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Maison Lalla. Crafted with love.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">Instagram</a>
            <a href="#" className="transition-colors hover:text-primary">Pinterest</a>
            <a href="#" className="transition-colors hover:text-primary">Privacy</a>
          </div>
        </div>
      </div>

      <p className="pointer-events-none select-none pt-6 text-center font-serif text-[18vw] font-semibold leading-none tracking-tight text-primary/8">
        Lalla
      </p>
    </footer>
  )
}
