import type { FC } from "react";
import { BackgroundMesh } from "~/components/layout/background/mesh";
import { LayoutBox } from "~/components/layout/box";
import { TPillProps } from "~/components/layout/pill";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";

export type TMusicLayoutProps =
  Partial<TPillProps>;
export const MeshBackgroundText: FC<
  TMusicLayoutProps
> = ({
  children,
  isActive,
  style,
  background,
  ...props
}) => {
  const s = boxSize();
  const borderRadius = boxRadius("m");

  return (
    <LayoutBox
      style={{
        paddingTop: s.m0125 / 2,
        paddingLeft: s.m025,
        paddingRight: s.m025,
        ...style,
      }}
      background={
        <BackgroundMesh
          style={{
            opacity: 0.2,
            inset: s.m0125 / 4,
            borderRadius,
          }}
        />
      }
      {...props}
    >
      {children}
    </LayoutBox>
  );
};
