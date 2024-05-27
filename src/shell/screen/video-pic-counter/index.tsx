import type { FC } from "react";
import {
  Pill,
  TPillProps,
} from "~/components/layout/pill";
import clsx from "clsx";
import { usePicVideoReadCount } from "~/hooks/pic/video/read/count/hook";
import { boxSize } from "~/constants/box/size";

export const VideoPicsCounter: FC<
  Partial<
    Omit<TPillProps, "children"> & {
      children?: (
        count: number
      ) => JSX.Element;
    }
  >
> = ({
  classValue,
  children = (count: number) =>
    `${count}`,
  style,
  ...props
}) => {
  const count = usePicVideoReadCount();
  const s = boxSize();
  return (
    <Pill
      layoutId="VideoPicsCounter"
      classValue={clsx(
        "pointer-events-none",
        classValue ?? "relative"
      )}
      style={{
        height: s.m05,

        ...style,
      }}
      layout
      {...props}
    >
      <span
        className={clsx(
          "flex flex-row whitespace-nowrap text-white dark:text-black _outline-filter",
          "text-xs uppercase font-sans"
        )}
      >
        {children(count)}
      </span>
    </Pill>
  );
};
