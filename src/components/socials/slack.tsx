import Image from "next/image";
import React from "react";

const Slack = () => {
  return (
    <div>
      <p className="text-sm text-[#006CE7] dark:text-[#05A8FC]">
        https://khxlil.vercel.app
      </p>
      <div className="mt-2 max-w-sm border-l-4 border-gray-300 px-3 dark:border-white/10">
        <p className="mb-px text-sm font-semibold text-[#006CE7] dark:text-[#05A8FC]">
          Khalil Patiwala | Full Stack Developer
        </p>
        <p className="text-xs text-gray-800 dark:text-gray-200">
          Explore the portfolio of Khalil Patiwala, a Full Stack Developer with
          expertise in Next.js, React.js, and TypeScript.
        </p>
        <Image
          src="https://cdn.sanity.io/images/sqj7d0s5/production/c328cf249bf6cb71cc278be02cf01a4f5bff05cf-1200x630.jpg"
          alt=""
          width={350}
          height={160}
          className="mt-2 h-40 w-full rounded object-cover"
        />
      </div>
      <div className="mt-1 flex items-center gap-1">
        <span className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-600 dark:bg-blue-900/60 dark:text-gray-200">
          👍 1
        </span>
      </div>
    </div>
  );
};

export default Slack;
