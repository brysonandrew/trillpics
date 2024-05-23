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
import { useContextGrid } from "~/context";
import { useHoverKey } from "~/hooks/use-hover-key";
import clsx from "clsx";
import { resolveAccessibilityTitles } from "@brysonandrew/utils-attributes";
import { boxSize } from "~/constants/box/size";
import { TDimensions } from "@brysonandrew/config-types";
import { TMotionPoint } from "@brysonandrew/motion-config-types";

type TMotionValuesRecord =
  TMotionPoint & {
    x025: MotionValue;
    y05: MotionValue;
    y033: MotionValue;
  };
type TProps = {
  container: TDimensions;
  left: number;
  width: number;
  height: number;
  children(
    motionValuesRecord: TMotionValuesRecord
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
  const x = useMotionValue(0);
  const y = useMotionValue(height);
  const { main } = useContextGrid();

  const title = "Drag video pics";

  useEffect(() => {
    animate<number>(
      y,
      -container.height / 2 + s.m,
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

  const x025 = useTransform(
    x,
    (v) => v / 4
  );
  const y033 = useTransform(
    y,
    (v) => v / 3
  );

  const y05 = useTransform(
    y,
    (v) => v / 2
  );

  const left = props.left + width / 2;

  return (
    <>
      {children({
        x025,
        y033,
        y05,
        x,
        y,
      })}
      <motion.button
        drag
        dragConstraints={{
          left: 0,
          bottom: 0,
          right: 0,
          top:
            -container.height / 2 + s.m,
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
