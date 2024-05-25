import {
  FC,
  PointerEventHandler,
  useEffect,
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
import { THudContainer } from "~/pics/hud/left";
import { TDraggerMotion } from "~/context/dragger";
import { LinesHorizontal1 } from "~/pages/video/_common/footer/left/lines/horizontal/1";

type TProps = {
  container: THudContainer;
  left: number;
  width: number;
  height: number;
  children(
    motionValuesRecord: TDraggerMotion
  ): JSX.Element;
};
export const _CommonReorderDragger: FC<
  TProps
> = ({
  container,
  height,
  width,
  children,
  ...props
}) => {
  const { main, dragger } =
    useContextGrid();
  const { x, y, y06, y075 } = dragger;
  const title = "Drag video pics";

  const start = () => {
    main.cursor.isDragging = true;
  };
  const stop = () => {
    main.cursor.isDragging = true;
  };
  useEffect(() => {
    animate<number>(
      dragger.y,
      -container.height / 2 - s.m2,
      {
        ease: "easeIn",
        duration: 0.4,
      }
    );
  }, []);

  const { isHover, motionHandlers } =
    useHoverKey({
      handlers: { start, stop },
    });

  const handlePointerDown: PointerEventHandler<
    HTMLButtonElement
  > = (event) => {
    main.cursor.isDragging = true;
  };
  const s = boxSize();

  const left =
    props.left + width / 2 - s.m;

  return (
    <>
      {children(dragger)}
      <motion.button
        drag
        dragConstraints={{
          left: 0, // -container.width * 0.5,
          bottom: 0,
          right: 0, // container.width * 0.5,
          top:
            -container.height * 0.75 -
            s.m,
        }}
        className={clsx(
          "center absolute rounded-md mb-4 _gradient-radial",
          isHover(title)
            ? "grayscale-100"
            : ""
        )}
        style={{
          x,
          y,
          bottom: 0,
          left,
          width: s.m125,
          height: s.m125,
        }}
        {...resolveAccessibilityTitles(
          title
        )}
        onPointerDown={
          handlePointerDown
        }
        {...motionHandlers(title)}
      >
        <LinesHorizontal1 />
        <div
          className="relative rounded-md _r-dots cursor-grab focus:cursor-grabbing"
          style={{
            width: s.m125 - s.m0125,
            height: s.m125 - s.m0125,
          }}
        />
      </motion.button>
    </>
  );
};
