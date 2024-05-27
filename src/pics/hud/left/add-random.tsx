import type { FC } from "react";
import { IconsPlusQuestion } from "~/components/icons/plus";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { resolvePicRandoms } from "~/hooks/pic/randoms";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { useTrillPicsStore } from "~/store/middleware";
import { usePicSelectedWrite } from "~/hooks/pic/selected/write";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";

export const HUD_LEFT_ADD_RANDOM_HOVER_KEY = "Randomize";// 

export const HudLeftAddRandom: FC<
  Partial<TPillBHoverProps>
> = (props) => {
  const { pics } = useTrillPicsStore(
    ({ pics }) => ({
      pics,
    })
  );
  const select = usePicSelectedWrite();
  const handleClick = () => {
    const randoms = resolvePicRandoms({
      pics,
    });
    select(randoms);
  };

  return (
    <PillBHover
      onClick={handleClick}
      direction="ltr"
      title={HUD_LEFT_ADD_RANDOM_HOVER_KEY}
      subtitle={`Add ${MAX_COUNT} pics at random from the gallery.`}
      layout={false}
      Icon={IconsPlusQuestion}
      {...PRESENCE_OPACITY}
      {...props}
    />
  );
};
