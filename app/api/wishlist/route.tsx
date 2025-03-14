import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, phone, role } = await req.json();

    if (!email || !role) {
      return NextResponse.json({ message: "Email and Role are required" }, { status: 400 });
    }

    // Save data to PostgreSQL (Supabase)
    const newEntry = await prisma.wishlist.create({
      data: { email, phone, role },
    });

    return NextResponse.json({ message: "Successfully added to wishlist!", data: newEntry }, { status: 200 });
  } catch (error) {
    console.error("Error saving to database:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
