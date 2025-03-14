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
        left: box._00625,
        top: box._0125,
        height: 0,
        ...style,
      }}
      overrides={{
        ...overrides,
      }}
      classValue={clsx(
        "pointer-event-none",
        "text-white-9",
        classValue
      )}
      {...props}
    >
      <div
        className="truncate bg-gradient-to-r from-black-05 to-transparent"
        style={{ width: box._2 }}
      >
        {children}
      </div>
    </TypographyXxxs>
  );
};
