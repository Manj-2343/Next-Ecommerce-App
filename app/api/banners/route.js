import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, link, imageUrl, isPublished } = await request.json();
    const newBanner = await db.banner.create({
      data: {
        title,
        link,
        imageUrl,
        isPublished,
      },
    });
    console.log(newBanner);
    return NextResponse.json(newBanner); // Pass newBanner as the response body
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create the Banner",
        error: error.message,
      },
      { status: 500 } // Pass status code as part of options object
    );
  }
}
