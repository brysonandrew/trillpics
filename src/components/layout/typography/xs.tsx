import type { FC } from "react";
import clsx from "clsx";
import { TTypographyProps, Typography } from "~/components/layout/typography";

export const TypographyXs: FC<
  TTypographyProps
> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <Typography
    classValue={clsx(
        "relative text-center leading-none text-xs font-sans",
        classValue
      )}
      {...props}
    >
      {children}
    </Typography>
  );
};
