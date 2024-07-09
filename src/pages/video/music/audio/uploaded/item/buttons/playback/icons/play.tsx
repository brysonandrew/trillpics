import { TSvgProps } from '@brysonandrew/config-types';
import type {FC} from 'react';

type TProps = TSvgProps;
export const PlaybackIconsPlay: FC<TProps> = (props) => {
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 21.5C16.5228 21.5 21 17.0228 21 11.5C21 5.97715 16.5228 1.5 11 1.5C5.47715 1.5 1 5.97715 1 11.5C1 17.0228 5.47715 21.5 11 21.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.46533C8.5 7.98805 8.5 7.74941 8.59974 7.61618C8.68666 7.50007 8.81971 7.42744 8.96438 7.4171C9.13038 7.40525 9.33112 7.53429 9.73261 7.79239L14.4532 10.8271C14.8016 11.051 14.9758 11.163 15.0359 11.3054C15.0885 11.4298 15.0885 11.5702 15.0359 11.6946C14.9758 11.837 14.8016 11.949 14.4532 12.1729L9.73261 15.2076C9.33112 15.4657 9.13038 15.5948 8.96438 15.5829C8.81971 15.5726 8.68666 15.4999 8.59974 15.3838C8.5 15.2506 8.5 15.012 8.5 14.5347V8.46533Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
