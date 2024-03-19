import { FC, useMemo } from "react";
import { DarkMode } from "@shell/header/right/dark-mode";
import { ScrollTop } from "@shell/header/right/ScrollTop";
import { useLocation } from "react-router";
import { useScroll } from "@shell/providers/context/scroll";
import { Video } from "./video";

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
    <div className="row shrink-0 lowercase">
      {rightItems.map((Item, index) => (
        <div
          key={`${index}`}
          className="relative center h-14"
        >
          <Item />
        </div>
      ))}
    </div>
  );
};
