import type { FC } from "react";
import { animate } from "framer-motion";
import { IconsShuffle } from "~/components/icons/pic/shuffle";
import { useTrillPicsStore } from "~/store/middleware";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useContextGrid } from "~/context";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";

export const PicsFloatingShuffle: FC =
  () => {
    const { main } = useContextGrid();
    const { updatePics } =
      useTrillPicsStore(
        ({ updatePics }) => ({
          updatePics,
        })
      );
    const randomizePics = () => {
      const prev =
        main.blur.value.x.get();
      main.blur.control.x = animate(
        main.blur.value.x,
        100,
        {
          type: "tween",
          onComplete: () =>
            main.blur.value.x.set(prev),
        }
      );
      updatePics();
    };
    const title = "Randomize Pics";
    return (
        <PillBHover
          key={title}
          title={title}
          subtitle="Arrange the pics in random order."

          onClick={randomizePics}
          Icon={IconsShuffle}
          {...PRESENCE_OPACITY}
        >
          Shuffle
        </PillBHover>
    );
  };
