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
        top: box.m003125,
        ...style,
      }}
      overrides={{
        positionClass: "absolute",
        ...overrides,
      }}
      classValue={clsx(
        "translate-x-1.5 -translate-y-1 pointer-event-none",
        classValue
      )}
      {...props}
    >
      {children}
    </TypographyXxxxs>
  );
};
