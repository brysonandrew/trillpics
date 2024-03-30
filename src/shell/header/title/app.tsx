import type { FC } from "react";
import { APP_TITLE } from "@app/base";
import { TEXT_GRADIENT } from "@constants/css/gradient";

export const TitleApp: FC = () => {
  return (
    <h1         style={TEXT_GRADIENT} className="font-display text-4.5xl xs:text-5.5xl sm:text-6xl">
      {APP_TITLE}
    </h1>
  );
};
