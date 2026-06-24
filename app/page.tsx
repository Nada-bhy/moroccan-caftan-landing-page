import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Marquee } from "@/components/landing/marquee"
import { Collection } from "@/components/landing/collection"
import { Atelier } from "@/components/landing/atelier"
import { Testimonials } from "@/components/landing/testimonials"
import { Newsletter } from "@/components/landing/newsletter"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <Collection />
      <Atelier />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
