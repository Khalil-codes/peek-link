import { Meta } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  meta: Meta;
};

const Discord = ({ meta }: Props) => {
  return (
    <div>
      <p className="text-sm text-[#006CE7] dark:text-[#05A8FC]">
        https://{meta.hostname}
      </p>
      <div className="mt-px max-w-sm rounded-md border-l-4 border-gray-300 bg-gray-100 p-4 dark:border-white/10 dark:bg-gray-800">
        <p className="my-2 text-sm font-semibold text-[#006CE7] dark:text-[#05A8FC]">
          {meta.og.title || meta.title}
        </p>
        <p className="text-xs text-gray-800 dark:text-gray-200">
          {meta.og.description || meta.description}
        </p>
        <Image
          src={meta.og.image || meta.favicon}
          alt={meta.title}
          width={350}
          height={160}
          className="mt-2 h-40 w-full rounded object-cover"
        />
      </div>
      <div className="mt-1 flex items-center gap-1">
        <span className="rounded-md bg-gray-200 px-1.5 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-200">
          {" "}
          🚀 16{" "}
        </span>
      </div>
    </div>
  );
};

export default Discord;
