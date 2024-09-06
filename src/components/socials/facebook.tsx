import React from "react";

const Facebook = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4 p-2 bg-gray-100 rounded-lg dark:bg-white/10 max-w-max">
        <span
          className="iconify i-logos:facebook w-4 h-4"
          aria-hidden="true"
        ></span>
        <p className="text-xs textgray-500">Facebook</p>
      </div>
      <div className="rounded-lg overflow-hidden shadow bg-white dark:bg-gray-800">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative inline-flex items-center justify-center flex-shrink-0 rounded-full h-10 w-10 text-base bg-white ring-gray-200 dark:ring-white/10">
                <img
                  className="rounded-full h-10 w-10 text-base"
                  src="https://github.com/fayazara.png"
                />
              </span>
              <div>
                <p className="font-medium">Fayaz Ahmed</p>
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 dark:text-gray-300 text-xs">
                    Just Now
                  </p>
                  <span
                    className="iconify i-solar:users-group-rounded-bold h-4 w-4"
                    aria-hidden="true"
                  ></span>
                </div>
              </div>
            </div>
            <span
              className="iconify i-ph:dots-three-outline-fill"
              aria-hidden="true"
            ></span>
          </div>
          <p className="text-[#0064d1] dark:text-[#5AA7FF] text-sm mt-3">
            https://khxlil.vercel.app
          </p>
        </div>
        <div>
          <img
            src="https://cdn.sanity.io/images/sqj7d0s5/production/c328cf249bf6cb71cc278be02cf01a4f5bff05cf-1200x630.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 relative">
          <span className="h-8 w-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 absolute -top-3 right-8 flex items-center justify-center">
            <span
              className="iconify i-bi:info h-6 w-6"
              aria-hidden="true"
            ></span>
          </span>
          <p className="text-[#65676B] dark:text-[#B0B3B8] text-sm uppercase">
            khxlil.vercel.app
          </p>
          <p className="text-[#050505] dark:text-gray-100 text-[17px] font-semibold">
            Khalil Patiwala | Full Stack Developer
          </p>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-4 text-gray-600 dark:text-[#B0B3B8] font-medium">
            <div className="flex items-center gap-2 justify-center">
              <span
                className="iconify i-heroicons:hand-thumb-up h-5 w-5"
                aria-hidden="true"
              ></span>
              <p>Like</p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span
                className="iconify i-heroicons:chat-bubble-oval-left h-5 w-5"
                aria-hidden="true"
              ></span>
              <p>Comment</p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span
                className="iconify i-ic:baseline-whatsapp h-5 w-5"
                aria-hidden="true"
              ></span>
              <p>Send</p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span
                className="iconify i-ph:share-fat-light h-5 w-5"
                aria-hidden="true"
              ></span>
              <p>Share</p>
            </div>
          </div>
          <hr className="my-3 dark:border-white/10" />
          <div className="flex items-center gap-2">
            <span className="relative inline-flex items-center justify-center flex-shrink-0 rounded-full h-8 w-8 text-sm bg-white ring-gray-200 dark:ring-white/10">
              <img
                className="rounded-full h-8 w-8 text-sm"
                src="https://github.com/fayazara.png"
              />
            </span>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-2 flex-1">
              <p>Comment as Fayaz Ahmed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facebook;
