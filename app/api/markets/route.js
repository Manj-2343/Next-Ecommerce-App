import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, imageUrl, description, isPublished, categoryIds } =
      await request.json();
    const existingMarket = await db.market.findUnique({
      where: {
        slug,
      },
    });
    if (existingMarket) {
      return NextResponse.json(
        {
          data: null,
          message: "Market Already exist",
        },
        { status: 409 }
      );
    }
    const newMarket = await db.market.create({
      data: {
        title,
        slug,
        imageUrl,
        description,
        isPublished,
        categoryIds,
      },
    });
    console.log(newMarket);
    return NextResponse.json(newMarket);
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed To create the Market",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const markets = await db.market.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(markets);
  } catch (error) {
    console.error("Error fetching market:", error);
    return NextResponse.json(
      {
        message: "Failed To fetch the market",
        error: error.message,
      },
      500
    );
  }
}
