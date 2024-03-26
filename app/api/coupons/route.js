import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, couponCode, expiryDate, isPublished } = await request.json();
    const newCoupon = await db.coupon.create({
      data: {
        title,
        couponCode,
        expiryDate,
        isPublished,
      },
    });
    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed To create the Coupon",
        error: error.message,
      },
      500
    );
  }
}

export async function GET(request) {
  try {
    const coupons = await db.coupon.findMany({
      orderBy:{
        createdAt:"desc"
      }
    });
    console.log("Coupons:", coupons);
    return NextResponse.json(coupons);
  } catch (error) {
    console.error("Error fetching coupons:", error);
    return NextResponse.json(
      {
        message: "Failed To fetch the Coupon",
        error: error.message,
      },
      500
    );
  }
}
