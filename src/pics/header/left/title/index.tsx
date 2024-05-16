import type { FC } from "react";
import { TitleText } from "~/pics/header/left/title/text";
import { SparkleButton } from "~/pics/header/left/title/sparkle-button";

export const Title: FC = () => {
  return (
    <div className="row items-center gap-4">
      <TitleText />
      <SparkleButton />
    </div>
  );
};
