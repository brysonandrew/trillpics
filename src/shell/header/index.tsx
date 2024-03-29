import {
  FC,
  PropsWithChildren,
} from "react";
import clsx from "clsx";
import { useDarkMode } from "@brysonandrew/dark-mode";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { HOME_ROUTE } from "@constants/routes";
import { HeaderRight } from "@shell/header/right";
import { useVideoStore } from "src/store";
import { Title } from "./title";

type TProps = PropsWithChildren;
export const Header: FC<
  TProps
> = () => {
  const { pathname } = useLocation();
  const isHome =
    pathname === HOME_ROUTE;

  return (
    <header
      className={clsx(
        "fixed left-0 top-0 right-0 column w-full h-0 font-display z-50"
      )}
   
    >
      <div
        className={clsx(
          "relative top-4 h-0 w-container mx-auto row-start-space"
        )}
      >
        <div className="w-35 shrink-0 sm:w-45 md:w-auto bg-main border-main-inverted border-4 px-4">
          {isHome ? (
            <Title />
          ) : (
            <Link to={HOME_ROUTE}>
              <Title />
            </Link>
          )}
        </div>
        <HeaderRight />
      </div>
    </header>
  );
};
