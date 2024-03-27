import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(request) {
  try {
    // extract the credentials
    const { name, email, password, role } = await request.json();
    //check if the the user is already exist
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User Already Exists",
        },
        { status: 409 }
      );
    }
    // encryptPassword=>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });
    console.log(newUser);
    return NextResponse.json(
      {
        data: newUser,
        message: "User created successFully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        message: "Server Error...",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("Users:", users);
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching coupons:", error);
    return NextResponse.json(
      {
        message: "Failed To fetch the user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
