import Image from "next/image";
import React from "react";
import { format } from "date-fns/format";

const Telegram = () => {
  return (
    <div>
      <div className="relative ml-auto mr-4 max-w-xs rounded-s-xl rounded-t-xl bg-gradient-to-b from-[#3B9CFB] to-[#1482FD] p-2 text-sm text-white">
        <div className="absolute -right-2 bottom-0 h-2 w-2 bg-[#1482FD] [clip-path:polygon(0_0,0%_100%,100%_100%)]" />
        <p className="break-words underline">https://khxlil.vercel.app</p>
        <div className="mt-1 rounded border-l-4 border-white bg-white/20 p-1">
          <p className="text-xs font-semibold">khxlil.vercel.app</p>
          <p className="text-xs font-semibold">
            Khalil Patiwala | Full Stack Developer
          </p>
          <p className="mt-px text-xs">
            Khalil Patiwala is a Full Stack Developer specializing in Next.js,
            React.js, and TypeScript. With 3 years of experience, he delivers
            high-performance code with a focus on frontend development and
            optimization.
          </p>
          <Image
            src="https://cdn.sanity.io/images/sqj7d0s5/production/c328cf249bf6cb71cc278be02cf01a4f5bff05cf-1200x630.jpg"
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
