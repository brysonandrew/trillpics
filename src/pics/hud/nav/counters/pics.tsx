import type { FC } from "react";
import { usePicVideoReadCount } from "~/hooks/pic/video/read/count/hook";
import { Counter } from "~/components/counter";
import { useHoverKey } from "~/hooks/use-hover-key";
import { ShowPics } from "~/components/show-pics";
import { usePicVideoReadInputs } from "~/hooks/pic/video/read/inputs/hook";
import { LayoutOverlay } from "~/components/layout/overlay";
import { useBpm } from "~/hooks/music/bpm";
import { LightingGlow } from "~/components/layout/lighting/glow";
import { BackgroundMeshRadial } from "~/components/layout/background/mesh-radial";
const key = "NavCountersPics";
export const NavCountersPics: FC =
  () => {
    const count =
      usePicVideoReadCount();
    const { motionHandlers, isHover } =
      useHoverKey();
    const isHovering = isHover(key);
    const bpm = useBpm();

    const { pics } =
      usePicVideoReadInputs(bpm);

    return (
      <>
        <Counter
          count={count}
          classValue="absolute -top-2 -left-2 cursor-pointer z-10"
          background={
            <>
              <BackgroundMeshRadial />
              {isHovering ? (
                <LightingGlow />
              ) : null}
            </>
          }
          {...motionHandlers(key)}
        />
        {isHovering && (
          <LayoutOverlay
            subtitle={
              <ShowPics names={pics} />
            }
          >
            Pics added
          </LayoutOverlay>
        )}
      </>
    );
  };
