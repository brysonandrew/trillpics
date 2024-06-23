import type { FC } from "react";
import { BackgroundMesh } from "~/components/layout/background/mesh";
import { LayoutBox } from "~/components/layout/box";
import { TPillProps } from "~/components/layout/pill";
import { box } from "~uno/rules/box";

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
  const s = box;

  return (
    <LayoutBox
      classValue="text-xs"
      style={{
        paddingTop: box.m0125 / 2,
        paddingLeft: box.m025,
        paddingRight: box.m025,
        ...style,
      }}
      background={
        <BackgroundMesh
          style={{
            opacity: 0.2,
            borderRadius: box.radius.m,
          }}
        />
      }
      {...props}
    >
      {children}
    </LayoutBox>
  );
};
