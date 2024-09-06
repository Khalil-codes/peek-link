import axios from "axios";
import type { NextRequest } from "next/server";
import * as cheerio from "cheerio";

const getFaviconUrl = (baseUrl: string, path: string) => {
  if (path.startsWith("http")) return path;
  const url = new URL(path, baseUrl);
  return url.href;
};

export const GET = async (request: NextRequest) => {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return Response.json({ message: "Missing url" });
  }

  try {
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    const title = $("title").text();
    const description = $("meta[name=description]").attr("content") || null;
    const hostname = new URL(url).hostname;
    const _favicon = $("link[rel=icon]").attr("href");
    const favicon = getFaviconUrl(url, _favicon || "/favicon.ico");

    const ogImage = $("meta[property=og:image]").attr("content");
    const ogTitle = $("meta[property=og:title]").attr("content");
    const ogDescription = $("meta[property=og:description]").attr("content");

    const twitterTitle = $("meta[name=twitter:title]").attr("content");
    const twitterImage = $("meta[name=twitter:image]").attr("content");
    const twitterDescription = $("meta[name=twitter:description]").attr(
      "content"
    );

    const og = {
      image: ogImage,
      title: ogTitle,
      description: ogDescription,
    };

    const twitter = {
      title: twitterTitle,
      description: twitterDescription,
      image: twitterImage,
    };

    const meta = {
      title,
      description,
      hostname,
      favicon,
      og,
      twitter,
    };

    return Response.json(meta);
  } catch (error) {
    return Response.json({ message: "Error" }, { status: 400 });
  }
};
