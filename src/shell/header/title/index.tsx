import type { FC } from "react";
import { useScroll } from "@shell/providers/context/scroll";
import { TitleText } from "@/shell/header/title/text";
import { SparkleButton } from "@/shell/header/title/sparkle-button";
import { Glow } from "@/components/decoration/glow";

export const Title: FC = () => {
  const { isScroll } = useScroll();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative row gap-0 md:(gap-4 w-auto)">
      <div className="relative">
        <Glow classValue="-inset-1" />
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
