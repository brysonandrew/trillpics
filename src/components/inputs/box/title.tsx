import type { FC } from "react";
import { box } from "~uno/rules/box";
import { TypographyXxxxs } from "~/components/layout/typography/xxxxs";
import { TTypographyProps } from "~/components/layout/typography";
import clsx from "clsx";

type TProps = Partial<TTypographyProps>;
export const InputsBoxTitle: FC<
  TProps
> = ({
  style,
  children,
  classValue,
  overrides,
  ...props
}) => {
  return (
    <TypographyXxxxs
      style={{
        left: box.m00625,
        bottom: box.m00625,
        ...style,
      }}
      overrides={{
        positionClass: "absolute",
        ...overrides,
      }}
      classValue={clsx(
        "top-0 translate-x-1.5 -translate-y-1.5",
        classValue
      )}
      {...props}
    >
      {children}
    </TypographyXxxxs>
  );
};
