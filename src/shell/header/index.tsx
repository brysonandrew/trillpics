import {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { withControlsCheck } from "~/store/hocs/with-controls-check";

type TProps = PropsWithChildren;
export const Header: FC<TProps> =
  withControlsCheck(({ children }) => {
    return (
      <motion.header
        className={clsx(
          "fixed left-0 top-0 right-0 column w-full h-0 z-0 z-10"
        )}
      >
        <div
          className={clsx(
            "relative top-4 h-0 container mx-auto row-start-space"
          )}
        >
          {children}
        </div>
      </motion.header>
    );
  });
