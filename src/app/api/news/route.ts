import { NextResponse } from "next/server"
import { fetchNews } from "@/lib/news"

export async function GET() {
  try {
    const articles = await fetchNews()
    return NextResponse.json(articles)
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}