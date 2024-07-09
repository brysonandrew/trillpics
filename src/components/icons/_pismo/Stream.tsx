import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";



type TProps = {
  classValue?: ClassValue;
};

export const Stream: FC<TProps> = ({ classValue }) => (
  <svg
    className={clsx(classValue)}
    viewBox="0 0 512 512"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M60.307 17.998A201.117 201.117 0 0 0 55.002 64c0 78.375 45.002 146.35 110.539 179.486-8.783-10.556-16.478-22.658-23.1-35.912-42.318-33.5-69.443-85.327-69.443-143.574 0-15.895 2.035-31.305 5.832-46.002H60.307zm66.644 0c-5.142 14.384-7.949 29.87-7.949 46.002 0 51.245 28.27 95.989 70.031 119.482-6.264-10.227-11.17-21.604-15.023-33.158C151.2 128.657 136.998 98.02 136.998 64c0-16.319 3.275-31.856 9.193-46.002h-19.24zm72.445 0C189.156 30.565 183.002 46.585 183.002 64c0 26.543 14.293 49.845 35.572 62.623-3.806-9.484-6.58-20.417-8.332-32.014-5.84-8.738-9.244-19.259-9.244-30.609 0-11.35 3.403-21.87 9.244-30.61a168.14 168.14 0 0 1 3.053-15.392h-13.899zm99.31 0a168.14 168.14 0 0 1 3.052 15.393c5.84 8.738 9.244 19.259 9.244 30.609 0 11.35-3.403 21.87-9.244 30.61-1.751 11.596-4.526 22.529-8.332 32.013 21.279-12.778 35.572-36.08 35.572-62.623 0-17.415-6.153-33.435-16.394-46.002h-13.899zm67.103 0c5.918 14.146 9.193 29.683 9.193 46.002 0 34.02-14.202 64.657-37.012 86.324-3.852 11.554-8.76 22.93-15.023 33.158C364.728 159.99 392.998 115.245 392.998 64c0-16.132-2.807-31.618-7.95-46.002h-19.24zm67.36 0A183.653 183.653 0 0 1 439.003 64c0 58.247-27.125 110.074-69.443 143.574-6.622 13.254-14.317 25.356-23.1 35.912C411.996 210.35 456.998 142.375 456.998 64c0-15.825-1.837-31.226-5.305-46.002H433.17zM256 40.998c-12.81 0-23.002 10.192-23.002 23.002 0 12.81 10.192 23.002 23.002 23.002 12.81 0 23.002-10.192 23.002-23.002 0-12.81-10.192-23.002-23.002-23.002zm-20.35 58.537L119.398 477.354l17.204 5.292 13.15-42.74L256 415.39l106.248 24.517 13.15 42.74 17.204-5.292L276.35 99.535a40.612 40.612 0 0 1-17.192 5.328l49.654 161.381L256 283.848l-52.813-17.604 49.655-161.38a40.612 40.612 0 0 1-17.192-5.329zM197.893 283.45l29.65 9.885-36.428 12.143 6.778-22.028zm116.214 0l6.778 22.028-36.428-12.143 29.65-9.885zM256 302.82l52.652 17.55L256 339.516l-52.65-19.147L256 302.82zm-73.074 29.275l46.74 16.998-58.518 21.28 11.778-38.278zm146.148 0l11.778 38.277-58.52-21.28 46.742-16.997zM256 358.666l64.354 23.402L256 396.92l-64.355-14.852L256 358.666zm-92.16 35.455l52.144 12.033-60.115 13.873 7.97-25.906zm184.318 0l7.973 25.904-60.113-13.87 52.14-12.034z" />
  </svg>
);
