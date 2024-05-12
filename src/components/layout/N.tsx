import type { FC } from "react";
import { TTextProps } from "./config";
import { Text as _Text } from "./index";

export const N: FC<TTextProps> = (
  props
) => {
  return (
    <_Text
      classValue="relative text-main"
      element="div"
      {...props}
    />
  );
};
