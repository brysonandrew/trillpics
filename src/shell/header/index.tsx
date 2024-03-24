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
import { useVideoStore } from "@pages/home/video/store";
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
      style={
        isVideoMode
          ? {}
          : {
              mixBlendMode: isDarkMode
                ? "exclusion"
                : "multiply",
            }
      }
    >
      <div
        className={clsx(
          "w-container row-start-space py-4"
        )}
      >
        <div className="w-35 shrink-0 sm:w-45 md:w-auto">
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
