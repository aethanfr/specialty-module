import { NextResponse } from "next/server"

export async function GET() {
  const apiKey = process.env.NEWS_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    )
  }

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=${apiKey}`,
      { cache: "no-store" } 
    )

    if (!response.ok) {
      throw new Error("Failed to fetch news")
    }

    const data = await response.json()

    const articles = data.articles.map((article: any) => ({
      title: article.title,
      description: article.description,
      image: article.urlToImage,
    }))

    return NextResponse.json(articles)
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}