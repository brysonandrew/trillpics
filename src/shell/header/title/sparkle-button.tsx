import type { FC } from "react";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { HOME_ROUTE } from "@constants/routes";
import { useLocation } from "react-router";
import { useVideoStore } from "@/store";
import { Glow } from "@/components/decoration/glow";

export const SparkleButton: FC = () => {
  const { pathname } = useLocation();

  const isShuffle =
    pathname === HOME_ROUTE;
  const { darkKey } = useDarkMode();

  const { updatePicsEntries } =
    useVideoStore();
  const randomizePics = () => {
    updatePicsEntries();
  };

  return (
    <button
      className="relative uppercase text-xl tracking-wide h-8 w-7 sm:(h-10 w-10)"
      onClick={randomizePics}
    >
      <Glow classValue="-inset-4" />

      <img
        className="fill h-full"
        src={`/logo-${darkKey}.svg`}
        alt={`Logo ${darkKey}`}
      />
      {isShuffle && (
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
  );
};
