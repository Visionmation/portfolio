import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VideoGrid } from "@/components/video-grid"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-950 dark:to-gray-900">
      <AnimatedBackground />
      <Header />
      <Hero />
      <VideoGrid />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
