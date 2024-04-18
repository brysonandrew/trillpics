import { FC } from "react";
import { ControlsShuffle } from "@/pages/home/header/left/controls/shuffle";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { HOME_ROUTE } from "@/constants/routes";
import { Title } from "@/pages/home/header/left/title";

export const HeaderLeft: FC = () => {
  const { pathname } = useLocation();
  const isHome =
    pathname === HOME_ROUTE;

  return (
    <div className="column-start gap-4 h-0">
      <div className="relative shrink-0">
        {isHome ? (
          <Title />
        ) : (
          <Link
            className="relative"
            to={HOME_ROUTE}
          >
            <Title />
          </Link>
        )}
      </div>
      <div className="relative shrink-0">
        <ControlsShuffle />
      </div>
    </div>
  );
};
