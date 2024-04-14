import type { FC } from "react";
import { APP_TITLE } from "@app/base";
import { Glow } from "@/components/decoration/glow";

export const TitleText: FC = () => {
  return (
    <h1
      style={{
        overflowWrap: "break-word",
      }}
      className="relative font-display w-50 md:w-auto text-4.5xl xs:text-5xl sm:text-5.5xl"
    >
      
      {APP_TITLE}
    </h1>
  );
};
