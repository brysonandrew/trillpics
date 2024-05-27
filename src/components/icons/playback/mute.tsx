import type { FC } from "react";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/16vb24";

export const ICON_MUTE =
  "M13 2h-2v2H9v2H7v2H3v8h4v2h2v2h2v2h2zM9 18v-2H7v-2H5v-4h2V8h2V6h2v12zm10-6.777h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2zm0 0h2v-2h-2z";
// "M3 5V3h2v2zm4 2H5V5h2zm2 2H7V7h2zm2 2H9V9h2zm2 0h-2v2h2v2h2v2h2v2h-2v2h6v-6h-2v2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0-2v2h2v2h2V3h-6v2zM5 19v-2h2v2zm0 0v2H3v-2zm2-2v-2h2v2z";
//  "M18 5h-2v2h2v2h-6v2h-2v6H2v2h8v-2h2v-6h6v2h-2v2h2v-2h2v-2h2V9h-2V7h-2zM2 9h6v2H2zm20 10v-2h-8v2z";
export const IconsMute: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d={ICON_MUTE}
      {...props}
    />
  );
};
