import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      barCode,
      categoryId,
      description,
      farmerId,
      imageUrl,
      isPublished,
      isWholeSale,
      productCode,
      productPrice,
      salePrice,
      sku,
      slug,
      tags,
      title,
      unit,
      wholeSalePrice,
      wholesaleQty,
      productStock,
      qty,
    } = await request.json();
    //check if the product is already exist
    const existingProduct = await db.product.findUnique({
      where: {
        slug,
      },
    });
    if (existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "Product Already exist",
        },
        { status: 409 }
      );
    }
    const newProduct = await db.product.create({
      data: {
        barCode,
        categoryId,
        description,
        userId: farmerId,
        imageUrl,
        isPublished,
        isWholeSale,
        productCode,
        productPrice: parseFloat(productPrice),
        salePrice: parseFloat(salePrice),
        sku,
        slug,
        tags,
        title,
        unit,
        wholeSalePrice: parseFloat(wholeSalePrice),
        wholesaleQty: parseInt(wholesaleQty),
        productStock: parseInt(productStock),
        qty: parseInt(qty),
      },
    });
    return NextResponse.json(newProduct);
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed To create the Product",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      {
        message: "Failed To fetch the category",
        error: error.message,
      },
      500
    );
  }
}
