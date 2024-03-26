import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, imageUrl, description, isPublished } =
      await request.json();
    const existingCategory = await db.category.findUnique({
      where: {
        slug,
      },
    });
    if (existingCategory) {
      return NextResponse.json(
        {
          data: null,
          message: "Category Already exist",
        },
        { status: 409 }
      );
    }
    const newCategory = await db.category.create({
      data: { title, slug, imageUrl, description, isPublished },
    });
    return NextResponse.json(newCategory);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed To create the Category",
        error: error.message,
      },
      500
    );
  }
}

export async function GET(request) {
  try {
    const categories = await db.banner.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      {
        message: "Failed To fetch the category",
        error: error.message,
      },
      500
    );
  }
}
