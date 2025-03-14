import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, businessType } = await req.json();

    if (!email || !businessType) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const newPartner = await prisma.partner.create({
      data: { email, businessType },
    });

    return NextResponse.json({ message: "Application received", data: newPartner }, { status: 200 });
  } catch (error) {
    console.error("Error saving partner application:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
