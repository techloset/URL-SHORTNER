import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error("Database Connection Failed:", error);
    throw error;
  }
}

export const GET = async (req: NextRequest) => {
  try {
    await main();
    const posts = await prisma.link.findMany();
    return NextResponse.json({ message: "Posts fetched successfully", posts });
  } catch (error: any) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({
      message: "Something went wrong",
      error: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await main();
    const { link } = await req.json();
    console.log("Received link:", link);

    const id = Math.random().toString(36).substring(2, 16);

    const addLink = await prisma.link.create({
      data: {
        longUrl: link,
        shortUrl: id,
        clickCount: 0,
      },
    });
    console.log("addLink =>", addLink);
    return NextResponse.json({
      message: "Link created successfully",
      linkId: addLink.shortUrl,
      id: addLink.id,
    });
  } catch (err) {
    console.error("Error creating link:", err);
    return NextResponse.json({ message: "Something went wrong" });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    await main();
    const { linkId } = await req.json();

    const updatedLink = await prisma.link.update({
      where: { id: linkId },
      data: {
        clickCount: {
          increment: 1,
        },
      },
    });
    console.log(updatedLink);

    return NextResponse.json({ message: "Click count updated successfully" });
  } catch (err) {
    console.error("Error updating click count:", err);
    return NextResponse.json({ message: "Something went wrong" });
  } finally {
    await prisma.$disconnect();
  }
};
