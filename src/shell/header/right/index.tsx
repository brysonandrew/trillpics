import { FC, useMemo } from "react";
import { DarkMode } from "@shell/header/right/dark-mode";
import { ScrollTop } from "@shell/header/right/ScrollTop";
import { useLocation } from "react-router";
import { useScroll } from "@shell/providers/context/scroll";
import { Video } from "./video";
import { Background } from "@components/decoration/background";

export const HeaderRight: FC = () => {
  const { pathname } = useLocation();
  const { isScroll } = useScroll();

  const rightItems = useMemo(() => {
    return [
      isScroll ? ScrollTop : null,
      Video,
      DarkMode,
    ].filter(Boolean) as FC[];
  }, [pathname, isScroll]);

  return (
    <div className="relative column-reverse md:row-wrap shrink-0 lowercase">
      <Background/>
      {rightItems.map((Item, index) => (
        <div
          key={`${index}`}
          className="relative center h-10 sm:h-20 px-4"
        >
          <Item />
        </div>
      ))}
    </div>
  );
};
