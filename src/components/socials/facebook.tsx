import { Meta } from "@/types";
import { Forward, MessageCircle, Send, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  meta: Meta;
};

const Facebook = ({ meta }: Props) => {
  return (
    <div>
      <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-base ring-gray-200 dark:ring-white/10">
                <Image
                  width={40}
                  height={40}
                  alt="Khalil"
                  className="h-10 w-10 rounded-full text-base"
                  src="https://github.com/khalil-codes.png"
                />
              </span>
              <div>
                <p className="font-medium">Khalil</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-500 dark:text-gray-300">
                    2h ago
                  </p>
                  <span
                    className="iconify i-solar:users-group-rounded-bold h-4 w-4"
                    aria-hidden="true"></span>
                </div>
              </div>
            </div>
            <span
              className="iconify i-ph:dots-three-outline-fill"
              aria-hidden="true"></span>
          </div>
          <p className="mt-3 text-sm text-[#0064d1] dark:text-[#5AA7FF]">
            https://{meta.hostname}
          </p>
        </div>
        <div>
          <Image
            width={620}
            height={330}
            alt={meta.title}
            src={meta.og.image || meta.favicon}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative bg-gray-200 px-4 py-2 dark:bg-gray-700">
          <span className="absolute -top-3 right-8 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800">
            <span
              className="iconify i-bi:info h-6 w-6"
              aria-hidden="true"></span>
          </span>
          <p className="text-sm uppercase text-[#65676B] dark:text-[#B0B3B8]">
            {meta.hostname}
          </p>
          <p className="text-[17px] font-semibold text-[#050505] dark:text-gray-100">
            {meta.og.title || meta.title}
          </p>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-4 font-medium text-gray-600 dark:text-[#B0B3B8]">
            <div className="flex items-center justify-center gap-2">
              <ThumbsUp size={20} />
              <span className="leading-none">Like</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              <p className="leading-none">Comment</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Forward size={20} />
              <p className="leading-none">Send</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Send size={20} />
              <p className="leading-none">Share</p>
            </div>
          </div>
          <hr className="my-3 dark:border-white/10" />
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-sm ring-gray-200 dark:ring-white/10">
              <Image
                width={40}
                height={40}
                alt="Khalil"
                className="w-10 rounded-full object-cover text-base"
                src="https://github.com/khalil-codes.png"
              />
            </span>
            <div className="flex-1 rounded-full bg-gray-200 p-2 px-4 text-sm text-gray-300 dark:bg-gray-700">
              <p>Comment as Khalil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facebook;
