import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const prisma = new PrismaClient();

  const { link } = await req.json();
  console.log(link);

  const id = Math.random().toString(36).substring(2, 16);

  try {
    const addLink = await prisma.link.create({
      data: {
        longUrl: link.link,
        shortUrl: id,
      },
    });
    console.log("addLink =>", addLink);
    return NextResponse.json({
      message: "Everything seems to be ok",
      linkId: id,
    });
  } catch (err) {
    console.log("Prisma error:", err);
    return NextResponse.json({ message: "Something went wrong" });
  }
};
