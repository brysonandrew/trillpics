import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";



export const IconsPlusQuestion: FC<
  TSvgProps
> = ({ classValue, ...props }) => {
  return (
    <IconsSvgGradient24
      classValue={classValue}
      {...props}
    >
      <text
        x="32%"
        y="32%"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
        {...props}
      >
        ?
      </text>
      <text
        x="65%"
        y="65%"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
        {...props}
      >
        +
      </text>
    </IconsSvgGradient24>
  );
};
