import React from "react";
import SocialCard from "@/components/socials/card";
import Discord from "@/components/socials/discord";
import Google from "@/components/socials/google";
import Linkedin from "@/components/socials/linkedin";
import Slack from "@/components/socials/slack";
import Telegram from "@/components/socials/telegram";
import Whatsapp from "@/components/socials/whatsapp";
import X from "@/components/socials/X";
import { Button } from "@/components/ui/button";
import { ResetIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { fetchMetadata } from "@/services/meta";
import Facebook from "@/components/socials/facebook";

type Props = {
  url: string;
};

const Preview = async (props: Props) => {
  const { url } = props;

  if (!url) {
    return null;
  }

  const meta = await fetchMetadata(url);

  return (
    <>
      <div className="mb-4 flex items-center justify-between gap-2">
        <h1 className="text-xl font-semibold">Your Preview</h1>
        <Button size="icon" variant="outline" asChild>
          <Link href={"/"}>
            <ResetIcon />
            <span className="sr-only">Reset</span>
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <SocialCard title="Google">
          <Google meta={meta} />
        </SocialCard>
        <SocialCard title="Twitter/X">
          <X meta={meta} />
        </SocialCard>
        <SocialCard title="WhatsApp">
          <Whatsapp meta={meta} />
        </SocialCard>
        <SocialCard title="Facebook">
          <Facebook meta={meta} />
        </SocialCard>
        <SocialCard title="LinkedIn">
          <Linkedin meta={meta} />
        </SocialCard>
        <SocialCard title="Telegram">
          <Telegram meta={meta} />
        </SocialCard>
        <SocialCard title="Discord">
          <Discord meta={meta} />
        </SocialCard>
        <SocialCard title="Slack">
          <Slack meta={meta} />
        </SocialCard>
      </div>
    </>
  );
};

export default Preview;
