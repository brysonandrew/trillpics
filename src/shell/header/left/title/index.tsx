import type { FC } from "react";
import { useScroll } from "~/context/scroll";
import { TitleText } from "~/shell/header/left/title/text";
import { SparkleButton } from "~/shell/header/left/title/sparkle-button";
import { Glow } from "~/components/decoration/glow";
import { resolvePresence } from "~/utils/animation";

export const Title: FC = () => {

  return (
    <div className="relative row gap-0 md:(gap-4 w-auto)">
      <div className="relative h-18">
        <Glow
          classValue="-inset-1"
          {...resolvePresence(
            { opacity: 0 },
            { opacity: 0.2 }
          )}
        />
            <TitleText />

        <h2 className="text-lg px-1 char-gap-7">
          AI Art Gallery
        </h2>
      </div>
      <SparkleButton />
    </div>
  );
};
