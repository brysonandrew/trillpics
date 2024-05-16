import type { FC } from "react";
import { TitleText } from "~/pics/header/left/title/text";
import { SparkleButton } from "~/pics/header/left/title/sparkle-button";

export const Title: FC = () => {
  return (
    <div className="relative top-1 -left-2 row items-center gap-4">
      <TitleText />
      <SparkleButton />
    </div>
  );
};
