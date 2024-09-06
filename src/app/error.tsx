"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container absolute inset-0 mx-auto flex h-full w-full max-w-2xl flex-col items-center justify-center">
      <h2>Something went wrong!</h2>
      <Button variant="outline" className="mt-4" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
