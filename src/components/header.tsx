import React from "react";
import { ModeToggle } from "./theme-toggle";
import { ScanSearch } from "lucide-react";

const Header = () => {
  return (
    <header className="container sticky top-4 z-50 mx-auto mt-4 flex max-w-2xl items-center justify-between rounded border border-black/10 bg-white/80 px-4 py-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/50">
      <h1 className="flex items-center gap-2 font-geist-mono text-xl font-semibold tracking-wide">
        <ScanSearch size={24} /> PeekLink
      </h1>
      <ModeToggle />
    </header>
  );
};

export default Header;
