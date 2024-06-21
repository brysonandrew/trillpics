import type { FC } from "react";
import { IconsTick } from "~/components/icons/tick";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";
import { BackgroundMesh } from "~/components/layout/background/mesh";
import { useTrillPicsStore } from "~/store/middleware";
import { IconsCross24 } from "~/components/icons/cross/24";

export const NavCountersSelectedMusic: FC =
  () => {
    const { recording } =
      useTrillPicsStore(
        ({ recording }) => ({
          recording,
        })
      );
    const s = boxSize();
    const borderRadius = boxRadius();
    if (recording) {
      return (
        <div
          className="relative center"
          style={{
            width: s.m05,
            height: s.m05,
            borderRadius,
          }}
        >
          <BackgroundMesh />
          <IconsTick />
        </div>
      );
    }
    return (
      <div
        className="relative center z-10"
        style={{
          width: s.m05,
          height: s.m05,
          padding: s.m025,
          borderRadius,
        }}
      >
        <BackgroundMesh />
        <IconsCross24 size={14} />
      </div>
    );
  };
