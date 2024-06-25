import type { FC } from "react";
import {
  Pill,
  TPillProps,
} from "~/components/layout/pill";
import clsx from "clsx";
import { box } from "~uno/rules/box";
import { BackgroundMeshRadial } from "~/components/layout/background/mesh-radial";

export type TCounterProps = Partial<
  Omit<TPillProps, "children"> & {
    children?: (
      count: number
    ) => JSX.Element;
  }
> & {
  count: number;
};
export const Counter: FC<
  TCounterProps
> = ({
  count,
  classValue,
  style,
  ...props
}) => {
  if (count === 0) return null;
  
  return (
    <Pill
      layoutId="VideoPicsCounter"
      classValue={clsx(
        classValue ?? "relative"
      )}
      style={{
        height: box.m05,
        ...(count < 10
          ? { width: box.m05 }
          : {}),

        ...style,
      }}
      layout
      background={<BackgroundMeshRadial/>}
      {...props}
    >
      <span
        className={clsx(
          "flex flex-row whitespace-nowrap text-white dark:text-black _sf-outline",
          "text-xs uppercase font-sans"
        )}
      >
        {count}
      </span>
    </Pill>
  );
};
