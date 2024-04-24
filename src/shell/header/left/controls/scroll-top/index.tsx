import type {
  CSSProperties,
  FC,
} from "react";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { IconsArrowsUp2 } from "~/components/icons/arrows/up2";
import { useScrollTopHandler } from "~/shell/header/left/controls/scroll-top/use-scroll-top-handler";

export const ScrollTop: FC<
  CSSProperties
> = () => {
  const { isScroll, handler } =
    useScrollTopHandler();

  const title = "Go back";

  if (!isScroll) return null;
  return (
    <PillBHover
      title={title}
      onClick={handler}
      Icon={IconsArrowsUp2}
      // style={{ filter }}
    >
      {title}
    </PillBHover>
    // <SelfDestruct<TBlurPresenceProps>
    //   filterProps={{ id: "scrolltop" }}
    //   Filter={BlurPresence}
    // >
    //   {(filter) => (

    //   )}
    // </SelfDestruct>
  );
};
