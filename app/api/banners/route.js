import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, link, imageUrl } = await request.json();
    const newBanner = { title, link, imageUrl };
    console.log(newBanner);
    return NextResponse.json(newBanner);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed To create the Banner",
      },
      500
    );
  }
}
