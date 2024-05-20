import type { FC } from "react";
import { IconsPlusQuestion } from "~/components/icons/plus";
import { useContextGrid } from "~/context";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { usePicVideo } from "~/hooks/pic/video";
import { useBlurAnimate } from "~/hooks/animate/blur/animate";

export const HudLeftAddRandom: FC<
  Partial<TPillBHoverProps>
> = (props) => {
  const { ref } = useContextGrid();
  const { add } = usePicVideo();
  const handleBlur = useBlurAnimate();

  const handleClick = () => {
    if (!ref.current) return;
    const cell =
      ref.current?.scrollToRandom();
    handleBlur();
    if (!cell) return;
    add(cell);
  };

  return (
    <PillBHover
      classValue="fill"
      onClick={handleClick}
      title="Add Random Pic"
      subtitle="Add a randomly selected pic from the gallery to your video."
      Icon={IconsPlusQuestion}
      {...props}
    />
  );
};
