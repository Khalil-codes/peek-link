import Image from "next/image";
import React from "react";
import { format } from "date-fns/format";
import { Meta } from "@/types";

type Props = {
  meta: Meta;
};

const Telegram = ({ meta }: Props) => {
  return (
    <div>
      <div className="relative ml-auto mr-4 max-w-xs rounded-s-xl rounded-t-xl bg-gradient-to-b from-[#3B9CFB] to-[#1482FD] p-2 text-sm text-white">
        <div className="absolute -right-2 bottom-0 h-2 w-2 bg-[#1482FD] [clip-path:polygon(0_0,0%_100%,100%_100%)]" />
        <p className="break-words underline">https://{meta.hostname}</p>
        <div className="mt-1 rounded border-l-4 border-white bg-white/20 p-1">
          <p className="text-xs font-semibold">{meta.hostname}</p>
          <p className="text-xs font-semibold">{meta.og.title || meta.title}</p>
          <p className="mt-px text-xs">
            {meta.og.description || meta.description}
          </p>
          <Image
            src={meta.og.image || meta.favicon}
            alt="Khalil Patiwala"
            width={300}
            height={150}
            className="mt-2 h-auto w-full rounded"
          />
        </div>
        <p className="my-px text-right text-xs text-white/80">
          {format(new Date(), "hh:mm aa")}
        </p>
      </div>
    </div>
  );
};

export default Telegram;
