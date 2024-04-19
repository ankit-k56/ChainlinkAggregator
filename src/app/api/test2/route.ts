import BytestoString from "@/utils/BytestoString";
import { NextResponse } from "next/server";
export const GET = (req: Request, res: Response) => {
  const string1 = BytestoString(
    "0x424a502c36302c494e432c32302c4141502c31352c4350492c35000000000000"
  );
  console.log(string1);
  return NextResponse.json({ message: string1 });
};
