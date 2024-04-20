import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const userId = await req.json();

    const userLinks = await prisma.link.findMany({
      where: {
        id: userId,
      },
    });

    return NextResponse.json({
      message: "User's links fetched successfully",
      userLinks,
    });
  } catch (error: any) {
    console.error("Error fetching user's links:", error);
    return NextResponse.json({
      message: "Something went wrong",
      error: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
};
