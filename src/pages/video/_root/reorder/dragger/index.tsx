import {
  FC,
  PointerEventHandler,
} from "react";
import {
  animate,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useContextReady } from "~/shell/ready/context";
import { useHoverKey } from "~/hooks/use-hover-key";
import clsx from "clsx";
import { resolveAccessibilityTitles } from "@brysonandrew/utils-attributes";
import { box } from "~uno/rules/box";
import { THudContainer } from "~/pics/hud";
import { TButtonMotionProps } from "@brysonandrew/config-types";

type TProps = Omit<
  TButtonMotionProps,
  "children"
> & {
  container: THudContainer;
  isColumn: boolean;
  left: number;
  size?: number;
};
export const _RootReorderDragger: FC<
  TProps
> = ({
  container,
  size,
  isColumn,
  style,
  left,
  ...props
}) => {
  
  const bottom =
    container.height / 2 - box._15;
  const { main, move } =
    useContextReady();
  const { x, y } = main.dragger;
  const title =
    "Drag video pic position";

  const handlePointerDown: PointerEventHandler<
    HTMLButtonElement
  > = (event) => {
    main.cursor.isDragging = true;
    main.dragger.prevY =
      main.dragger.y.get();
  };

  const handlePointerUp = () => {
    main.cursor.isDragging = false;

    const y = main.dragger.y.get();
    if (y === main.dragger.prevY) {
      const openY = 0;
      // -container.height / 4;
      const currY =
        main.dragger.y.get();
      const nextY =
        openY / 2 < currY ? openY : bottom;
      animate<number>(
        main.dragger.y,
        nextY,
        {
          ease: "easeIn",
          duration: 0.4,
        }
      );
    }
  };
  const handleAnimationComplete =
    () => {
      main.cursor.isDragging = false;
      move();
    };
  useMotionValueEvent(
    main.dragger.y,
    "animationComplete",
    handleAnimationComplete
  );
  useMotionValueEvent(
    main.dragger.y,
    "animationCancel",
    handleAnimationComplete
  );

  size = size ?? box._;
  return (
    <motion.button
      drag
      dragConstraints={{
        left: 0, // -container.width * 0.5,
        bottom,

        // (isColumn ? 0.8 : 0.4),,
        right: 0, // container.width * 0.5,
        top: 0,
      }}
      className={clsx(
        "center absolute rounded-md _bi-radial",
        // isHover(title)
        //   ? "grayscale-100"
        //   : ""
      )}
      style={{
        x,
        y,
        top: 0,
        bottom,
        left,
        width: size,
        height: size,
        ...style,
      }}
      {...resolveAccessibilityTitles(
        title
      )}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      // {...motionHandlers(title)}
      {...props}
    >
      <div
        className="relative rounded-md _bi-dots cursor-grab focus:cursor-grabbing"
        style={{
          width: size - size / 12,
          height: size - size / 12,
        }}
      />
    </motion.button>
  );
};
