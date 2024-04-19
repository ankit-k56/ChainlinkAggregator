import BytestoString from "@/utils/BytestoString";
import { NextResponse } from "next/server";
export const GET = (req: Request, res: Response) => {
  const string1 = BytestoString(
    "0x6060606a736f6e0a7b0a202022424a50223a2035302c0a202022425350223a00"
  );
  console.log(string1);
  NextResponse.json({ message: string1 });
};
