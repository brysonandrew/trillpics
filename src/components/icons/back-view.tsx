import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types/dom";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "@/components/gradients/linear-gradient-svg";

export const IconsBackView: FC<
  TSvgProps
> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
    fill={resolveUrlId(
      LINEAR_GRADIENT_SVG_ID
    )}
        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5c.36 0 .72 0 1.08-.05a6.09 6.09 0 0 1-.08-.95c0-.56.08-1.12.24-1.66c-.41.1-.82.16-1.24.16c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5c0 .29-.03.59-.08.88c.66-.25 1.37-.38 2.08-.38c1.17 0 2.31.34 3.29 1c.27-.5.51-1 .71-1.5c-1.73-4.39-6-7.5-11-7.5M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m6 6v2h4v2h-4v2l-3-3z"
      />
    </svg>
  );
};
