"use client";

import React, { useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  url: z.string().url(),
});

type Schema = z.infer<typeof schema>;

const Search = () => {
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const router = useRouter();
  const form = useForm<Schema>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: { url: searchParams?.get("url") || "" },
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = form;

  useEffect(() => {
    if (!searchParams?.get("url")) {
      setValue("url", "");
    }
  }, [setValue, searchParams]);

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    if (data.url) {
      try {
        const response = await fetch(
          `/api/check?url=${encodeURIComponent(data.url)}`
        );

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "URL not found",
          description: "Please enter a URL that exists",
        });
        return;
      }
    }

    const params = new URLSearchParams(searchParams);
    data.url && params.set("url", data.url);

    router.replace(`/?${params.toString()}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <FormField
          name="url"
          control={control}
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  type="url"
                  placeholder="https://example.com"
                  className="h-12 w-full border border-black/10 bg-white/80 pr-12 font-geist-mono focus-visible:ring-1 focus-visible:ring-gray-900 dark:border-gray-100/10 dark:bg-gray-950 dark:text-gray-100 focus-visible:dark:ring-gray-100"
                  {...field}
                />
              </FormControl>
              <Button
                type="submit"
                disabled={isSubmitting}
                size="sm"
                className="absolute right-2 top-0 text-gray-100 dark:bg-gray-700 hover:dark:bg-gray-600">
                {isSubmitting ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </Button>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default Search;
