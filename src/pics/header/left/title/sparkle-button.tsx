import type { FC } from "react";
import { useDarkMode } from "@brysonandrew/dark-mode";

export const SparkleButton: FC = () => {
  const { darkKey } = useDarkMode();

  return (
    <div className="relative uppercase h-8 w-7 sm:(h-10 w-10)">
      <img
        className="fill h-full"
        src={`/logo-${darkKey}.svg`}
        alt={`Logo ${darkKey}`}
      />
      {/* <img
        className="fill h-full ml-0.1 mt-0.2 origin-center"
        src={`/logo-${darkKey}.svg`}
        alt={`Logo ${darkKey}`}
        style={{
          filter: "blur(2px)",
          transform: "scale(1.2)",
        }}
      />
          <img
        className="fill mr-0.6 mt-0.3 h-full origin-center"
        src={`/logo-${darkKey}.svg`}
        alt={`Logo ${darkKey}`}
        style={{
          filter: "blur(20px)",
          transform: "scale(1.2)",
        }}
      />
          <img
        className="fill ml-0.5 mb-0.1 h-full origin-center"
        src={`/logo-${darkKey}.svg`}
        alt={`Logo ${darkKey}`}
        style={{
          filter: "blur(14px)",
          transform: "scale(1.2)",
        }}
      /> */}
    </div>
  );
};
