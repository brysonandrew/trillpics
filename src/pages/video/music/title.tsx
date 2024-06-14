import type { FC } from "react";
import {
  TButtonProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { IconsPlay } from "~/components/icons/playback/play";
import { LayoutBox } from "~/components/layout/box";
import { LayoutBoxPadding } from "~/components/layout/box/padding";
import { boxSize } from "~uno/rules/box/size";
import { BackgroundMeshRadialFlat } from "~/components/layout/background/mesh-radial-flat";

type TProps = TPropsWithChildren<
  Partial<TButtonProps>
>;
export const MusicLayoutTitle: FC<
  TProps
> = ({ children, style, ...props }) => {
  const s = boxSize();

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
            paddingRight: s.m025,
            gap: s.m0125,
          }}
        >
          <IconsPlay classValue="-top-0.25 -left-0.25" />
          <span className="text-xxs">
            {children}
          </span>
        </LayoutBoxPadding>
      </LayoutBox>
    </button>
  );
};
