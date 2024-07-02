import type { FC } from "react";
import { box } from "~uno/rules/box";
import { TTypographyProps } from "~/components/layout/typography";
import clsx from "clsx";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";

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
    <TypographyXxxs
      style={{
        left: box.m00625,
        top: box.m0125,
        height:0,

        ...style,
      }}
      overrides={{
        ...overrides,
      }}
      classValue={clsx(
        "pointer-event-none text-white-9",
        classValue
      )}
      {...props}
    >
      {children}
    </TypographyXxxs>
  );
};
