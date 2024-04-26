import { createElement } from "react";
import { motion } from "framer-motion";
import { useScroll as useScrollContext } from "~/context/scroll";
import clsx from "clsx";
import { CB } from "~/components/buttons/circle";
import { CBB } from "~/components/buttons/circle/CBB";
import { useBase } from "~/context/base";
import { IconsCross } from "~/components/icons/cross";
import { IconsGallery } from "~/components/icons/pic/gallery";
import { resolveVerticalShiftPresence } from "~/utils/animation";
import { useHoverKey } from "~/hooks/use-hover-key";
import { TRANSITION } from "@brysonandrew/motion-config-constants";
import {
  ICON_CLASS_VALUE_PROPS,
  SHARED_ANIMATION_PROPS,
  resolveScale,
} from "../config";

export const Menu = () => {
  const { isMenu, onMenu } = useBase();
  const { isScroll } =
    useScrollContext();
  const title = `Open menu`;

  const { isHover, handlers } =
    useHoverKey();
  const handleTap = () => {
    onMenu();
  };
  const iconProps = (
    origin: `${number}%`
  ) => ({
    key: origin,
    ...ICON_CLASS_VALUE_PROPS,
    ...resolveVerticalShiftPresence(
      origin
    ),
  });
  const scale = resolveScale({
    isHover: isHover(title),
    isScroll,
  });

  return (
    <motion.div
      animate={{
        scale,
      }}
      transition={{
        ...TRANSITION,
        delay: isScroll ? 0.1 : 0,
      }}
      {...SHARED_ANIMATION_PROPS}
      {...handlers(title)}
    >
      <CB
        classValue={clsx(
          "preserve-3d perspective-1000"
        )}
      >
        <CBB
          title={title}
          onTap={handleTap}
        >
          <div className="absolute -inset-2 center rounded-full">
            {createElement(
              isMenu
                ? IconsCross
                : IconsGallery,
              {
                ...iconProps(
                  isMenu
                    ? "-100%"
                    : "100%"
                ),
              }
            )}
          </div>
        </CBB>
      </CB>
    </motion.div>
  );
};
