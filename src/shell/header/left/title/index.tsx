import type { FC } from "react";
import { TitleText } from "~/shell/header/left/title/text";
import { SparkleButton } from "~/shell/header/left/title/sparkle-button";
import { LightingGlow } from "~/components/layout/lighting/glow";
import { resolvePresence } from "~/utils/animation";
import { LightingShadow } from "~/components/layout/lighting/shadow";
import { LightingLamp } from "~/components/layout/lighting/lamp";

export const Title: FC = () => {
  return (
    <div className="relative row gap-0 md:(gap-4 w-auto)">
      <div className="relative h-18">
        <LightingGlow
          classValue="-inset-1"
          {...resolvePresence(
            { opacity: 0 },
            { opacity: 0.2 }
          )}
        />
        <TitleText />
        <h2 className="relative text-lg text-main-inverted px-1 char-gap-7">
          AI Art Gallery
          <LightingLamp
            classValue="-inset-y-3 -inset-x-6"
            {...resolvePresence(
              { opacity: 0 },
              { opacity: 0.2 }
            )}
          />
        </h2>
      </div>
      <SparkleButton />
    </div>
  );
};
