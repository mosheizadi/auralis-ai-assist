"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!query.trim()) return

    setIsLoading(true)

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      if (!response.ok) {
        throw new Error("Search failed")
      }

      toast({
        title: "Search initiated",
        description: `Searching for: "${query}"`,
      })

      // Reset query after successful search
      setQuery("")
    } catch (error) {
      toast({
        title: "Search failed",
        description: "Please try again later",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      className="w-full relative"
      animate={{
        scale: isFocused ? 1.02 : 1,
        boxShadow: isFocused ? "0 0 20px rgba(56, 189, 248, 0.2)" : "0 0 0px rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.2 }}
    >
      <form onSubmit={handleSearch} className="w-full">
        <div className="relative flex items-center">
          <div className="absolute left-3 h-5 w-5 text-zinc-500">
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
          </div>
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search for AI solutions..."
            className="pl-10 pr-20 py-7 text-base rounded-md border-white/5 bg-white/5 backdrop-blur-sm focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/50 transition-all duration-200"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
          />
          <Button
            type="submit"
            className="absolute right-1 bg-white text-black hover:bg-zinc-200 transition-colors"
            size="sm"
            disabled={isLoading}
          >
            {isLoading ? "Searching..." : "Search"}
          </Button>
        </div>
      </form>

      <AnimatePresence>
        {isFocused && (
          <motion.div
            className="absolute -bottom-12 left-0 right-0 text-xs text-zinc-500 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            Powered by Groq LLaMA 3
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
