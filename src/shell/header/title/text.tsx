import type { FC } from "react";
import { APP_TITLE } from "@app/base";

export const TitleText: FC = () => {
  return (
    <h1
      style={{
        overflowWrap: "break-word",
      }}
      className="relative font-display text-left w-32 text-4xl sm:(text-4.5xl w-44) md:(text-5xl w-auto)"
    >
      {APP_TITLE}
    </h1>
  );
};
