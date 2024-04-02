import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      slug,
      categoryId,
      imageUrl,
      description,
      isPublished,
      content,
    } = await request.json();
    // check if this training is already exist
    const existingTraining = await db.training.findUnique({
      where: {
        slug,
      },
    });
    if (existingTraining) {
      return NextResponse.json(
        {
          data: null,
          message: "Training With Name  Already exist",
        },
        { status: 409 }
      );
    }
    const newTraining = await db.training.create({
      data: {
        title,
        slug,
        categoryId,
        imageUrl,
        description,
        isPublished,
        content,
      },
    });
    console.log(newTraining);
    return NextResponse.json(newTraining);
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed To create the Training",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const trainings = await db.training.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(trainings);
  } catch (error) {
    console.error("Error fetching market:", error);
    return new Response(
      JSON.stringify({
        message: "Failed To fetch the trainings",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
