import { Glow } from "@components/decoration/glow";
import { AnimatePresence } from "framer-motion";
import type {
  FC,
  PropsWithChildren,
} from "react";

export const Circle: FC<
  PropsWithChildren<{
    isGlow?: boolean;
  }>
> = ({ isGlow, children }) => {
  return (
    <div className="relative center size-16 px-4 z-10">
      <AnimatePresence>
        {isGlow && (
          <Glow
            key="GLOW_KEY"
          />
        )}
      </AnimatePresence>
      <div className="relative size-8">
        <div className="relative">{children}</div>
      </div>
    </div>
  );
};
