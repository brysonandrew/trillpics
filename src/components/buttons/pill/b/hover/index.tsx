import { FC } from "react";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { useHoverKey } from "~/hooks/use-hover-key";
import { isDefined } from "~/utils/validation/is/defined";
import { useTrillPicsStore } from "~/store/middleware";
import { PillBHoverOverlay } from "~/components/buttons/pill/b/hover/overlay";

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
  const { set } = useTrillPicsStore(
    ({ set }) => ({ set })
  );
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
      {isHovering && (
        <PillBHoverOverlay
          subtitle={subtitle}
        >
          {children}
        </PillBHoverOverlay>
      )}
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
