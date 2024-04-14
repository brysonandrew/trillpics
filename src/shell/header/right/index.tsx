import { FC, useMemo } from "react";
import { DarkMode } from "@shell/header/right/dark-mode";
import { ScrollTop } from "@shell/header/right/ScrollTop";
import { useLocation } from "react-router";
import { useScroll } from "@shell/providers/context/scroll";
import { Circle } from "@components/decoration/circle";

export const HeaderRight: FC = () => {
  const { pathname } = useLocation();
  const { isScroll } = useScroll();

  const rightItems = useMemo(() => {
    return [
      isScroll ? ScrollTop : null,
      DarkMode,
    ].filter(Boolean) as FC[];
  }, [pathname, isScroll]);

  return (
    <div className="relative column-reverse md:row-wrap shrink-0 lowercase">
      {rightItems.map((Item, index) => (
        <Circle key={`${index}`}>
          <div className="absolute inset-0 dark:bg-black bg-gray-6 opacity-50 rounded-full" />
          <Item />
        </Circle>
      ))}
    </div>
  );
};
