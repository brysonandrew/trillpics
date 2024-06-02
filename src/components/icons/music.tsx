import { TIconsSvgProps } from "@brysonandrew/svg-icon";
import type { FC } from "react";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";

export const IconsMusic: FC<
TIconsSvgProps
> = (props) => {
return (
  <IconsSvgGradient24
    size={24}
    viewBox="0 0 24 24"
    d="M8 4h12v16h-8v-8h6V8h-8v12H2v-8h6zm0 10H4v4h4zm10 0h-4v4h4z"

    {...props}
  />
);
};

