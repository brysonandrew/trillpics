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
import { boxSize } from "~uno/rules/box/size";
import { THudContainer } from "~/pics/hud";
import { TDraggerMotion } from "~/shell/init/context/dragger";
import { TButtonMotionProps } from "@brysonandrew/config-types";

type TProps = Omit<TButtonMotionProps, 'children'> & {
  container: THudContainer;
  isColumn: boolean;
  left: number;
  width: number;
  size?: number;
  bottom?: number;
  children?(
    motionValuesRecord: TDraggerMotion
  ): JSX.Element;
};
export const _RootReorderDragger: FC<
  TProps
> = ({
  container,
  bottom = 0,
  size: _size,
  width,
  children,
  isColumn,
  style,
  left,
  ...props
}) => {
  const { main, move } =
    useContextReady();
  const { x, y } = main.dragger;
  const title =
    "Drag video pic position";

  const start = () => {
    main.cursor.isOnGrid = false;
  };
  const stop = () => {
    main.cursor.isOnGrid = true;
  };

  const { isHover, motionHandlers } =
    useHoverKey({
      handlers: { start, stop },
    });

  const handlePointerDown: PointerEventHandler<
    HTMLButtonElement
  > = (event) => {
    main.cursor.isDragging = true;
    main.dragger.prevY =
      main.dragger.y.get();
  };
  const s = boxSize();

  const leftAdj =
    left +
    width / 2 -
    (isColumn ? s.m05 : s.m);

  const handlePointerUp = () => {
    main.cursor.isDragging = false;

    const y = main.dragger.y.get();
    if (y === main.dragger.prevY) {
      const openY =
        -container.height / 4;
      const currY =
        main.dragger.y.get();
      const nextY =
        openY / 2 < currY ? openY : 0;
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
  const size = _size ?? s.m125;
  return (
    <>
      {children?.(main.dragger)}
      <motion.button
        drag
        dragConstraints={{
          left: 0, // -container.width * 0.5,
          bottom: bottom - s.m05,
          right: 0, // container.width * 0.5,
          top:
            -container.height *
            (isColumn ? 0.8 : 0.4),
        }}
        className={clsx(
          "center absolute rounded-md _gradient-radial",
          isHover(title)
            ? "grayscale-100"
            : ""
        )}
        style={{
          x,
          y,
          bottom,
          left: leftAdj,
          width: size,
          height: size,
          ...style,
        }}
        {...resolveAccessibilityTitles(
          title
        )}
        onPointerDown={
          handlePointerDown
        }
        onPointerUp={handlePointerUp}
        {...motionHandlers(title)}
        {...props}
      >
        <div
          className="relative rounded-md _box-dots cursor-grab focus:cursor-grabbing"
          style={{
            width: size - size / 12,
            height: size - size / 12,
          }}
        />
      </motion.button>
    </>
  );
};
