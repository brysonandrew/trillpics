import type {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import { FULLSCREEN_Z } from "~/constants/dom";
import { useTrillPicsStore } from "~/store";

type TProps = PropsWithChildren;
export const PicBackdrop: FC<
  TProps
> = ({ children }) => {
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );
  if (!screen.isDimensions) return null;
  const screenDimensions = {
    width: screen.width,
    height: screen.height,
  };
  return (
    <>
      <motion.div
        className="inset-0 zoom-out"
        style={{
          position: "fixed",
          zIndex: FULLSCREEN_Z,
          ...(screenDimensions ?? {}),
          backdropFilter:
            "blur(28px) grayscale(80%)",
          cursor: "zoom-out",
        }}
      />
      {children}
    </>
  );
};
