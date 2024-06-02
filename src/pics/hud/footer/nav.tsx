import { FC } from "react";
import { TDimensions } from "@brysonandrew/config-types";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import { NAV_ITEMS } from "~/pics/hud/footer/constants";
import {
  NavLink,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { PillBLayout } from "~/components/buttons/pill/b/layout";
import clsx from "clsx";

type TProps = {
  container: TDimensions;
};
export const PicsHudFooterNav: FC<
  TProps
> = ({ container }) => {
  const { pathname } = useLocation();
  const [searchParams] =
    useSearchParams();
  const s = boxSize();
  const borderRadius = boxRadius();
  return (
    <nav
      className="relative py-0"
      style={{
        width: (container.width) + s.m + s.m05,
        borderRadius,
        padding: s.m025,
      }}
    >
      <ul className="row-space w-full">
        {NAV_ITEMS.map(([Icon, to]) => {
          const isSelected =
            to === pathname;
          return (
            <li key={to}>
              <NavLink
               className={clsx("relative", isSelected && 'bg-red')}
                to={`${to}?${searchParams}`}
              >
                <PillBLayout
                  isSelected={
                    isSelected
                  }
                  Icon={Icon}
                />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
