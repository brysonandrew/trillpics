import type { FC } from "react";
import { useScroll } from "@shell/providers/context/scroll";
import { TitleApp } from "@shell/header/title/app";
import { SparkleButton } from "@/shell/header/title/sparkle-button";

export const Title: FC = () => {
  const { isScroll } = useScroll();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative row-start gap-0 md:(gap-4 w-auto)">
      {isScroll ? (
        <button onClick={handleClick}>
          <TitleApp />
        </button>
      ) : (
        <TitleApp />
      )}
      <SparkleButton />
    </div>
  );
};
