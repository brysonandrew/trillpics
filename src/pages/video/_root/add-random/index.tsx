import type { FC } from "react";
import { IconsPlusQuestion } from "~/components/icons/plus";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";
import { useAddRandomHandler } from "~/hooks/pic/add-random/handler";

export const HUD_LEFT_ADD_RANDOM_HOVER_KEY =
  "Randomize"; //

export const HudLeftAddRandom: FC<
  Partial<TPillBHoverProps>
> = (props) => {
  const handleClick =
    useAddRandomHandler();

  return (
    <PillBHover
      onClick={handleClick}
      direction="ltr"
      title={
        HUD_LEFT_ADD_RANDOM_HOVER_KEY
      }
      subtitle={`Add ${MAX_COUNT} pics at random from the gallery.`}
      layout={false}
      Icon={IconsPlusQuestion}
      {...PRESENCE_OPACITY}
      {...props}
    />
  );
};
