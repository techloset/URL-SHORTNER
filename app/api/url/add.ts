import { NextResponse } from "next/server";

export default (req: Request, res: NextResponse) => {
  const url = req.body;
  console.log(url);
};
