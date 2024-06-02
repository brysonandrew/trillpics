import type { FC } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import clsx from "clsx";
import { title } from "process";
import { isString } from "unocss";
import { TPillBProps } from "~/components/buttons/pill/b";
import { ButtonPillBIcon } from "~/components/buttons/pill/b/icon";
import { FADE_PRESENCE_DELAY_02 } from "~/constants/animation";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";

export const PillBLayout: FC<
  Partial<TPillBProps>
> = ({
  isSelected,
  direction,
  outerCircle,
  isFlat,
  Icon,
  children,
}) => {
  const s = boxSize();
  const borderRadius = boxRadius();
  return (
    <>
      {isSelected && (
        <motion.div
          className="absolute _gradient-radial pointer-events-none"
          style={{
            borderRadius,
            ...(direction === "ltr"
              ? { left: 0 }
              : { right: 0 }),
            top: 0,
            width: s.m,
            height: s.m,
          }}
          initial={{
            scale: 1,
            opacity: 0,
          }}
          animate={{
            scale: 1.075,
            opacity: 1,
          }}
          exit={{
            scale: 1,
            opacity: 0,
          }}
        />
      )}

      <motion.div
        key={resolveCompositeKey(
          "PillB.motion.div.Icon",
          title
        )}
        className={clsx(
          "center relative bg-white dark:bg-black pointer-events-none",
          isFlat
            ? ""
            : "_gradient-radial"
        )}
        style={{
          height: s.m,
          borderRadius,
          marginLeft: 0,
        }}
      >
        <ButtonPillBIcon
          isSelected={isSelected}
          Icon={Icon}
          outerCircle={outerCircle}
        />
      </motion.div>

      <AnimatePresence>
        {isString(children) ? (
          <motion.div
            key={`${title}`}
            className="relative top-2 px-0 text-left text-sm pointer-events-none"
            style={{
              height: s.height,
            }}
            {...FADE_PRESENCE_DELAY_02}
          >
            <div className="uppercase font-sans _outline-filter lg:(text-sm whitespace-nowrap) pointer-events-none">
              <div
                className="absolute -inset-y-4 -inset-x-1 _gradient-radial opacity-10 filter-blur-md pointer-events-none"
                style={{
                  borderRadius,
                }}
              />
              <span className="relative dark:text-black text-white-8 _outline-filter whitespace-nowrap pointer-events-none">
                {children}
              </span>
            </div>
          </motion.div>
        ) : (
          <>{children}</>
        )}
      </AnimatePresence>
    </>
  );
};
