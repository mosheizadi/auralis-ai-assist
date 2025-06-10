"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Code, BarChart, Layers, Users } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-6 w-6 text-cyan-400" />,
    title: "Lightning Fast",
    description: "Build and deploy AI models with unprecedented speed and efficiency.",
  },
  {
    icon: <Shield className="h-6 w-6 text-cyan-400" />,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption for all your AI data.",
  },
  {
    icon: <Code className="h-6 w-6 text-cyan-400" />,
    title: "Developer Friendly",
    description: "Intuitive APIs and comprehensive documentation for seamless integration.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-cyan-400" />,
    title: "Advanced Analytics",
    description: "Gain insights into your AI models with detailed performance metrics.",
  },
  {
    icon: <Layers className="h-6 w-6 text-cyan-400" />,
    title: "Scalable Infrastructure",
    description: "Automatically scale resources based on your application's needs.",
  },
  {
    icon: <Users className="h-6 w-6 text-cyan-400" />,
    title: "Collaborative Workspace",
    description: "Work together with your team in real-time on AI projects.",
  },
]

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-lg p-6 hover:border-white/10 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="flex flex-col h-full">
            <div className="rounded-full bg-white/[0.03] p-3 w-fit mb-4">{feature.icon}</div>
            <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
            <p className="text-zinc-400 text-sm">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
