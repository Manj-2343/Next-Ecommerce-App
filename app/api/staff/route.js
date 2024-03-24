import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const staffData= await request.json();
    console.log(staffData);
    return NextResponse.json(staffData);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed To create the staff",
        error: error.message,
      },
      500
    );
  }
}
