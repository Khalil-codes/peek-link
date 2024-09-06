import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return Response.json({ message: "Missing url" }, { status: 400 });
  }

  const response = await fetch(url, { method: "HEAD" }).catch(() => null);

  if (!response?.ok) {
    return Response.json({ url: "invalid" }, { status: 404 });
  }

  return Response.json({
    status: response.status,
    url: "valid",
  });
};
