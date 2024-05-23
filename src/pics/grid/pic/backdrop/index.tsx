import type {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import { useTrillPicsStore } from "~/store/middleware";
import { TDivMotionProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { Link, useSearchParams } from "react-router-dom";
import { VIDEO_ROUTE } from "~/constants/params";

type TProps =
  PropsWithChildren<TDivMotionProps>;
export const PicBackdrop: FC<
  TProps
> = ({ children, style, ...props }) => {
  const [searchParams] = useSearchParams()
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );
  if (!screen.isDimensions) return null;
  const screenDimensions = {
    width: screen.width,
    height: screen.height,
  };
  return (
    <Link
      className="flex fill-screen"
      to={`${VIDEO_ROUTE}?${searchParams}`}
    >
      <motion.div
        className={clsx("fill")}
        style={{
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
    </Link>
  );
};
