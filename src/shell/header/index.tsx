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
import { useVideoStore } from "@pages/index/video/store";
import { Title } from "./title";

type TProps = PropsWithChildren;
export const Header: FC<
  TProps
> = () => {
  const { isVideoMode } =
    useVideoStore();
  const { pathname } = useLocation();
  const isHome =
    pathname === HOME_ROUTE;
  const { isDarkMode } = useDarkMode();

  return (
    <header
      className={clsx(
        "sticky left-0 top-0 right-0 column w-full font-display z-60"
      )}
      style={isVideoMode ? {} : {
        mixBlendMode: isDarkMode
          ? "exclusion"
          : "multiply",
      }}
    >
      <div
        className={clsx(
          "w-container column-end md:row-space"
        )}
      >
        <div
          // className={clsx(
          //   isVideoMode && "opacity-40"
          // )}
        >
          {isHome ? (
            <div className="row gap-4">
              <Title />
            </div>
          ) : (
            <Link
              className="row gap-4"
              to={HOME_ROUTE}
            >
              <Title />
            </Link>
          )}
        </div>
        <HeaderRight />
      </div>
    </header>
  );
};
