"use client";

import { toast } from "@/hooks/use-toast";
import { useEffect, useRef } from "react";

const Error = () => {
  const active = useRef<boolean>(false);

  useEffect(() => {
    if (!active.current) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });

      active.current = true;
    }
  }, [active]);

  return null;
};

export default Error;
