import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    console.log("User:", user);
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      {
        message: "Failed To fetch the user",
        error: error.message,
      },
      500
    );
  }
}
