import type { FC } from "react";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

export const GlassMain: FC = () => {
  const {
    screenHeight,
    sidebarWidthOffset,
    viewHeight
  } = useVideoStyle();
  const borderRadius = box.radius.xl;
  return (
    <div>
      <BackgroundGlass
        boxStyle={{
          left: sidebarWidthOffset,
          height: viewHeight,
        }}
        style={{
          borderTopRightRadius:
            borderRadius,
          borderBottomRightRadius:
            borderRadius,
        }}
      />
    </div>
  );
};
