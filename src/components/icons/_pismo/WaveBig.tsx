import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC, SVGAttributes } from "react";

const Root = styled(motion.svg)``;

type TProps = SVGAttributes<SVGElement> & {
  classValue?: ClassValue;
};
export const WaveBig: FC<TProps> = ({ classValue }) => (
  <Root
    className={clsx(classValue)}
    viewBox="0 0 512 512"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M298.844 21.47c-19.177.074-37.7 9.793-43.156 29.06-21.613-18.783-57.038-5.957-57.97 13.907-.397.11-.79.234-1.187.344-12.147-4.116-20.077-.304-24.186 7.44-18.52-14.45-44.42-1.614-51.188 19.218-14.786-17.19-42.58 4.042-30.406 25.124.188.327.397.63.594.938-4.788 3.64-9.477 7.395-14.063 11.28-7.26-3.534-15.395-5.344-23.56-5.155-13.145.303-26.367 5.78-36.19 17.625v118.063c6.726 4.154 16.51 6.48 24.94 5.375-7.202 19.076-12.8 38.67-16.75 58.437-.277.918-.546 1.85-.782 2.813-.782 3.182-1.24 6.21-1.407 9.093-9.176 55.403-5.31 111.628 13.095 161.126H56.72c-15.91-39.335-21.726-84.3-18.095-129.875 20.554 13.602 55.617 7.05 63.563-25.31 7.245-29.515-15.273-47.982-38.126-47.876-4.062.02-8.143.638-12.062 1.875 5.06-17.025 11.418-33.773 19.063-49.94 5.86-12.39 12.446-24.437 19.75-36.03 13.37 8.93 38.33 6.824 41.25-21 1.343 4.814 9.112 7.514 15.656 7.438-10.532 23.45-18.023 48.2-22.564 73.343-8.506 47.1-6.837 95.784 4.625 140.564-22.214 3.28-24.636 38.295 1.22 38.844 4.18.087 7.748-.735 10.72-2.188 7.164 17.84 16.073 34.685 26.686 50.156h23.156c-45.083-57.982-62.535-143.55-48-224.03.185-1.024.4-2.042.594-3.063 12.583 16.662 30.995 16.28 44.313 7.156.098 7.433.444 14.858 1.06 22.25 6.366 76.193 39.422 149.527 91.626 197.686h29.156c-57.272-43.11-95.5-119.53-102.156-199.22-5.615-67.22 10.893-136.265 56.125-190.155-22.662 48.81-28.814 101.335-22.405 152.032-10.69 7.01-16.59 20.936-7.063 35.813 4.65 7.262 10.705 10.994 16.938 12.125 2.012 7.007 4.255 13.938 6.72 20.78 25.606 71.122 74.834 133.122 135.936 168.626h43.28c-69.03-26.022-128.378-90.037-158.405-166.47 12.857.64 25.67-14.788 16.658-29.686-3.872-6.39-9.452-9.026-14.97-9 3.396-7.17 3.52-15.913-2-24.53-4.954-7.738-11.826-11.5-18.874-12.25-5.378-44.973-.098-91.102 18.812-134.345l.906 1.75C273.37 181.75 290.925 240.357 322.625 289c10 15.346 21.402 29.735 33.906 42.938-1.243-.215-2.44-.324-3.592-.313-19.654.194-25.004 31.01-1.75 36.72 15.508 3.807 23.524-8.896 21.687-20.408 34.925 31.702 76.562 54.554 119.906 64.094v-19.217c-59.818-14.523-117.576-57.376-154.5-114.032-24.12-37.01-39.39-79.608-41.092-124 4.408-66.014 98.113-44.375 115.656-5.155-6.523-34.758-23.54-58.183-46.094-73.188 15.407-13.958-4.283-37.503-20.813-26.156-8.08-19.323-27.917-28.886-47.093-28.81zm-138.625 2c-2.13.103-4.395.752-6.72 2.03-16.766 9.213-4.997 35.847 12.75 26.094 15.18-8.345 7.774-27.85-5.125-28.125-.3-.008-.602-.016-.906 0zm264.155 22.874c-19.126-.404-22.245 28.57-2 29 20.526.43 21.4-28.59 2-29zM53.5 75.687C43.338 76.05 33.672 88.067 40.562 100c10.167 17.61 36.35 2.13 25.594-16.5-3.315-5.743-8.037-7.977-12.656-7.813zm69.906 42.282c.402.812.812 1.623 1.28 2.436 2.326 4.027 5.03 7.26 7.97 9.813-10.67 9.647-20.636 19.996-29.875 30.936-1.62-8.085-5.26-15.083-10.25-20.78 6.11-5.04 12.437-9.807 18.907-14.376 4.71-1.154 9.05-4.033 11.97-8.03zM181 123.062c2.093 2.72 4.457 5.205 7.063 7.374-4.182 5.037-8.18 10.204-11.97 15.5-2.8-4.34-6.46-8.03-10.593-10.812 6.088-2.494 11.522-6.697 15.5-12.063zm240 51.593c-25.802.693-29.64 40.193-1.594 40.78 28.89.61 30.117-40.2 2.813-40.78-.422-.01-.81-.01-1.22 0zm-244.188 4.625c3.198 9.806 12.542 14.786 22.125 13.69-2.288 8.29-4.19 16.68-5.718 25.124-6.353-6.258-13.926-9.102-21.5-9.25-3.403-.067-6.787.43-10.064 1.375 4.41-10.618 9.46-20.953 15.156-30.94zm280.47 42.22c-18.49-.39-21.542 27.59-1.97 28 19.844.417 20.725-27.608 1.97-28z" />
  </Root>
);
