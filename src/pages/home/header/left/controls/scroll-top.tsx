import type {
  CSSProperties,
  FC,
} from "react";
import { animate } from "framer-motion";
import { useScroll } from "~/context/scroll";
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
  const { blurY, blurYRef } =
    useScroll();
  if (!isScroll) return null;

  const handleClick = () => {
    const scrollOffset =
      listRef.current.state
        .scrollOffset;

    // console.log(props);
    if (
      typeof scrollOffset === "number"
    ) {
      // console.log("N");
    } else {
      console.log("NAN ", scrollOffset);
      console.log(
        "get ",
        blurY.get(),
        scrollOffset
      );
    }

    // console.dir(listRef.current);
    listRef.current.scrollToItem(0);

    if (blurYRef.current) {
      console.log("STOP");
      blurYRef.current.stop();
    }

    blurYRef.current = animate(
      blurY,
      scrollOffset * 0.001,
      {
        // type: "tween",
        // ease: "easeOut",
        // type: "tween",
        type: "inertia",

        restDelta: 0,
        restSpeed: 1,
        velocity: scrollOffset * 0.01,
      }
    );
    // listRef.current.scrollTo({
    //   scrollDirection: "backward",
    //   scrollOffset: 0,
    //   scrollUpdateWasRequested: true,
    // });
    // scrollY.set(0);
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
