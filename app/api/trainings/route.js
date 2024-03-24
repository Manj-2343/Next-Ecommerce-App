import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug,categoryId, imageUrl, description,
      isPublished,content
       } = await request.json();
    const newTrainings = { title, slug,categoryId, imageUrl, description,isPublished,content };
    console.log(newTrainings);
    return NextResponse.json(newTrainings);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed To create the Trainings",
        error: error.message,
      },
      500
    );
  }
}
