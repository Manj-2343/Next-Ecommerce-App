import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, logoUrl, description, isPublished } =
      await request.json();
    const newMarket = { title, slug, logoUrl, description, isPublished };
    console.log(newMarket);
    return NextResponse.json(newMarket);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed To create the Market",
        error: error.message,
      },
      500
    );
  }
}
