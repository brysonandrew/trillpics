import type { FC } from "react";
import clsx from "clsx";
import {
  TTypographyProps,
  Typography,
} from "~/components/layout/typography";

export const TypographySm: FC<
  TTypographyProps
> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <Typography
      classValue={clsx(
        "relative text-left leading-none text-sm uppercase font-slab",
        classValue
      )}
      {...props}
    >
      {children}
    </Typography>
  );
};
