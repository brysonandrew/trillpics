import type { FC } from "react";
import {
  Pill,
  TPillProps,
} from "~/components/layout/pill";
import clsx from "clsx";
import { usePicVideo } from "~/hooks/pic/video";

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
  ...props
}) => {
  const { count, isVideoPics } =
    usePicVideo();

  if (!isVideoPics) return null;
  const charCount =
    count.toFixed(0).length;

  return (
    <Pill
      isCircle={charCount === 1}
      layoutId="VideoPicsCounter"
      classValue={clsx(
        "text-xs uppercase text-black font-sans",
        "pointer-events-none font-mono text-main-inverted",
        classValue ?? "relative"
      )}
      layout
      {...props}
    >
      {children(count)}
    </Pill>
  );
};
