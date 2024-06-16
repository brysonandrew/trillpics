import type { FC } from "react";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";
import {
  Pill,
  TPillProps,
} from "~/components/layout/pill";
import clsx from "clsx";

export type TMusicLayoutProps = Partial<
  TPillProps & {
    isActive: boolean;
  }
>;
export const LayoutBox: FC<
  TMusicLayoutProps
> = ({
  children,
  isActive,
  classValue,
  style,
  ...props
}) => {
  return (
    <Pill
      classValue={clsx(
        "relative font-slab dark:text-gray-7 text-white-5",
        classValue
      )}
      sizeClass="h-8"
      style={style}
      {...props}
    >
      {children ?? null}
    </Pill>
  );
};
