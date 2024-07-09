import type { FC } from "react";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

export const GlassSidebar: FC = () => {
  const {
    gap,
    sidebarWidth,
    screenHeight,
    viewHeight,
  } = useVideoStyle();
  const borderRadius = box.radius.xl;
  return (
    <div>
      <aside
        className="flex absolute grow h-full pointer-events-none"
        style={{
          left: 0,
          width: sidebarWidth,
          gap,
          top: 0,
          height: viewHeight,
        }}
      >
        <BackgroundGlass
          style={{
            borderTopLeftRadius:
              borderRadius,
            borderBottomLeftRadius:
              borderRadius,
          }}
        />
      </aside>
    </div>
  );
};
