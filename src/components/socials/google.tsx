import { Meta } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  meta: Meta;
};

const Google = ({ meta }: Props) => {
  return (
    <div>
      <div>
        <div className="flex items-center gap-2">
          <span className="relative inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white text-xs ring-gray-200 dark:ring-white/10">
            <Image
              alt={meta.title}
              className="rounded-full"
              src={meta.favicon}
              height={24}
              width={24}
            />
          </span>
          <div>
            <p className="text-sm dark:text-[#dadce0]">{meta.hostname}</p>
            <p className="text-xs dark:text-[#bdc1c6]"></p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xl text-[#1a0dab] dark:text-[#99c3ff]">
            {meta.title}
          </p>
          <p className="text-[#474747]dark:text-[#bfbfbf] line-clamp-2 text-sm">
            {meta.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Google;
