import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue} from "clsx";
import { clsx } from "clsx";



type TProps = {
  classValue?: ClassValue;
};
export const BirdMask: FC<TProps> = ({ classValue }) => (
  <svg
    className={clsx(classValue)}
    width="28px"
    height="28px"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path d="M252.03 23.063c-99.206 0-179.624 58.963-179.624 131.687 0 56.668 48.844 104.963 117.344 123.53 11.835 62.23 64.47 215.376 64.47 215.376s53.39-155.335 64.718-216.687c66.074-19.45 112.718-66.83 112.718-122.22 0-72.724-80.418-131.688-179.625-131.688zM163 85.436c39.656 0 71.625 31.97 71.625 71.626 0 39.655-31.97 71.625-71.625 71.625-39.656 0-71.625-31.97-71.625-71.625 0-39.656 31.97-71.625 71.625-71.625zm179.625 0c39.656 0 71.625 31.97 71.625 71.626 0 39.655-31.97 71.625-71.625 71.625-39.656 0-71.625-31.97-71.625-71.625 0-39.656 31.97-71.625 71.625-71.625zM166.97 107.626c-16.7 0-31.318 8.487-39.814 21.406 7.02-3.855 15.08-6.06 23.656-6.06 8.815 0 17.094 2.316 24.25 6.374-9.975.464-17.937 8.69-17.937 18.78 0 10.39 8.425 18.814 18.813 18.814 9.81 0 17.855-7.507 18.718-17.094 3.425 6.707 5.375 14.295 5.375 22.344 0 7.735-1.82 15.05-5 21.562 11.856-8.632 19.532-22.62 19.532-38.5 0-26.407-21.19-47.625-47.593-47.625zm180 0c-16.463 0-30.924 8.233-39.47 20.844 6.774-3.514 14.437-5.5 22.594-5.5 8.804 0 17.068 2.324 24.22 6.374-10.114.314-18.22 8.592-18.22 18.78 0 10.39 8.424 18.814 18.812 18.814 10 0 18.154-7.806 18.75-17.657 3.605 6.844 5.656 14.636 5.656 22.907 0 8.033-1.93 15.615-5.343 22.313 12.455-8.558 20.592-22.9 20.592-39.25 0-26.407-21.19-47.625-47.593-47.625zM220.374 228.03c6.606-.04 13.12 7.952 15.375 19.595 2.577 13.314 1.656 83.5 1.656 83.5s-26.173-60.157-28.75-73.47c-2.577-13.31 1.396-26.32 8.875-29.092.936-.347 1.9-.526 2.845-.532zm66.844 1.376c.942.006 1.908.185 2.842.53 7.48 2.775 11.453 15.813 8.875 29.126-2.577 13.314-28.75 73.438-28.75 73.438s-.92-70.184 1.657-83.5c2.255-11.643 8.77-19.634 15.375-19.594z" />
  </svg>
);
