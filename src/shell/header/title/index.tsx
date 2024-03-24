import type { FC } from "react";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { HOME_ROUTE } from "@constants/routes";
import { useBase } from "@shell/providers/context/base";
import { useLocation } from "react-router";
import { useScroll } from "@shell/providers/context/scroll";
import { TitleApp } from "@shell/header/title/app";

export const Title: FC = () => {
  const { isScroll } = useScroll();
  const { onRandomize } = useBase();
  const { pathname } = useLocation();
  const isShufffle =
    pathname === HOME_ROUTE;
  const { darkKey } = useDarkMode();
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="row-start gap-1 lg:gap-4">
      {isScroll ? (
        <button onClick={handleClick}>
          <TitleApp />
        </button>
      ) : (
        <TitleApp />
      )}
      <button
        className="relative mt-4 ml-4 uppercase text-xl tracking-wide h-6 w-6 sm:(h-10 w-10 mt-5)"
        onClick={onRandomize}
      >
        <img
          className="fill h-full"
          src={`/logo-${darkKey}.svg`}
          alt={`Logo ${darkKey}`}
        />
        {isShufffle && (
          <img
            className="fill h-full origin-center opacity-80 hover:opacity-100"
            src={`/logo-${darkKey}.svg`}
            alt={`Logo ${darkKey}`}
            style={{
              filter: "blur(2px)",
              transform: "scale(1.2)",
            }}
          />
        )}
      </button>
    </div>
  );
};
