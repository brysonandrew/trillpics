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
import { LayoutOverlayBackdrop } from "~/components/layout/overlay/backdrop";
import { boxSize } from "~uno/rules/box/size";

type TProps = Pick<
  TPillBHoverProps,
  "children" | "subtitle" | "direction"
> & {
  isShown?: boolean;
  backdrop?: JSX.Element;
};
export const LayoutOverlay: FC<
  TProps
> = ({
  children,
  subtitle,
  direction = "ltr",
  isShown = true,
  backdrop = <LayoutOverlayBackdrop />,
}) => {
  const s = boxSize();
  return (
    <PortalBody>
      <AnimatePresence>
        {isShown && (
          <>
            {backdrop}
            <motion.div
              style={{ maxWidth: 1200 }}
              className={clsx(
                "absolute top-0 flex flex-col justify-center items-end h-screen z-20 pointer-events-none",
                direction === "ltr"
                  ? "right-0"
                  : "left-0"
              )}
            >
              {isString(children) ? (
                <div
                  className={clsx(
                    "relative center min-w-0 w-full sm:px-2 lg:px-12 xl:px-24 xl:w-xl top-0 left-1/2 -translate-x-1/2",
                    direction === "ltr"
                      ? "column-end text-right"
                      : "column-start text-left"
                  )}
                  style={{ gap: s.m05 }}
                >
                  <h3 className="text-5xl sm:text-6xl xl:text-8xl char-gap-6 text-white-8 dark:text-black-2 font-title _outline-filter">
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
                      <div className="px-2 relative text-3.5xl md:text-4xl xl:text-5xl font-sans mix-blend-soft-light">
                        <LinesHorizontalShadow />
                        <div
                          className={clsx(
                            "relative leading-normal text-teal dark:text-black",
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
