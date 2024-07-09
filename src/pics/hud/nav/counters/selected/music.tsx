import type { FC } from "react";
import { IconsTick } from "~/components/icons/tick";
import { boxRadius } from "~uno/rules/box/radius";
import { box } from "~uno/rules/box";
import { BackgroundMesh } from "~/components/layout/background/mesh";
import { IconsCross24 } from "~/components/icons/cross/24";
import { QUERY_PARAM_KEYS } from "~/hooks/pic/constants";
import { useSearchParams } from "react-router-dom";

export const NavCountersSelectedMusic: FC =
  () => {
    const [searchParams] =
      useSearchParams();
    const audio = searchParams.get(
      QUERY_PARAM_KEYS["audio-src"]
    );

    const borderRadius = boxRadius();
    if (audio) {
      return (
        <div
          className="relative center"
          style={{
            width: box._05,
            height: box._05,
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
          width: box._05,
          height: box._05,
          padding: box._025,
          borderRadius,
        }}
      >
        <BackgroundMesh />
        <IconsCross24 size={14} />
      </div>
    );
  };
