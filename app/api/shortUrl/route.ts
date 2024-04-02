import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { link } = await req.json();
  console.log(link);

  const id = Math.random().toString(36).substring(2, 8);

  try {
    const addLink = await prisma.link.create({
      data: {
        linkUrl: link,
        linkId: id,
      },
    });
    console.log(addLink);
    return NextResponse.json({ message: "Success" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Something went wrong" });
  }
};
