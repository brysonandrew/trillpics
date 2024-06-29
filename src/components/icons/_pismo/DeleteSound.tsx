import type { FC } from "react";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";

const Root = styled.svg``;

type TProps = {
  classValue?: ClassValue;
};
export const DeleteSound: FC<TProps> = ({ classValue }) => (
  <Root
    width="24"
    height="24"
    className={clsx(classValue)}
    viewBox="0 0 24 24"
    fill="currentColor"
    color="red"
  >
    <path d="M14 12V14H22V12H14M9 3V13.55C8.41 13.21 7.73 13 7 13C4.79 13 3 14.79 3 17S4.79 21 7 21 11 19.21 11 17V7H15V3H9Z" />
  </Root>
);
