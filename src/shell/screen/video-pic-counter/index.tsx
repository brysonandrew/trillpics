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
  return (
    <Pill
      layoutId="VideoPicsCounter"
      classValue={clsx(
        "pointer-events-none font-display-led text-main-inverted",
        classValue ?? "relative"
      )}
      {...props}
    >
      <>{children(count)}</>
    </Pill>
  );
};
