import type { FC } from "react";
import { motion } from "framer-motion";
import { IconsMute } from "~/components/icons/playback/mute";
import { boxRadius } from "~uno/rules/box/radius";
import { IconsTick } from "~/components/icons/tick";
import { LayoutBox } from "~/components/layout/box";
import { BackgroundMeshRadialFlat } from "~/components/layout/background/mesh-radial-flat";
import { box } from "~uno/rules/box";
import { LayoutOverlay } from "~/components/layout/overlay";
import { useSearchParams } from "react-router-dom";
import { resolveVideoReadAudio } from "~/hooks/pic/video/read/audio";

type TProps = { isHovering: boolean };
export const NavCountersMusic: FC<
  TProps
> = ({ isHovering }) => {
  const [searchParams] =
    useSearchParams();
  const audio = resolveVideoReadAudio(
    searchParams
  );
  const borderRadius = boxRadius();

  if (audio) {
    return (
      <div className="absolute -top-2 -right-2 z-10 pointer-events-none">
        <div
          className="relative"
          style={{
            width: box._05,
            height: box._05,
            borderRadius,
          }}
        >
          <BackgroundMeshRadialFlat />
          <IconsTick />
          <>
            {isHovering && (
              <LayoutOverlay>
                Soundtrack added
              </LayoutOverlay>
            )}
          </>
        </div>
      </div>
    );
  }
  return (
    <motion.div
      className="center absolute -top-2 -left-2 cursor-pointer z-10 pointer-events-none"
      style={{
        width: box._05,
        height: box._05,
        borderRadius,
      }}
    >
      <>
        {isHovering && (
          <LayoutOverlay>
            No soundtrack
          </LayoutOverlay>
        )}
      </>
      <div
        className="fill _bi-mesh opacity-100"
        style={{
          borderRadius,
        }}
      />
      <LayoutBox>
        <IconsMute size={16} />
      </LayoutBox>
    </motion.div>
  );
};
