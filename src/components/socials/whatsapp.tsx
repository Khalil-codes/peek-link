import { CheckCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import { format } from "date-fns/format";
import { Meta } from "@/types";

type Props = {
  meta: Meta;
};

// rounded bg-[#efeae2] py-2 dark:bg-[#0b141a]

const Whatsapp = ({ meta }: Props) => {
  return (
    <div>
      <div className="relative ml-auto mr-4 max-w-xs rounded-b-lg rounded-s-lg bg-[#d9fdd3] p-1 dark:bg-[#005c4b]">
        <div className="absolute -right-4 top-0 h-4 w-4 bg-[#d9fdd3] [clip-path:polygon(80%_0,0_0,0_80%)] dark:bg-[#005c4b]"></div>
        <div className="overflow-hidden rounded-lg">
          <Image
            src={meta.og.image || meta.favicon}
            alt="Khalil Patiwala"
            width={320}
            height={170}
            className="h-auto w-80"
          />
          <div className="bg-[#d1f4cc] p-2 dark:bg-[#025144]">
            <p className="text xs line-clamp-2 font-semibold">
              {meta.og.title || meta.title}
            </p>
            <p className="truncate text-xs">
              {meta.og.description || meta.description}
            </p>
          </div>
        </div>
        <div className="flex min-w-0 items-center justify-between gap-2 px-2 py-1">
          <p className="w-[85%] text-sm font-medium text-[#027eb5] underline dark:text-[#53bdeb]">
            {meta.url}
          </p>
        </div>
        <div className="absolute bottom-0 right-2 mb-1 flex items-center gap-1 text-[10px] text-gray-400/70">
          <span>{format(new Date(), "hh:mm aa")}</span>
          <CheckCheck size={14} className="text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;
