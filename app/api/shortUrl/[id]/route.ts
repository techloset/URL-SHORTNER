import { NextResponse } from "next/server";
import { main } from "../route";
import { PrismaClient } from "@prisma/client";

export const GET = async (req: Request, res: NextResponse) => {
  const prisma = new PrismaClient();

  try {
    const id = req.url.split("/shortUrl/")[1];
    await main();
    const post = await prisma.link.findFirst({ where: { id } });
    if (!post) {
      return NextResponse.json({ message: "Something went wrong" });
    }
    return NextResponse.json({ message: "Success", post });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", error });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  const prisma = new PrismaClient();

  try {
    const id = req.url.split("/shortUrl/")[1];
    const { link, newId } = await req.json();
    await main();
    const post = await prisma.link.update({
      data: {
        longUrl: link,
        shortUrl: newId,
      },
      where: { id: id },
    });
    return NextResponse.json({ message: "Success", post });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", error });
  } finally {
    await prisma.$disconnect();
  }
};

export const DELETE = async (req: Request, res: NextResponse) => {
  const prisma = new PrismaClient();

  try {
    const id = req.url.split("/shortUrl/")[1];
    const post = await prisma.link.delete({ where: { id: id } });
    return NextResponse.json({ message: "Success", post });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", error });
  } finally {
    await prisma.$disconnect();
  }
};
