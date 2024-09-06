import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
};

const ICONS = {
  facebook: "https://cdn.simpleicons.org/facebook/_/f3f4f6",
  "twitter/x": "https://cdn.simpleicons.org/x/_/f3f4f6",
  linkedin: "https://cdn.simpleicons.org/linkedin/_/f3f4f6",
  discord: "https://cdn.simpleicons.org/discord/_/f3f4f6",
  slack: "https://cdn.simpleicons.org/slack/_/f3f4f6",
  telegram: "https://cdn.simpleicons.org/telegram/_/f3f4f6",
  whatsapp: "https://cdn.simpleicons.org/whatsapp/_/f3f4f6",
  google: "https://cdn.simpleicons.org/google/_/f3f4f6",
};

const SocialCard = ({ children, icon, title }: Props) => {
  const iconUrl = !icon ? ICONS[title.toLowerCase() as keyof typeof icon] : "";
  return (
    <Card className="overflow-hidden rounded-none border-none bg-transparent shadow-none dark:text-gray-100">
      <CardHeader className="mb-4 max-w-max rounded-lg border border-black/5 bg-gray-200/50 p-2 dark:border-white/5 dark:bg-white/10">
        <CardTitle className="flex items-center gap-2 font-geist-mono text-xs font-normal">
          <span className="h-4 w-4 text-gray-100">
            {icon ? (
              icon
            ) : (
              <Image
                height={16}
                width={16}
                src={iconUrl}
                alt="Slack"
                unoptimized
              />
            )}
          </span>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="rounded border border-black/5 bg-gray-200/10 p-6 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900">
        {children}
      </CardContent>
    </Card>
  );
};

export default SocialCard;
