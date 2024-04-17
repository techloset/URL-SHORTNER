import { NextResponse } from "next/server";
import prismadb from "@/libs/prismadb";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

export async function POST(req: Request) {
  const prismadb = new PrismaClient();

  try {
    const body = await req.json();

    const { email, password } = body;

    if (!email || !password) {
      return new NextResponse("Missing data", { status: 500 });
    }

    const userAlreadyExist = await prismadb.users.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExist?.id) {
      return new NextResponse("User already exist", { status: 500 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await prismadb.users.create({
      data: {
        email: email,
        hashedPassword: hashedPassword,
      },
    });

    return NextResponse.json(newUser);
  } catch (err: any) {
    console.log("REGISTER_ERR: " + err);
    return new NextResponse(err, { status: 500 });
  }
}
