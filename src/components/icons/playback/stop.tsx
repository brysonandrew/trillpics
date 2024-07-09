import type { FC } from "react";
import { resolveSquare } from "@brysonandrew/measure";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "~uno/rules/gradient/constants";
import clsx from "clsx";
import { TIconsSvgProps } from "~/components/icons/svg";

export const IconsStop: FC<
  TIconsSvgProps
> = ({ classValue, ...props }) => {
  return (
    <svg
      className={clsx(classValue)}
      {...resolveSquare(24)}
      viewBox="0 0 24 24"
      fill={resolveUrlId(
        LINEAR_GRADIENT_SVG_ID
      )}
      {...props}
    >
      <rect
        x="7"
        y="7"
        {...resolveSquare(10)}
      />
    </svg>
  );
};
