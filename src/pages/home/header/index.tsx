import {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { HeaderRight } from "~/pages/home/header/right";
import { useVideoStore } from "~/store";
import { TCooldownProps } from "~/pages/home/header/config";
import { HeaderLeft } from "~/pages/home/header/left";
import { resolvePresence, TRANSITION_02_EASE_IN_04 } from "@brysonandrew/motion-core";

type TProps =
  PropsWithChildren<TCooldownProps>;
export const Header: FC<TProps> = ({
  isCooldown,
}) => {
  const { isPlayerOpen } =
    useVideoStore();

  if (isPlayerOpen) return null;

  return (
    <motion.header
      {...resolvePresence(
        { opacity: 0, y: '-100%' },
        {
          opacity: 1,
          y:0,
          ...TRANSITION_02_EASE_IN_04
        }
      )}
      className={clsx(
        "fixed left-0 top-0 right-0 column w-full h-0 z-50"
      )}
    >
      <div
        className={clsx(
          "relative top-4 h-0 container mx-auto row-start-space"
        )}
      >
        <HeaderLeft />
        <HeaderRight />
      </div>
    </motion.header>
  );
};
