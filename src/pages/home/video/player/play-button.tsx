import type { FC } from "react";
import { TEXT_GRADIENT } from "@constants/css";

type TProps = {isFirst:boolean}
export const PlayButton: FC<TProps> = ({isFirst}) => {
  return (
    <div>
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-60 pointer-events-none"
        style={TEXT_GRADIENT}
      >
        <div className="row gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="160"
            className="w-[45px] md:w-[80px] lg:w-[100px]"
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient
                id="gradient-blue-pink-yellow"
                x1="0"
                x2="0"
                y1="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="var(--blue)"
                />
                <stop
                  offset="50%"
                  stopColor="var(--pink)"
                />
                <stop
                  offset="100%"
                  stopColor="var(--yellow)"
                />
              </linearGradient>
            </defs>
            <path
              stroke="url(#gradient-blue-pink-yellow)"
              fill="currentColor"
              d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2z"
            />
          </svg>
          <code className="text-2xl sm:text-5xl lg:text-6xl font-mono-pix whitespace-nowrap">
            play{isFirst ? "" : " again"}
          </code>
        </div>
      </div>
    </div>
  );
};
