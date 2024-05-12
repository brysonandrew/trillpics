import type { FC } from "react";
import {
  Pill,
  TPillProps,
} from "~/components/layout/counter";
import clsx from "clsx";
import { N } from "~/components/layout/N";
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
        "pointer-events-none font-display-led text-black dark:text-white",
        classValue ?? "relative"
      )}
      {...props}
    >
      <>{children(count)}</>
    </Pill>
  );
};
