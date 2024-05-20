import { FC } from "react";
import { motion } from "framer-motion";
import { isString } from "~/utils/validation/is/string";
import { LinesHorizontal } from "~/pages/video/_common/footer/left/lines/horizontal";
import clsx from "clsx";
import { PortalBody } from "@brysonandrew/layout-portal";
import { TPillBHoverProps } from "~/components/buttons/pill/b/hover";

type TProps = Pick<
  TPillBHoverProps,
  "children" | "subtitle"
>;
export const PillBHoverOverlay: FC<
  TProps
> = ({ children, subtitle }) => {
  return (
    <PortalBody>
      <motion.div
        className="fill bg-gray rounded-lg z-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        exit={{ opacity: 0 }}
      />
      <div className="relative flex self-center justify-self-center h-screen z-50 pointer-events-none">
        {isString(children) ? (
          <div
            className={clsx(
              "relative gap-4 center min-w-0 px-4 lg:max-w-2/3 top-0 left-1/2 -translate-x-1/2",
              subtitle
                ? "column-start"
                : "column-center"
            )}
          >
            <h3 className="text-4xl xl:text-8xl char-gap-6 text-white-8 dark:text-black-2 font-title _outline-filter">
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
                <div className="relative column-start gap-4 text-2xl xl:text-4xl font-sans mix-blend-soft-light">
                  <div className="absolute -inset-4 bg-black dark:bg-white filter-blur-50 rounded-lg opacity-20" />
                  <span className="relative text-teal dark:text-black ">
                    {subtitle}
                  </span>
                </div>
              </>
            )}
          </div>
        ) : (
          <>{children}</>
        )}
      </div>
    </PortalBody>
  );
};
