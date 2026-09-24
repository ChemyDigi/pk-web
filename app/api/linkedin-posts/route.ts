import { NextResponse } from "next/server";
import { initialLinkedInPosts, LinkedInPost } from "@/data/linkedinPosts";

export async function GET() {
  const feedUrl = process.env.LINKEDIN_FEED_URL;

  // If a live third-party aggregator feed (SociableKit, Curator, RSS.app, etc.) is configured:
  if (feedUrl) {
    try {
      const response = await fetch(feedUrl, {
        next: { revalidate: 3600 }, // Cache and revalidate every hour
      });

      if (response.ok) {
        const data = await response.json();
        // Return external live posts if formatted, otherwise fallback to curated
        if (Array.isArray(data) && data.length > 0) {
          return NextResponse.json({
            source: "live",
            posts: data.slice(0, 8),
          });
        }
      }
    } catch (error) {
      console.error("Error fetching live LinkedIn feed:", error);
    }
  }

  // Baseline: return the 8 curated authentic posts with immediate high performance
  return NextResponse.json({
    source: "curated",
    posts: initialLinkedInPosts,
  });
}
