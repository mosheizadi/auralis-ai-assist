"use client"

import { motion } from "framer-motion"
import { Mail, Github, FileText, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const integrations = [
  {
    icon: <Mail className="h-6 w-6 text-cyan-400" />,
    title: "Email Integration",
    description:
      "Connect your email to automatically analyze incoming messages, draft responses, and categorize important information.",
    features: ["Smart email summarization", "AI-powered response suggestions", "Automated email categorization"],
  },
  {
    icon: <Github className="h-6 w-6 text-cyan-400" />,
    title: "GitHub Integration",
    description:
      "Enhance your development workflow with AI-powered code analysis, suggestions, and automated documentation.",
    features: ["Automated code reviews", "AI-generated documentation", "Smart issue prioritization"],
  },
  {
    icon: <FileText className="h-6 w-6 text-cyan-400" />,
    title: "Document Processing",
    description:
      "Extract insights from documents, generate summaries, and automate data entry with our advanced document processing.",
    features: ["Intelligent data extraction", "Document summarization", "Automated form filling"],
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-cyan-400" />,
    title: "Analytics Integration",
    description: "Connect your analytics platforms to gain AI-powered insights and predictions from your data.",
    features: ["Predictive analytics", "Anomaly detection", "Automated reporting"],
  },
]

export default function IntegrationSection() {
  return (
    <section id="integrations" className="w-full py-24 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            className="inline-block rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-400 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Integrations
          </motion.div>
          <motion.h2
            className="text-3xl font-bold tracking-tighter md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Seamless connections to your workflow
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-zinc-400 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect AurealisX with your favorite tools and platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrations.map((integration, index) => (
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
                <div className="rounded-full bg-white/[0.03] p-3">{integration.icon}</div>
                <h3 className="text-xl font-medium">{integration.title}</h3>
              </div>
              <p className="text-zinc-400 mb-4 text-sm">{integration.description}</p>
              <ul className="space-y-2 text-zinc-400 mb-4">
                {integration.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
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
                      className="h-4 w-4 text-cyan-400"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="sm" className="text-xs border-white/10 hover:bg-white/5 hover:text-white">
                Learn more
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
