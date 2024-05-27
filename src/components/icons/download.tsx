import type { FC } from "react";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";

export const IconsDownload: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient24
      size={24}
      viewBox="0 0 24 24"
      d="M11 4h2v8h2v2h-2v2h-2v-2H9v-2h2zm-2 8H7v-2h2zm6 0v-2h2v2zM4 18h16v2H4z"
      {...props}
    />
  );
};
