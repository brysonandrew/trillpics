import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";


 
type TProps = {
  classValue?: ClassValue;
};
export const BarsLoader: FC<TProps> = ({ classValue }) => (
  <svg
    className={clsx(classValue)}
    width="135"
    height="60"
    viewBox="0 0 100 60"
    fill="currentColor"
  >
    <rect x="0" y="0" width="10" height="60" rx="6">
      <animate
        attributeType="CSS"
        attributeName="height"
        values="60;20;60;"
        begin="0s"
        dur="1s"
        repeatCount="indefinite"
      />
      <animate
        attributeType="CSS"
        attributeName="y"
        begin="0s"
        values="0;20;0;"
        dur="1s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="20" y="0" width="10" height="60" rx="6">
      <animate
        attributeType="CSS"
        attributeName="height"
        values="60;20;60"
        begin="0.2s"
        dur="1s"
        repeatCount="indefinite"
      />
      <animate
        attributeType="CSS"
        attributeName="y"
        values="0;20;0"
        begin="0.2s"
        dur="1s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="40" y="0" width="10" height="60" rx="6">
      <animate
        attributeType="CSS"
        attributeName="height"
        values="60;20;60"
        begin="0.4s"
        dur="1s"
        repeatCount="indefinite"
      />
      <animate
        attributeType="CSS"
        attributeName="y"
        values="0;20;0"
        begin="0.4s"
        dur="1s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="60" y="0" width="10" height="60" rx="6">
      <animate
        attributeType="CSS"
        attributeName="height"
        values="60;20;60"
        begin="0.6s"
        dur="1s"
        repeatCount="indefinite"
      />
      <animate
        attributeType="CSS"
        attributeName="y"
        values="0;20;0"
        begin="0.6s"
        dur="1s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="80" y="0" width="10" height="60" rx="6">
      <animate
        attributeType="CSS"
        attributeName="height"
        values="60;20;60"
        begin="0.8s"
        dur="1s"
        repeatCount="indefinite"
      />
      <animate
        attributeType="CSS"
        attributeName="y"
        values="0;20;0"
        begin="0.8s"
        dur="1s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);
