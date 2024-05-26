import { FC } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { isString } from "~/utils/validation/is/string";
import { LinesHorizontal } from "~/components/lines/horizontal";
import clsx from "clsx";
import { PortalBody } from "@brysonandrew/layout-portal";
import { TPillBHoverProps } from "~/components/buttons/pill/b/hover";
import { LinesHorizontalShadow } from "~/components/lines/horizontal/shadow";
import { useContextGrid } from "~/context";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { PRESENCE_OPACITY_ANIMATE_DELAY_02 } from "~/constants/animation";

type TProps = Pick<
  TPillBHoverProps,
  "children" | "subtitle" | "direction"
> & { isShown: boolean };
export const PillBHoverOverlay: FC<
  TProps
> = ({
  children,
  subtitle,
  direction = "ltr",
  isShown,
}) => {
  return (
    <PortalBody>
      <AnimatePresence mode="wait">
        {isShown && (
          <>
            <motion.div
              className="fill bg-white dark:bg-gray rounded-lg z-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
             
            />
            <motion.div
              style={{ maxWidth: 1200 }}
              className={clsx(
                "absolute flex flex-col justify-center items-end h-screen z-0 pointer-events-none",
                direction === "ltr"
                  ? "right-0"
                  : "left-0"
              )}
              {...PRESENCE_OPACITY_ANIMATE_DELAY_02}
            >
              {isString(children) ? (
                <div
                  className={clsx(
                    "relative center min-w-0 px-2 w-full sm:px-4 lg:px-24 xl:px-32 xl:w-xl top-0 left-1/2 -translate-x-1/2",
                    direction === "ltr"
                      ? "column-end text-right"
                      : "column-start text-left"
                  )}
                >
                  <h3 className="text-4xl sm:text-6xl xl:text-8xl char-gap-6 text-white-8 dark:text-black-2 font-title _outline-filter">
                    {children}
                  </h3>
                  {subtitle && (
                    <>
                      <div className="relative w-full">
                        <LinesHorizontal
                          colorClass="text-teal dark:text-blue border-t-current _gradient-border"
                          opacityClass="opacity-100"
                          sizeClass="border-t-4"
                        />
                        <div className="h-1" />
                        <LinesHorizontal
                          opacityClass="opacity-100"
                          sizeClass="border-t-4"
                        />
                      </div>
                      <div className="h-4" />
                      <div className="relative text-4xl xl:text-5xl font-sans mix-blend-soft-light">
                        <LinesHorizontalShadow />
                        <div
                          className={clsx(
                            "relative text-teal dark:text-black",
                            direction ===
                              "ltr"
                              ? "text-right"
                              : "text-left"
                          )}
                        >
                          {subtitle}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <>{children}</>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </PortalBody>
  );
};
