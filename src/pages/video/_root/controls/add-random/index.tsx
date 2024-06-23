import type { FC } from "react";
import { IconsPlusQuestion } from "~/components/icons/plus";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";
import { ShowPics } from "~/components/show-pics";
import { useContextReady } from "~/shell/ready/context";

export const ADD_RANDOM_HOVER_KEY =
  "Randomize"; //

export const HudLeftAddRandom: FC<
  Partial<TPillBHoverProps>
> = (props) => {
const {random:[randoms, handleClick, randomize] } = useContextReady()
  return (
    <PillBHover
      hoverKeyConfig={{
        handlers: { stop: randomize },
      }}
      onClick={handleClick}
      direction="ltr"
      title={
        ADD_RANDOM_HOVER_KEY
      }
      subtitle={
        <ShowPics
          title={`Add ${MAX_COUNT} pics at random from the gallery.`}
          names={randoms}
        />
      }
      layout={false}
      Icon={IconsPlusQuestion}
      {...PRESENCE_OPACITY}
      {...props}
    />
  );
};
