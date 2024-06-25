import type { FC } from "react";
import clsx from "clsx";
import { TTypographyProps, Typography } from "~/components/layout/typography";

export const TypographyXxxs: FC<
  TTypographyProps
> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <Typography
    classValue={clsx(
        "relative leading-none text-xxxs uppercase font-sans",
        classValue ?? "text-center"
      )}
      {...props}
    >
      {children}
    </Typography>
  );
};
