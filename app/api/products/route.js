import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const productData= await request.json();
    console.log(productData);
    return NextResponse.json(productData);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed To create the Product",
        error: error.message,
      },
      500
    );
  }
}
