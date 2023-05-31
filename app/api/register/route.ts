import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function POST(  request: Request, ) {
  try{
    const body = await request.json();
    const { 
      email,
      name,
      password,
     } = body;
     const userExists = await prisma.user.findUnique({
      where: {
        email: email
      }
    });

    if (userExists) {
      
    return NextResponse.json({ error: 'This email already exists' }, { status: 500 });
    }
     const hashedPassword = await bcrypt.hash(password, 12);
     const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      }
    });
    return NextResponse.json(user);
  }catch(err){
    return NextResponse.json({ error: err }, { status: 500 });
  }
}