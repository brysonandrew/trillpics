import type { FC } from "react";
import { APP_TITLE } from "@app/base";
import { TEXT_GRADIENT } from "@constants/css/gradient";

export const TitleText: FC = () => {
  return (
    <h1
      style={{
        ...TEXT_GRADIENT,
        overflowWrap: "break-word",
      }}
      className="font-display-outline w-50 md:w-auto text-4.5xl xs:text-5xl sm:text-5.5xl"
    >
      {APP_TITLE}
    </h1>
  );
};
