import {
  FC,
  useEffect,
  useState,
} from "react";
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
import { TITLE_HOVER_KEY } from "~/pics/header/left";

export type TPillBHoverProps =
  TPillBProps & {
    subtitle?: string | JSX.Element;
  };
export const PillBHover: FC<
  TPillBHoverProps
> = ({
  title,
  subtitle,
  children = title,
  onClick,
  ...props
}) => {
  const { endTimeout, timeoutRef } =
    useTimeoutRef();
  const { pathname } = useLocation();
  const [isMoving, setMoving] =
    useState(false);
  const { set, isIdle } = useTrillPicsStore(
    ({ set,isIdle }) => ({ set,isIdle })
  );
  const { motionHandlers, isHover } =
  useHoverKey();

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
     
      <PillB
        title={title}
        onClick={handleClick}
        {...motionHandlers(title)}
        {...props}
      >
        {(!isHovering && isIdle) || isHover(TITLE_HOVER_KEY)
          ? title
          : null}
      </PillB>
      <LayoutOverlay
        isShown={isHovering && !isMoving}
        key={title}
        direction={props.direction}
        subtitle={subtitle}
      >
        {children}
      </LayoutOverlay>
    </>
  );
};
