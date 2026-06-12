import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const cookieLang = req.cookies.get("lang")?.value;

  const lang = cookieLang || "pt";

  const res = NextResponse.next();
  res.headers.set("x-lang", lang);

  return res;
}