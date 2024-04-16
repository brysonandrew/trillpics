import {
  CSSProperties,
  FC,
  useMemo,
} from "react";
import { AnimatePresence } from "framer-motion";
import { DarkMode } from "@shell/header/right/dark-mode";
import { ScrollTop } from "@/shell/header/right/scroll-top";
import { useLocation } from "react-router";
import { useScroll } from "@shell/providers/context/scroll";
import { Circle } from "@components/decoration/circle";
import { PRESENCE_OPACITY } from "@brysonandrew/animation";
import { useCircleButtonStyle } from "@/components/interactive/use-circle-button-style";

export const HeaderRight: FC = () => {
  const { pathname } = useLocation();
  const { isScroll } = useScroll();
  const style = useCircleButtonStyle();

  const rightItems = useMemo(() => {
    return [
      isScroll ? ScrollTop : null,
      DarkMode,
    ].filter(
      Boolean
    ) as FC<CSSProperties>[];
  }, [pathname, isScroll]);
  return (
    <div className="relative column-reverse shrink-0 gap-4 lowercase py-2 md:row-wrap">
      <AnimatePresence>
        {rightItems.map((Item) => (
          <Circle
            key={Item.name}
            isGlow
            {...PRESENCE_OPACITY}
          >
            
            <Item {...style} />
          </Circle>
        ))}
      </AnimatePresence>
    </div>
  );
};
