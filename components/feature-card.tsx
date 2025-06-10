import type { LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  // Dynamically get the icon from Lucide
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon

  return (
    <Card className="border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-2">
            {Icon && <Icon className="h-6 w-6 text-cyan-400" />}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-400">{description}</p>
      </CardContent>
    </Card>
  )
}
