import { FC } from "react";
import { motion } from "framer-motion";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { useHoverKey } from "~/hooks/use-hover-key";
import { isDefined } from "~/utils/validation/is/defined";
import { isString } from "~/utils/validation/is/string";
import { LinesHorizontal } from "~/pages/video/_common/footer/left/lines/horizontal";
import clsx from "clsx";
import { PortalBody } from "@brysonandrew/layout-portal";

export type TPillBHoverProps =
  TPillBProps & {
    isLabel?: boolean;
    subtitle?: string | JSX.Element;
  };
export const PillBHover: FC<
  TPillBHoverProps
> = ({
  title,
  subtitle,
  children = title,
  isLabel,
  ...props
}) => {
  const { motionHandlers, isHover } =
    useHoverKey();

  const isHovering =
    isDefined<typeof title>(title) &&
    isHover(title);
  return (
    <>
      {isHovering && (
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
                <h3 className="text-4xl xl:text-8xl char-gap-6 font-title _outline-filter">
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
                      <span className="relative text-teal dark:text-black-2">
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
      )}
      <PillB
        title={title}
        {...motionHandlers(title)}
        {...props}
      >
        {isLabel
          ? title
          : null}
      </PillB>
    </>
  );
};
