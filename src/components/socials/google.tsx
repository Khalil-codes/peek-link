import Image from "next/image";
import React from "react";

const Google = () => {
  return (
    <div>
      <div>
        <div className="flex items-center gap-2">
          <span className="relative inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white text-xs ring-gray-200 dark:ring-white/10">
            <Image
              alt={"Khalil Patiwala | Full Stack Developer"}
              className="rounded-full"
              src="https://cdn.sanity.io/images/sqj7d0s5/production/627c2682c5ee0371d48c49d869f28ae96745902a-128x128.svg"
              height={24}
              width={24}
            />
          </span>
          <div>
            <p className="text-sm dark:text-[#dadce0]">khxlil.vercel.app</p>
            <p className="text-xs dark:text-[#bdc1c6]"></p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xl text-[#1a0dab] dark:text-[#99c3ff]">
            Khalil Patiwala | Full Stack Developer
          </p>
          <p className="text-[#474747]dark:text-[#bfbfbf] line-clamp-2 text-sm">
            Khalil Patiwala is a Full Stack Developer specializing in Next.js,
            React.js, and TypeScript. With 3 years of experience, he delivers
            high-performance code with a focus on frontend development and
            optimization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Google;
