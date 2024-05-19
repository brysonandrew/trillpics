import type {
  FC,
  PointerEventHandler,
} from "react";
import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useTrillPicsStore } from "~/store/middleware";
import { useContextGrid } from "~/context";

type TProps = {
  children(
    x: MotionValue,
    y: MotionValue
  ): JSX.Element;
};
export const Dragger: FC<TProps> = ({
  children,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );
  const { main } = useContextGrid();

  const handlePointerDown: PointerEventHandler<
    HTMLButtonElement
  > = (event) => {
    main.cursor.isDragging = true;
  };

  const tx = useTransform(
    x,
    (v) => v / 1.4
  );
  const ty = useTransform(
    y,
    (v) => v / 1.4
  );

  if (!screen.isDimensions) return null;

  return (
    <>
      <motion.div
        drag
        dragConstraints={{
          left: 0,
          bottom: 40,
          right: 0,
          top:
            -screen.container.height /
              4 +
            40,
        }}
        className="absolute left-1/2 -translate-x-1/2 bottom-full center rounded-md mb-4 w-12 h-12 _gradient-radial"
        style={{ x, y }}
      >
        <button
          className="w-11 h-11 rounded-md _r-dots cursor-grab focus:cursor-grabbing"
          onPointerDown={
            handlePointerDown
          }
        />
      </motion.div>
      {children(tx, ty)}
    </>
  );
};
