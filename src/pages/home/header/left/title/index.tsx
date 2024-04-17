import type { FC } from "react";
import { useScroll } from "@shell/providers/context/scroll";
import { TitleText } from "@/pages/home/header/left/title/text";
import { SparkleButton } from "@/pages/home/header/left/title/sparkle-button";
import { Glow } from "@/components/decoration/glow";
import { resolvePresence } from "@utils/animation";

export const Title: FC = () => {
  const { isScroll } = useScroll();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative row gap-0 md:(gap-4 w-auto)">
      <div className="relative">
        <Glow
          classValue="-inset-1"
          {...resolvePresence(
            { opacity: 0 },
            { opacity: 0.2 }
          )}
        />
        {isScroll ? (
          <button onClick={handleClick}>
            <TitleText />
          </button>
        ) : (
          <TitleText />
        )}
      </div>
      <SparkleButton />
    </div>
  );
};
