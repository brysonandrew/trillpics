import type { FC } from "react";
import {
  Pill,
  TPillProps,
} from "~/components/layout/pill";
import clsx from "clsx";
import { usePicVideoReadCount } from "~/hooks/pic/video/read/count/hook";

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

  const charCount =
    count.toFixed(0).length;
  const isCircle = charCount === 1;
  return (
    <Pill
      isCircle={isCircle}
      sizeClass={
        "h-7" + isCircle ? " w-7" : ""
      }
      layoutId="VideoPicsCounter"
      classValue={clsx(
        "text-xs uppercase text-black font-sans",
        "pointer-events-none font-mono text-main-inverted",
        // "_gradient-mesh bg-black-04",
        classValue ?? "relative"
      )}
      style={{ ...style }}
      layout
      {...props}
    >
      <span className="flex flex-row whitespace-nowrap">
        {children(count)}
      </span>
    </Pill>
  );
};
