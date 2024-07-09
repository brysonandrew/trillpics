import type { FC } from "react";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { COLOR_SHADE_RECORD } from "~uno/color";

export const DarkGlass: FC = () => {
  return (
    <BackgroundGlass
      boxStyle={{
        left: 0,
        backdropFilter: "blur(4px)",
        backgroundColor:
          COLOR_SHADE_RECORD["dark-08"],
      }}
    />
  );
};
