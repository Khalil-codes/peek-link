import { Suspense } from "react";
import Previews from "./_components/previews";
import { PreviewsSkeleton } from "@/components/skeletons";
import Search from "@/components/search";

type Props = {
  searchParams: {
    url: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const { url } = searchParams;

  return (
    <section className="flex flex-1 flex-col">
      <Search />
      {!url && (
        <div className="mx-auto flex flex-1 flex-col justify-center text-gray-400">
          <p className="mb-3 text-xl font-bold">Instructions:</p>
          <ul className="list-disc pl-4">
            <li>Enter a URL in the search bar</li>
            <li>Press enter</li>
            <li>See the preview</li>
            <li>Share the link</li>
          </ul>
        </div>
      )}
      {url && (
        <Suspense key={url} fallback={<PreviewsSkeleton />}>
          <Previews url={url} />
        </Suspense>
      )}
    </section>
  );
}
