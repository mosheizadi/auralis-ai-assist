"use client"

import { motion } from "framer-motion"
import { FileText, Code, BookOpen, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

const docItems = [
  {
    icon: <FileText className="h-6 w-6 text-cyan-400" />,
    title: "Documentation",
    description: "Comprehensive guides to help you get started with AurealisX.",
    link: "#",
  },
  {
    icon: <Code className="h-6 w-6 text-cyan-400" />,
    title: "API Reference",
    description: "Detailed API documentation for developers.",
    link: "#",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-cyan-400" />,
    title: "Tutorials",
    description: "Step-by-step tutorials for common use cases.",
    link: "#",
  },
  {
    icon: <Terminal className="h-6 w-6 text-cyan-400" />,
    title: "Examples",
    description: "Real-world examples to help you build faster.",
    link: "#",
  },
]

export default function DocsSection() {
  return (
    <section id="docs" className="w-full py-24 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            className="inline-block rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-400 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Resources
          </motion.div>
          <motion.h2
            className="text-3xl font-bold tracking-tighter md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Learn how to build with AurealisX
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-zinc-400 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our documentation, tutorials, and examples to get started quickly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {docItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-lg p-6 hover:border-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-white/[0.03] p-3">{item.icon}</div>
                <h3 className="text-xl font-medium">{item.title}</h3>
              </div>
              <p className="text-zinc-400 mb-4 text-sm">{item.description}</p>
              <Button variant="outline" size="sm" className="text-xs border-white/10 hover:bg-white/5 hover:text-white">
                Explore
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      </div>
    </section>
  )
}
