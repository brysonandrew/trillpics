import { FC, useMemo } from "react";
import { DarkMode } from "@shell/header/right/dark-mode";
import { ScrollTop } from "@shell/header/right/ScrollTop";
import { useLocation } from "react-router";
import { useScroll } from "@shell/providers/context/scroll";
import { Background } from "@components/decoration/background";
import { Video } from "./video";

export const HeaderRight: FC = () => {
  const { pathname } = useLocation();
  const { isScroll } = useScroll();

  const rightItems = useMemo(() => {
    return [
      isScroll ? ScrollTop : null,
      DarkMode,
      Video,

    ].filter(Boolean) as FC[];
  }, [pathname, isScroll]);

  return (
    <div className="relative column-reverse md:row-wrap shrink-0 lowercase">
      <Background/>
      {rightItems.map((Item, index) => (
        <div
          key={`${index}`}
          className="relative center h-20 px-4"
        >
                        

          <div className="relative size-8 rounded-full bg-main"><Item /></div>
        </div>
      ))}
    </div>
  );
};
