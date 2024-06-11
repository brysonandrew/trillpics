import type { FC } from "react";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";
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
  const s = boxSize();
  const borderRadius = boxRadius("l");

  return (
    <div
      className="row relative uppercase text-sm"
      style={{
        paddingTop: s.m025*1.25,
        paddingBottom: s.m025,
        paddingLeft: s.m0125,
        paddingRight: s.m0125,
        gap: s.m025,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
