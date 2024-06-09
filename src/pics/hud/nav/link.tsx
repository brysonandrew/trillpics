import type { FC } from "react";
import clsx from "clsx";
import {
  NavLink as L,
  useSearchParams,
} from "react-router-dom";
import { useHoverKey } from "~/hooks/use-hover-key";
import {
  TClassValueProps,
  TLinkProps,
} from "@brysonandrew/config-types";
type TProps = TLinkProps &
  TClassValueProps;
export const FooterNavLink: FC<
  TProps
> = ({
  title,
  to,
  classValue,
  children,
  ...props
}) => {
  const [searchParams] =
    useSearchParams();
  to = `${to}?${searchParams}`;

  const { handlers } = useHoverKey();
  return (
    <L
      className={clsx(
        "relative",
        classValue
      )}
      to={to}
      {...handlers(title)}
      {...props}
    >
      {children}
    </L>
  );
};
