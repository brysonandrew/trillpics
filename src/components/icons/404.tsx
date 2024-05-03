import type { FC } from "react";
import { IconsSvgGradient40 } from "~/components/icons/svg/gradient/40";

export const Icons404: FC = () => {
  return (
    <IconsSvgGradient40
      fill="none"
      stroke="currentColor"
      d="M3 7v4a1 1 0 0 0 1 1h3m0-5v10m3-9v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1m7-1v4a1 1 0 0 0 1 1h3m0-5v10"
      pathProps={{
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
      }}
    />
  );
};
