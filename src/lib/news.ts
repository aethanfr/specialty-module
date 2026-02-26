import { SpecialtyItem } from "@/types/specialty"

export async function fetchNews(): Promise<SpecialtyItem[]> {
  const apiKey = process.env.NEWS_API_KEY

  if (!apiKey) {
    throw new Error("API key not configured")
  }

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=${apiKey}`,
    {
      cache: "no-store",
    }
  )

  if (!response.ok) {
    throw new Error("Failed to fetch news")
  }

  const data = await response.json()

  return data.articles.map(
    (
      article: {
        url?: string
        title?: string
        description?: string
        urlToImage?: string
      },
      index: number
    ) => ({
      id: article.url || String(index),
      title: article.title ?? "No title available",
      description: article.description ?? "No description available",
      image: article.urlToImage ?? "/placeholder.png",
    })
  )
}