import type { FC } from "react";
import clsx from "clsx";
import {
  Lines_Line,
  TLines_LineProps,
} from "~/pages/video/_common/footer/left/lines/_line";

type TProps = TLines_LineProps;
export const LinesVertical: FC<
  TProps
> = ({
  classValue,
  style,
  ...props
}) => {
  return (
    <Lines_Line
      classValue={clsx(
        "h-full w-0",
        classValue
      )}
      sizeClass="border-l"
      style={style}
      {...props}
    />
  );
};
