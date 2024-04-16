import { resolveDimensions } from "@/utils/dimensions/resolve-dimensions";
import { TSvgProps } from "@brysonandrew/config-types";
import type { FC } from "react";

export const IconsShuffle: FC<TSvgProps> = (
  props
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...resolveDimensions(24)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18 5h-2v2h2v2h-6v2h-2v6H2v2h8v-2h2v-6h6v2h-2v2h2v-2h2v-2h2V9h-2V7h-2zM2 9h6v2H2zm20 10v-2h-8v2z"
      />
    </svg>
  );
};
