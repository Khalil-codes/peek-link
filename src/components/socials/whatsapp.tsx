import { CheckCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import { format } from "date-fns/format";

// 0_0,0%_100%,100%_100%

const Whatsapp = () => {
  return (
    <div>
      <div className="relative ml-auto mr-4 max-w-xs rounded-b-lg rounded-s-lg bg-[#D0FECF] p-1 dark:bg-[#154D38]">
        <div className="absolute -right-4 top-0 h-4 w-4 bg-[#D0FECF] [clip-path:polygon(80%_0,0_0,0_80%)] dark:bg-[#154D38]"></div>
        <div className="overflow-hidden rounded-lg">
          <Image
            src="https://cdn.sanity.io/images/sqj7d0s5/production/c328cf249bf6cb71cc278be02cf01a4f5bff05cf-1200x630.jpg"
            alt="Khalil Patiwala"
            width={320}
            height={170}
            className="h-auto w-80"
          />
          <div className="bg-[#CDF4CC] p-2 dark:bg-[#0F3D2C]">
            <p className="text xs line-clamp-2 font-semibold">
              Khalil Patiwala | Full Stack Developer
            </p>
            <p className="truncate text-xs">
              Khalil Patiwala is a Full Stack Developer specializing in Next.js,
              React.js, and TypeScript. With 3 years of experience, he delivers
              high-performance code with a focus on frontend development and
              optimization.
            </p>
          </div>
        </div>
        <div className="flex min-w-0 items-center justify-between gap-2 px-2 py-1">
          <p className="truncate text-sm font-medium text-[#1A8755] underline dark:text-[#43bd85]">
            https://khxlil.vercel.app
          </p>
          <span
            className="iconify i-bx:check-double h-4 w-4 flex-shrink-0 text-blue-600"
            aria-hidden="true"></span>
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
