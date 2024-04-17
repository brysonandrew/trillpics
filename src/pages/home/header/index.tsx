import {
  FC,
  PropsWithChildren,
} from "react";
import clsx from "clsx";
import { HeaderRight } from "@/pages/home/header/right";
import { useVideoStore } from "@/store";
import { TCooldownProps } from "@/pages/home/header/config";
import { HeaderLeft } from "@/pages/home/header/left";
import { motion } from "framer-motion";
import { resolvePresence } from "@brysonandrew/animation";

type TProps =
  PropsWithChildren<TCooldownProps>;
export const Header: FC<
  TProps
> = ({isCooldown}) => {
  const { isPreviewOpen } =
    useVideoStore();

  if (isPreviewOpen) return null;

  return (
    <motion.header
  {...resolvePresence({opacity:0},{opacity:isCooldown ? 0.2 :1})}
      className={clsx(
        "fixed left-0 top-0 right-0 column w-full h-0 font-display z-50"
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
