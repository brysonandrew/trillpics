import {
  FC,
  useEffect,
  useState,
} from "react";
import { AnimatePresence } from "framer-motion";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { useHoverKey } from "~/hooks/use-hover-key";
import { isDefined } from "~/utils/validation/is/defined";
import { useTrillPicsStore } from "~/store/middleware";
import { LayoutOverlay } from "~/components/layout/overlay";
import { useLocation } from "react-router";
import { useTimeoutRef } from "@brysonandrew/hooks-window";

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
  onClick,
  ...props
}) => {
  const { endTimeout, timeoutRef } =
    useTimeoutRef();
  const { pathname } = useLocation();
  const [isMoving, setMoving] =
    useState(false);
  const { set } = useTrillPicsStore(
    ({ set }) => ({ set })
  );

  useEffect(() => {
    endTimeout();
    if (!isMoving) {
      setMoving(true);
    }
    timeoutRef.current = setTimeout(
      () => {
        setMoving(false);
      },
      500
    );
  }, [pathname]);
    const { motionHandlers, isHover } =
    useHoverKey();
  const isHovering =
    isDefined<typeof title>(title) &&
    isHover(title);

  const handleClick: React.MouseEventHandler<
    HTMLButtonElement
  > = (event) => {
    if (onClick) {
      onClick(event);
      set({ hoverKeys: [] });
    }
  };
  return (
    <>
      <LayoutOverlay
        isShown={isHovering && !isMoving}
        key={title}
        direction={props.direction}
        subtitle={subtitle}
      >
        {children}
      </LayoutOverlay>
      <PillB
        title={title}
        onClick={handleClick}
        {...motionHandlers(title)}
        {...props}
      >
        {!isHovering && isLabel
          ? title
          : null}
      </PillB>
    </>
  );
};
