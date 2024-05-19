import type {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import { useTrillPicsStore } from "~/store/middleware";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { GRADIENT_MESH_DARK } from "~app/color/gradient/mesh";
import clsx from "clsx";

type TProps =
  PropsWithChildren<TDivMotionProps>;
export const PicBackdrop: FC<
  TProps
> = ({ children, style, ...props }) => {
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );
  if (!screen.isDimensions) return null;
  const screenDimensions = {
    width: screen.width,
    height: screen.height,
  };
  return (
    <motion.div
      className={clsx("inset-0")}
      style={{
        position: "fixed",
        ...(screenDimensions ?? {}),
        backdropFilter:
          "blur(28px) grayscale(80%)",
        cursor: "pointer",
        ...style,
      }}
      {...props}
    >
      {children ?? (
        <div
          className="fill-screen _gradient-mesh"
          // style={{
          //   ...GRADIENT_MESH_DARK,
          //   backgroundSize: "4px 4px",
          // }}
        />
      )}
    </motion.div>
  );
};
