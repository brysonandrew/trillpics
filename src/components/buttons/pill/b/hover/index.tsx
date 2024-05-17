import { FC } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { useContextGrid } from "~/context";
import { useHoverKey } from "~/hooks/use-hover-key";
import { isDefined } from "~/utils/validation/is/defined";
import { TypographyBordered } from "~/components/typography/bordered";
import { isString } from "~/utils/validation/is/string";
import { LinesHorizontal } from "~/pages/video/_common/footer/nav/lines/horizontal";
import clsx from "clsx";
import { TypographyBorderedLg } from "~/components/typography/bordered/lg";

type TProps = TPillBProps & {
  subtitle?: string;
};
export const PillBHover: FC<TProps> = ({
  title,
  subtitle,
  children = title,
  ...props
}) => {
  const { motionHandlers, isHover } =
    useHoverKey();
  const { main } = useContextGrid();

  const isHovering =
    isDefined<typeof title>(title) &&
    isHover(title);
  return (
    <div>
      {isHovering &&
        main.ui.center &&
        createPortal(
          <>
            {isString(children) ? (
              <div className="relative">
                <motion.div className="absolute -inset-y-2 -inset-x-4 bg-white-01 dark:bg-black-06 backdrop-blur-sm rounded-lg" />
                <TypographyBorderedLg
                  classValue={clsx(
                    !subtitle &&
                      "text-center"
                  )}
                >
                  {children}
                </TypographyBorderedLg>
                {subtitle && (
                  <>
                    <LinesHorizontal />
                    <div className="h-2" />
                    <p className="relative text-4xl dark:text-gray-4 text-white-8 font-mono">
                      {subtitle}
                    </p>
                  </>
                )}
              </div>
            ) : (
              <>{children}</>
            )}
          </>,
          main.ui.center
        )}
      <PillB
        title={title}
        {...motionHandlers(title)}
        {...props}
      />
    </div>
  );
};
