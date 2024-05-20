import {
  FC,
  PointerEventHandler,
  useEffect,
} from "react";
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useTrillPicsStore } from "~/store/middleware";
import { useContextGrid } from "~/context";
import { useHoverKey } from "~/hooks/use-hover-key";
import clsx from "clsx";
import { resolveAccessibilityTitles } from "@brysonandrew/utils-attributes";
import { boxSize } from "~/constants/box/size";
import { TDimensions } from "@brysonandrew/config-types";

type TProps = {
  container: TDimensions;
  width: number;
  height: number;
  children(
    x: MotionValue,
    y: MotionValue
  ): JSX.Element;
};
export const Dragger: FC<TProps> = ({
  container,
  height,
  width,
  children,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(height);

  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );
  const { main } = useContextGrid();

  const title = "Drag video pics";

  useEffect(() => {
    animate<number>(
      y,
      -container.height / 6 + s.m,
      {
        ease: "easeIn",
        duration: 1,
      }
    );
  }, []);

  const { isHover, motionHandlers } =
    useHoverKey();

  const handlePointerDown: PointerEventHandler<
    HTMLButtonElement
  > = (event) => {
    main.cursor.isDragging = true;
  };
  const s = boxSize();

  const tx = useTransform(
    x,
    (v) => v / 1.6
  );
  const ty = useTransform(
    y,
    (v) => v / 1.6
  );

  const left = width / 2 - s.m;
  return (
    <>
      {children(tx, ty)}
      <motion.button
        drag
        dragConstraints={{
          left: 0,
          bottom: s.m,
          right: 0,
          top:
            -container.height / 2 + s.m,
        }}
        className={clsx(
          "absolute bottom-full center rounded-md mb-4 _gradient-radial",
          isHover(title)
            ? "grayscale-100"
            : ""
        )}
        style={{
          x,
          y,
          left,
          width: s.m2,
          height: s.m2,
        }}
        {...resolveAccessibilityTitles(
          title
        )}
        onPointerDown={
          handlePointerDown
        }
        {...motionHandlers(title)}
      >
        <div
          className="rounded-md _r-dots cursor-grab focus:cursor-grabbing"
          style={{
            width: s.m2 - s.m025,
            height: s.m2 - s.m025,
          }}
        />
      </motion.button>
    </>
  );
};
