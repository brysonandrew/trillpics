import type { FC } from "react";
import { IconsPlusQuestion } from "~/components/icons/plus";
import { useContextGrid } from "~/context";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { useBlurAnimate } from "~/hooks/animate/blur/animate";
import { resolvePicRandoms } from "~/hooks/pic/randoms";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { useTrillPicsStore } from "~/store/middleware";
import { usePicSelectedWrite } from "~/hooks/pic/selected/write";

export const HudLeftAddRandom: FC<
  Partial<TPillBHoverProps>
> = (props) => {
  const { ref } = useContextGrid();
  const handleBlur = useBlurAnimate();
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
    // if (!ref.current) return;
    // const cell =
    //   ref.current?.scrollToRandom();
    // handleBlur();
    // if (!cell) return;
    // const { currName } =
    //   detailsFromCell({
    //     cell,
    //     columnsCount,
    //     pics,
    //   });
    // if (currName === null) return;
    // add(currName);
  };

  return (
    <PillBHover
      onClick={handleClick}
      direction="rtl"
      title="Add Random Pic"
      subtitle="Add a randomly selected pic from the gallery to your video."
      layout={false}
      Icon={IconsPlusQuestion}
      {...PRESENCE_OPACITY}
      {...props}
    />
  );
};
