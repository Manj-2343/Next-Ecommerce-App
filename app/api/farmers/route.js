import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      code,
      contactPerson,
      contactPersonPhone,
      email,
      name,
      notes,
      phone,
      physicalAddress,
      terms,
    } = await request.json();
    const newFarmer = {
      code,
      contactPerson,
      contactPersonPhone,
      email,
      name,
      notes,
      phone,
      physicalAddress,
      terms,
    };
    console.log(newFarmer);
    return NextResponse.json(newFarmer);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed To create the Farmer",
        error: error.message,
      },
      500
    );
  }
}
