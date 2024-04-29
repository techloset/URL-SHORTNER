import { authOptions } from "@/libs/authOptions";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
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
    const userUrl = await prisma.userLinks.findMany();
    return NextResponse.json({
      message: "Posts fetched successfully",
      userUrl,
    });
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
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  try {
    await main();
    const { link } = await req.json();
    console.log("Received link:", link);

    const id = Math.random().toString(36).substring(2, 16);

    const addLink = await prisma.userLinks.create({
      data: {
        longUrl: link,
        shortUrl: id,
        clickCount: 0,
        email: email,
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

export const PUT = async (req: NextRequest, shortUrl: any) => {
  try {
    const { shortUrl } = await req.json();
    console.log("Received shortUrl:", shortUrl);

    const url = await prisma.userLinks.findUnique({
      where: { shortUrl },
    });

    if (!url) {
      console.error("URL not found");
      return NextResponse.json({ message: "URL not found" });
    }

    console.log("Found URL:", url);

    const updatedUrl = await prisma.userLinks.update({
      where: { shortUrl },
      data: { clickCount: url.clickCount + 1 },
    });

    console.log("Updated URL:", updatedUrl);

    return NextResponse.json({
      message: "URL count is updated successfully",
      longUrl: updatedUrl.longUrl,
      shortUrl: updatedUrl.shortUrl,
      clickCount: updatedUrl.clickCount,
      id: updatedUrl.id,
    });
  } catch (err) {
    console.error("Error accessing URL:", err);
    return NextResponse.json({ message: "Somethi wrong" });
  }
};
