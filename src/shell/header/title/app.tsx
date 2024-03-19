import type { FC } from "react";
import { APP_TITLE } from "@app/base";

export const TitleApp: FC = () => {
  return (
    <h1 className="text-4.5xl xs:text-5.5xl sm:text-6xl font-display capitalise whitespace-nowrap">
      {APP_TITLE}
    </h1>
  );
};
