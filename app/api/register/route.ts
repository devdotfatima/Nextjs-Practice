import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, password } = body;
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists) {
      return NextResponse.json(
        { error: "This email already exists" },
        { status: 409 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
