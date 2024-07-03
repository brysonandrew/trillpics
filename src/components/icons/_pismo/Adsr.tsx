import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";

const Root = styled(motion.svg)``;

type TProps = {
  classValue?: ClassValue;
  isHover?: boolean;
};
export const IconsAdsr: FC<TProps> = ({
  classValue,
  isHover,
}) => (
  <Root
    width="28"
    height="28"
    viewBox="0 0 512 512"
    fill="currentColor"
    className={clsx(classValue, [
      isHover
        ? "fill-purple border-purple border-1"
        : "fill-current",
    ])}
  >
    <path d="M182.78 80.125c3.367 19.498 10.608 52.67 19.126 84.813 8.126 30.663 17.73 60.122 25.063 75.062 57.968-.962 148.212-16.707 252.343-46.344-91.756-70.023-188.486-99.376-296.532-113.53zM164.657 85c-65.62 51.243-106.43 120.106-138.5 196.25 54.866-38.51 111.644-60.42 169.313-70.906-3.995-12.636-7.88-26.486-11.626-40.625-8.425-31.79-15.554-64.12-19.188-84.72zm322.281 125.906c-74.123 21.218-141.43 35.68-196.25 42.813 24.018 51.794 36.448 106.688 43.688 160.936 70.634-58.76 125.36-118.495 152.563-203.75zM201.53 228.28c-56.563 9.917-111.78 30.946-165.56 68.907 89.478 61.396 189.91 97.037 279.874 119.844-7.362-55.057-20.104-109.997-44.75-161.03-18.39 1.897-35.134 2.875-49.938 2.875h-5.344l-2.718-4.625c-3.898-6.69-7.77-15.598-11.563-25.97z" />
  </Root>
);
