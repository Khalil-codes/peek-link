import Image from "next/image";
import React from "react";

const X = () => {
  return (
    <div>
      <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10">
        <Image
          alt="Khalil Patiwala"
          width={620}
          height={350}
          src="https://cdn.sanity.io/images/sqj7d0s5/production/c328cf249bf6cb71cc278be02cf01a4f5bff05cf-1200x630.jpg"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-2 left-2 rounded bg-[#000000c4] px-1.5 py-0.5">
          <p className="text-sm text-white">
            Khalil Patiwala | Full Stack Developer
          </p>
        </div>
      </div>
      <p className="mt-2 text-[13px] text-gray-500">
        From https://khxlil.vercel.app
      </p>
    </div>
  );
};

export default X;
