import type {
  CSSProperties,
  FC,
} from "react";
import { useScroll } from "@/shell/providers/context/scroll";
import { PillBHover } from "@/components/buttons/pill/b/hover";
import { IconsArrowsUp2 } from "@/components/icons/arrows/up2";

export const ScrollTop: FC<
  CSSProperties
> = (props) => {
  const { listRef, isScroll } =
    useScroll();
  if (!isScroll) return null;

  const handleClick = () => {
    window.scrollTo(0, 0);
    listRef?.current?.scrollToItem?.(0);
  };

  const title = "Go back";

  return (
    <PillBHover
      title={title}
      onClick={handleClick}
      Icon={IconsArrowsUp2}
    >
      {title}
    </PillBHover>
  );
};
