import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { GRADIENT_ZEBRA } from "~app/color/gradient";

type TProps = TDivProps;
export const GradientsZebraBorder: FC<
  TProps
> = ({ classValue, ...props }) => {
  return (
    <div
      className={clsx(
        "fill pointer-events-none opacity-10",
        classValue
      )}
      style={{
        borderWidth: "6rem",
        borderStyle: "solid",
        // borderImageRepeat: "repeat",
        // borderImageOutset:'',
        // borderImageSlice:'revert',
        borderImage: `${GRADIENT_ZEBRA} 40`,
      }}
      {...props}
    />
  );
};
