"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import SearchBar from "@/components/search-bar"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import FeatureGrid from "@/components/feature-grid"
import IntegrationSection from "@/components/integration-section"
import InteractiveButton from "@/components/interactive-button"
import FloatingNav from "@/components/floating-nav"
import DocsSection from "@/components/docs-section"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header
        className="fixed top-0 z-50 w-full border-b border-white/5 backdrop-blur-md transition-all duration-300"
        style={{
          backgroundColor: scrollY > 50 ? "rgba(0, 0, 0, 0.8)" : "transparent",
          borderBottomColor: scrollY > 50 ? "rgba(255, 255, 255, 0.05)" : "transparent",
        }}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 relative">
                <Image src="/logo.png" alt="AurealisX Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                AurealisX
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <InteractiveButton icon="Sparkles" href="#features">
              Explore
            </InteractiveButton>
            <InteractiveButton icon="Puzzle" href="#integrations">
              Integrate
            </InteractiveButton>
            <InteractiveButton icon="BookOpen" href="#docs">
              Learn
            </InteractiveButton>
            <InteractiveButton icon="MessageSquare" href="#community">
              Community
            </InteractiveButton>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden md:flex gap-2">
              <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                Log in
              </Button>
              <Button size="sm" className="bg-white text-black hover:bg-zinc-200 transition-colors">
                Sign up
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden text-zinc-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section
          ref={heroRef}
          className="w-full min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
        >
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-12 z-10">
            <motion.div
              className="space-y-6 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                The Next Generation{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  AI Platform
                </span>
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-[700px] mx-auto">
                Unlock the power of artificial intelligence with AurealisX. Build, deploy, and scale AI solutions faster
                than ever before.
              </p>
            </motion.div>
            <motion.div
              className="w-full max-w-xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <SearchBar />
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="rounded-md bg-white text-black hover:bg-zinc-200 transition-colors">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-md border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
              >
                Watch Demo
              </Button>
            </motion.div>
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onClick={scrollToFeatures}
            >
              <ChevronDown className="h-8 w-8 text-zinc-500 animate-bounce" />
            </motion.div>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10 h-full w-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_80%)]"></div>

            {/* Animated grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,20,20,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,20,20,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            {/* Glowing orb */}
            <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]"></div>
          </div>
        </section>

        <section id="features" className="w-full py-24 md:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <motion.div
                className="inline-block rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-400 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Features
              </motion.div>
              <motion.h2
                className="text-3xl font-bold tracking-tighter md:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Everything you need to build with AI
              </motion.h2>
              <motion.p
                className="max-w-[700px] text-zinc-400 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                AurealisX provides all the tools and infrastructure you need to create powerful AI applications.
              </motion.p>
            </div>

            <FeatureGrid />
          </div>

          {/* Background elements */}
          <div className="absolute inset-0 -z-10 h-full w-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,1),rgba(0,0,0,1)_80%)]"></div>
          </div>
        </section>

        <IntegrationSection />
        <DocsSection />

        <section id="community" className="w-full py-24 md:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
                  Join our growing{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    AI community
                  </span>
                </h2>
                <p className="text-zinc-400 md:text-xl">
                  Connect with thousands of developers and companies building the future with AurealisX.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-md bg-white text-black hover:bg-zinc-200 transition-colors">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-md border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                >
                  Join Discord
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Background elements */}
          <div className="absolute inset-0 -z-10 h-full w-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_80%)]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-white/5 py-8">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 relative">
                  <Image src="/logo.png" alt="AurealisX Logo" fill className="object-contain" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  AurealisX
                </span>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                Building the future of AI development with powerful, accessible tools for everyone.
              </p>
              <p className="text-sm text-zinc-500">© 2025 AurealisX. All rights reserved.</p>
            </div>
            <div>
              <h3 className="font-medium text-white mb-3">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <FloatingNav />
    </div>
  )
}
