"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface InteractiveButtonProps {
  children: React.ReactNode
  href: string
  icon: string
}

export default function InteractiveButton({ children, href, icon }: InteractiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Dynamically get the icon from Lucide
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon

  return (
    <Link href={href}>
      <motion.div
        className="relative px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {Icon && (
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              color: isHovered ? "#38bdf8" : "#a1a1aa",
            }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="h-4 w-4" />
          </motion.div>
        )}

        <motion.span
          className="text-sm font-medium"
          animate={{
            color: isHovered ? "#ffffff" : "#a1a1aa",
          }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
      </motion.div>
    </Link>
  )
}
