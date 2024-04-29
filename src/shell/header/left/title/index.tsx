import type { FC } from "react";
import { TitleText } from "~/shell/header/left/title/text";
import { SparkleButton } from "~/shell/header/left/title/sparkle-button";
import { LightingGlow } from "~/components/decoration/lighting/glow";
import { resolvePresence } from "~/utils/animation";
import { LightingShadow } from "~/components/decoration/lighting/shadow";

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
          <LightingShadow
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
