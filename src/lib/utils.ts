import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBaseUrl = () => {
  const url = new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.NEXT_PUBLIC_VERCEL_URL ||
      "http://localhost:3000"
  );

  return url;
};
