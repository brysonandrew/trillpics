import type { FC } from "react";
import { IconsTick } from "~/components/icons/tick";
import { boxRadius } from "~uno/rules/box/radius";
import { box } from "~uno/rules/box";
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
    
    const borderRadius = boxRadius();
    if (recording) {
      return (
        <div
          className="relative center"
          style={{
            width: box.m05,
            height: box.m05,
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
          width: box.m05,
          height: box.m05,
          padding: box.m025,
          borderRadius,
        }}
      >
        <BackgroundMesh />
        <IconsCross24 size={14} />
      </div>
    );
  };
