import type { FC } from "react";
import { boxRadius } from "~uno/rules/box/radius";
import { box } from "~uno/rules/box";
import { TDivProps } from "@brysonandrew/config-types";

export type TLayoutBoxPaddingProps =
  Partial<
    TDivProps & {
      isActive: boolean;
    }
  >;
export const LayoutBoxPadding: FC<
  TLayoutBoxPaddingProps
> = ({
  children,
  isActive,
  style,
  ...props
}) => {
  
  const borderRadius = boxRadius("l");

  return (
    <div
      className="row relative uppercase text-sm"
      style={{
        paddingTop: box._025*1.25,
        paddingBottom: box._025,
        paddingLeft: box._0125,
        paddingRight: box._0125,
        gap: box._025,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
