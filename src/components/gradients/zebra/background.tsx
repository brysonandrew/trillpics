import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { GRADIENT_ZEBRA } from "~app/color/gradient";

type TProps = TDivProps;
export const GradientsZebraBackground: FC<
  TProps
> = ({ classValue, ...props }) => {
  return (
    <div
      className={clsx(
        "fill pointer-events-none opacity-10",
        classValue
      )}
      style={{
        backgroundImage: `${GRADIENT_ZEBRA}`,
      }}
      {...props}
    />
  );
};
