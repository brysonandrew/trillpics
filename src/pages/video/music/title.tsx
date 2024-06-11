import type { FC } from "react";
import {
  TButtonProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { IconsPlay } from "~/components/icons/playback/play";
import { MusicLayout } from "~/pages/video/music/layout";
import { LayoutBox } from "~/components/layout/box";
import { BackgroundMeshRadial } from "~/components/layout/background/mesh-radial";
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
      style={{transform:'scale(0.8)', ...style}}
      {...props}
    >
      <LayoutBox
        background={
          <BackgroundMeshRadialFlat />
        }
      >
        <LayoutBoxPadding
          style={{
            paddingRight: s.m025 * 1.4,
          }}
        >
          <IconsPlay classValue="-top-0.25 -left-0.25" />
          {children}
        </LayoutBoxPadding>
      </LayoutBox>
    </button>
  );
};
