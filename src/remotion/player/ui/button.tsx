import type { FC } from "react";
import {
  TChildren,
  TClassValueProps,
} from "@brysonandrew/config-types";

type TProps = {
  children: TChildren;
  Icon: FC<
    TClassValueProps
  >;
  // playing: boolean;
  // isBuffering: boolean;
};
export const Button: FC<TProps> = ({
  Icon,
  children
}) => {
  return (
    <div>
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 _gradient-text z-60 pointer-events-none"
      >
        <div className="row gap-4">
          {/*           
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="160"
            className="w-[45px] md:w-[80px] lg:w-[100px]"
            viewBox="0 0 24 24"
          >
            <path
              stroke={resolveUrlId(
                LINEAR_GRADIENT_SVG_ID
              )}
              fill="currentColor"
              d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2z"
            />
          </svg> */}
          <Icon classValue="w-[45px] md:w-[80px] lg:w-[100px]" />
          <code className="text-2xl sm:text-5xl lg:text-6xl font-mono-pix whitespace-nowrap">
            {children}
            {/* {isFirst ? "" : " again"} */}
          </code>
        </div>
      </div>
    </div>
  );
};
