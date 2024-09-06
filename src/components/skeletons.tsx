import React from "react";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:dark:via-gray-800/60 before:via-gray-200/60 before:to-transparent";

export const PreviewSkeleton = () => {
  return (
    <div className="group relative flex flex-col gap-4">
      <div
        className={`${shimmer} relative h-8 w-20 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900/50`}
      />
      <div
        className={`${shimmer} relative h-96 w-full overflow-hidden rounded-lg bg-gray-100 group-first:h-40 dark:bg-gray-900`}
      />
    </div>
  );
};

export const PreviewsSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <PreviewSkeleton />
      <PreviewSkeleton />
      <PreviewSkeleton />
      <PreviewSkeleton />
    </div>
  );
};
