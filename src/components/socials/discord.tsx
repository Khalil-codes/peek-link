import Image from "next/image";
import React from "react";

const Discord = () => {
  return (
    <div>
      <p className="text-sm text-[#006CE7] dark:text-[#05A8FC]">
        https://khxlil.vercel.app
      </p>
      <div className="mt-px max-w-sm rounded-md border-l-4 border-gray-300 bg-gray-100 p-4 dark:border-white/10 dark:bg-gray-800">
        <p className="text-xs text-gray-800 dark:text-gray-200">khxlil</p>
        <p className="my-2 text-sm font-semibold text-[#006CE7] dark:text-[#05A8FC]">
          Khalil Patiwala | Full Stack Developer
        </p>
        <p className="text-xs text-gray-800 dark:text-gray-200">
          Khalil Patiwala is a Full Stack Developer specializing in Next.js,
          React.js, and TypeScript. With 3 years of experience, he delivers
          high-performance code with a focus on frontend development and
          optimization.
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
        <span className="rounded-md bg-gray-200 px-1.5 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-200">
          {" "}
          🚀 16{" "}
        </span>
      </div>
    </div>
  );
};

export default Discord;
