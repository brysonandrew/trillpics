import type { FC } from "react";
import {
  TButtonProps,
  TClassValueProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { LayoutBox } from "~/components/layout/box";
import { LayoutBoxPadding } from "~/components/layout/box/padding";
import { box } from "~uno/rules/box";
import { BackgroundMeshRadialFlat } from "~/components/layout/background/mesh-radial-flat";

type TProps = TPropsWithChildren<
  Partial<TButtonProps> & {
    Icon: FC<TClassValueProps>;
  }
>;
export const MusicLayoutTitle: FC<
  TProps
> = ({
  children,
  style,
  Icon,
  ...props
}) => {
  return (
    <button
      title={`play ${children}`}
      style={{
        transform: "scale(1)",
        ...style,
      }}
      {...props}
    >
      <LayoutBox
        sizeClass="h-6"
        background={
          <BackgroundMeshRadialFlat />
        }
      >
        <LayoutBoxPadding
          style={{
            paddingRight: box.m025,
            gap: box.m0125,
          }}
        >
          <Icon classValue="-top-0.25 -left-0.25" />
          <span className="text-xxs">
            {children}
          </span>
        </LayoutBoxPadding>
      </LayoutBox>
    </button>
  );
};
