import {
  FC,
  PointerEventHandler,
} from "react";
import {
  animate,
  motion,
} from "framer-motion";
import { useContextGrid } from "~/context";
import { useHoverKey } from "~/hooks/use-hover-key";
import clsx from "clsx";
import { resolveAccessibilityTitles } from "@brysonandrew/utils-attributes";
import { boxSize } from "~/constants/box/size";
import { TDraggerMotion } from "~/context/dragger";
import { LinesHorizontal1 } from "~/components/lines/horizontal/1";
import { THudContainer } from "~/pics/hud";
import { useDraggerReset } from "~/pages/video/_root/reorder/use-dragger-reset";
import { TDimensions } from "@brysonandrew/config-types";

type TProps = {
  container: THudContainer;
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
  ...props
}) => {
  const { main, dragger } =
    useContextGrid();
  const { x, y } = dragger;
  const title = "Drag video pics";

  const start = () => {
    main.cursor.isDragging = true;
  };
  const stop = () => {
    main.cursor.isDragging = true;
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

  const left =
    props.left + width / 2 - s.m;

  const handlePointerUp = () => {
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
  const size = _size ?? s.m125;
  return (
    <>
      {children?.(dragger)}
      <motion.button
        drag
        dragConstraints={{
          left: 0, // -container.width * 0.5,
          bottom,
          right: 0, // container.width * 0.5,
          top: -container.height * 0.5,
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
          left,
          width: size,
          height: size,
        }}
        {...resolveAccessibilityTitles(
          title
        )}
        onPointerDown={
          handlePointerDown
        }
        onPointerUp={handlePointerUp}
        {...motionHandlers(title)}
      >
        {/* <LinesHorizontal1 /> */}
        <div
          className="relative rounded-md _r-dots cursor-grab focus:cursor-grabbing"
          style={{
            width: size - size / 8,
            height: size - size / 8,
          }}
        />
      </motion.button>
    </>
  );
};
