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
    <section>
      <Search />
    </section>
  );
}
