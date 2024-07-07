import type { FC } from "react";
import { clsx } from "clsx";
import { TIconsSvgProps } from "~/components/icons/svg";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";

type TProps = TIconsSvgProps;
export const IconsRingModAlien: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <IconsSvgGradient24
    className={clsx(classValue)}
    viewBox="0 0 512 512"
    d="M220.6 63.4c.3 0 .6-.1.8-.1 63.8-10.9 126.5 20.7 165.2 76.8l-13.5 9.8c-32.5-43-82.5-67.3-133.6-58.5-77.4 13.3-127.2 97-111.9 186.4C143 367.1 217.8 429 295.3 416c51.1-9 90.1-48.1 106.4-99.5l16 4.7C402.3 378.3 363.6 424 312 442l4 56-22.3-50c-2 0-4.1 0-6.1 1-91.9 15-182-57.6-200.31-164.3C70.18 185 121.9 92 203.8 67.4L191 14.3l21-.3zm141.5 256.7c-17.7 6.3-34 10.3-46.3 12.8-2 5-4.4 9.7-7 13.8-8 12.6-18.6 20.7-31.4 21.6-9.5.6-19-2.9-27.8-9.2L239 371.9c16.9 15.8 36.1 24.1 55.3 22.7 20.2-1.3 37.7-13.1 50.5-32.5 7.6-11.5 13.5-25.8 17.3-42zM74.41 300.3c-4.21 3-7.5 5.8-9.79 8.5-5.02 5.8-6.25 11.4-5.13 16.1.98 4.1 3.84 8 9.23 10.8 4.03 2.1 9.97 3.8 17.6 4.8-5.32-13.1-9.24-26.6-11.91-40.2zM166 312c3.5 8.7 7.4 16.5 11.3 23.4 26.4-3.9 56-9.6 87.1-17 73.4-17.6 135.4-40.1 164.5-58.2 8.6-5.3 14.6-10.4 17.8-14.9 3.5-5 4.3-9.7 3.3-13.8-1.1-4.7-4.8-9.2-11.9-12.1-9.8-4-28.7-5.5-53.9-4.1l.6 16.6c10.6-.1 19.3.5 25.4 1.9 1.5.3 3 1 4.2 1.5l-.3.3c-2.3 2.6-6 5.3-10.7 8.2-25.6 15.9-80.2 35.4-144.7 50.9-33.8 8.1-65.7 13.9-92.7 17.3zm126.1-48.4-6.5-26.1c-113.9-6.9-175 40.2-59.4 42.1zm30.5-12.2 40.7-14.1c-7.5-41.6-25.6-77.3-48.1-99.4-17.4-17-37.4-26.1-57.3-24.7-34.1 2.3-60.7 34.9-69.4 82.2l16.2 3.7c7.3-27.3 22.2-46.8 42.7-48.2 13-.9 25.9 5.8 37.3 17.3 18.2 18.3 32.4 48.4 37.9 83.2z" 
    {...props}
  />
);
