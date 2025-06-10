import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

export async function POST(req: Request) {
  try {
    const { query } = await req.json()

    if (!query || typeof query !== "string") {
      return new Response(JSON.stringify({ error: "Invalid query" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const { text } = await generateText({
      model: groq("llama3-70b-8192"),
      prompt: `Search query: "${query}"\n\nProvide a concise and helpful response about this AI-related topic:`,
      system:
        "You are AurealisX, an advanced AI assistant specializing in artificial intelligence topics. Provide helpful, accurate, and concise information.",
    })

    return new Response(JSON.stringify({ result: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Search error:", error)
    return new Response(JSON.stringify({ error: "Failed to process search" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
