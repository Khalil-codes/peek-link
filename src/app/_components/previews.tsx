import React from "react";
import SocialCard from "@/components/socials/card";
import Discord from "@/components/socials/discord";
import Google from "@/components/socials/google";
import Linkedin from "@/components/socials/linkedin";
import Slack from "@/components/socials/slack";
import Telegram from "@/components/socials/telegram";
import Whatsapp from "@/components/socials/whatsapp";
import X from "@/components/socials/X";

type Props = {
  url: string;
};

const Preview = async (props: Props) => {
  console.log(props.url);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="flex flex-col gap-4">
      <SocialCard title="Google">
        <Google />
      </SocialCard>
      <SocialCard title="Twitter/X">
        <X />
      </SocialCard>
      <SocialCard title="WhatsApp">
        <Whatsapp />
      </SocialCard>
      <SocialCard title="LinkedIn">
        <Linkedin />
      </SocialCard>
      <SocialCard title="Telegram">
        <Telegram />
      </SocialCard>
      <SocialCard title="Discord">
        <Discord />
      </SocialCard>
      <SocialCard title="Slack">
        <Slack />
      </SocialCard>
    </div>
  );
};

export default Preview;
