import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types/dom";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "~/shell/global/svg/gradients/blue-pink-yellow";
import { resolveSquare } from "@brysonandrew/measure";

export const IconsViewForward: FC<
  TSvgProps
> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...resolveSquare(24)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={resolveUrlId(
          LINEAR_GRADIENT_SVG_ID
        )}
        d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5h1.1c-.1-.3-.1-.6-.1-1c0-.6.1-1.1.2-1.7c-.4.1-.8.2-1.2.2c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5c0 .3 0 .6-.1.9c.7-.2 1.4-.4 2.1-.4c1.2 0 2.3.3 3.3 1c.3-.5.5-1 .7-1.5c-1.7-4.4-6-7.5-11-7.5M12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3m7 12v-2h-4v-2h4v-2l3 3z"
      />
    </svg>
  );
};
