import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { FC, SVGAttributes } from "react";

const Root = styled.svg`
  animation: rotate 3.6s linear infinite;
  @keyframes outline {
    0% {
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dashoffset: 300;
    }
    100% {
      stroke-dashoffset: 600;
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(-1turn);
    }
  }
`;

const Circle = styled.circle`
  stroke-dasharray: 300;
  animation: outline 2s cubic-bezier(0.77, 0, 0.18, 1) infinite;
`;

type TProps = SVGAttributes<SVGElement> & {
  classValue?: ClassValue;
  classValueCircle?: ClassValue;
};
export const Loading: FC<TProps> = ({
  classValue,
  classValueCircle,
  ...props
}) => (
  <svg
    className={clsx("w-4 h-4", classValue)}
    width="24"
    height="24"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <Circle
      stroke="currentColor"
      className={clsx(classValueCircle)}
      cx="50"
      cy="50"
      r="46"
      strokeWidth="8"
    />
  </svg>
);
