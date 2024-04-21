import type {
  CSSProperties,
  FC,
} from "react";
import { useScroll } from "~/shell/providers/context/scroll";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { IconsArrowsUp2 } from "~/components/icons/arrows/up2";
import { useTimeoutRef } from "@brysonandrew/hooks-window";

export const ScrollTop: FC<
  CSSProperties
> = (props) => {
  const {
    listRef,
    isScroll,
    onMotionBlurEnd,
    onMotionBlurStart,
  } = useScroll();
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  if (!isScroll) return null;

  const handleClick = () => {
    listRef.current.scrollTo({
      scrollDirection: 'backward',
      scrollOffset: 0,
      scrollUpdateWasRequested: false,
    });
    // endTimeout();
    // if (listRef.current) {
    //   timeoutRef.current =

    //   onMotionBlurStart();
    //   setTimeout(() => {
    //     onMotionBlurEnd();
    //   }, 500);
    // }
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
