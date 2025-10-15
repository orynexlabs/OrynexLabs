"use client";
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

// Lazy-load globe to avoid SSR issues

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
    >

      {/* 🔹 Main content */}
      <div className="container-width pt-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Building the Future of{' '}
            <span className="text-primary-hero">Decentralized Work</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Orynex Labs is a blockchain research and development company focused on creating
            infrastructure for the future of work. We build scalable, decentralized solutions
            that empower organizations and individuals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base w-full sm:w-auto">
             <a href="#projects">Explore Our Projects</a>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-primary w-full sm:w-auto hover:bg-primary/10 hover:text-primary"
            >
              <a href="#faq">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
