import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient40 } from "@/components/icons/svg/gradient/40";

export const IconsBack: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient40
      d="M5 12v-2h1V9h1V8h1V7h1V6h2v2h-1v1H9v1h9v2H9v1h1v1h1v2H9v-1H8v-1H7v-1H6v-1"
      {...props}
    />
  );
};
