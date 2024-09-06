import { Meta } from "@/types";
import { Ellipsis, Globe, X } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  meta: Meta;
};

const Linkedin = ({ meta }: Props) => {
  return (
    <div>
      <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-800">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-lg">
              <Image
                className="rounded-full"
                src="https://i.pravatar.cc/300?img=12"
                height={48}
                width={48}
                alt={"Corey S"}
              />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold">Corey S</p>
                <p>•</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Following
                </p>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {" "}
                CEO of PeekLink{" "}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">7h</p>
                <p>•</p>
                <Globe size={14} className="text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Ellipsis size={18} />
            <X size={18} />
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm">Found this cool and beatiful website.</p>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 dark:border-white/10">
          <Image
            alt="Khalil Patiwala"
            width={128}
            height={70}
            src={meta.og.image || meta.favicon}
            className="rounded-lg object-contain"
          />
          <div>
            <p className="text-sm font-semibold">
              {meta.og.title || meta.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {meta.hostname}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linkedin;
