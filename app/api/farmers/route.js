import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // code,
    // contactPerson,
    // contactPersonPhone,
    // email,
    // name,
    // notes,
    // phone,
    // physicalAddress,
    // terms,
    // isPublished,
    // profileImageUrl,
    // products,
    // landSize,
    // mainCrop,
    // userId,
    //the whole thing is the farmer data
    const farmerData = await request.json();
    const newFarmerProfile = await db.farmerProfile.create({
      data: {
        code: farmerData.code,
        contactPerson: farmerData.contactPerson,
        contactPersonPhone: farmerData.contactPersonPhone,
        profileImageUrl: farmerData.profileImageUrl,
        email: farmerData.email,
        name: farmerData.name,
        notes: farmerData.notes,
        phone: farmerData.phone,
        physicalAddress: farmerData.physicalAddress,
        terms: farmerData.terms,
        isPublished: farmerData.isPublished,
        landSize: parseFloat(farmerData.landSize),
        mainCrop: farmerData.mainCrop,
        products: farmerData.products,
        userId: farmerData.userId,
      },
    });

    console.log(newFarmerProfile);
    return NextResponse.json(newFarmerProfile);
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
export async function GET(request) {
  try {
    const profile = await db.farmerProfile.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("Profile:", profile);
    return NextResponse.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      {
        message: "Failed To fetch the profile",
        error: error.message,
      },
      500
    );
  }
}
