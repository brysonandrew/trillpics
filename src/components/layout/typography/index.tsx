import { FC, memo } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { overrideClasses } from "~/utils/classes/overrides";
import { TClassOverridesProps } from "~/types/classes";

export type TTypographyProps =
  TDivProps &
    Partial<TClassOverridesProps>;
export const Typography: FC<TTypographyProps> =
  memo(
    ({
      classValue,
      overrides,
      children,
      ...props
    }) => {
      const c = overrideClasses(
        clsx(
          "relative text-left leading-none uppercase font-slab",
          classValue ?? "text-center"
        ),
        overrides
      );
      return (
        <div
          className={clsx(c)}
          {...props}
        >
          {children}
        </div>
      );
    }
  );
