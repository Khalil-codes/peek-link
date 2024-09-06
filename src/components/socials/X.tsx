import { Meta } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  meta: Meta;
};

const X = ({ meta }: Props) => {
  return (
    <div>
      <div className="relative max-h-80 w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10">
        <Image
          alt={meta.title}
          width={620}
          height={350}
          src={meta.twitter.image || meta.og.image || meta.favicon}
          className="aspect-auto object-cover"
        />
        <div className="absolute bottom-2 left-2 max-w-[95%] rounded bg-[#000000c4] px-1.5 py-0.5">
          <p className="truncate text-sm text-white">
            {meta.twitter.title || meta.og.title || meta.title}
          </p>
        </div>
      </div>
      <p className="mt-2 text-[13px] text-gray-500">From {meta.url}</p>
    </div>
  );
};

export default X;
