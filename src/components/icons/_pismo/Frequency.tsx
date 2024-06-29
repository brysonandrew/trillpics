import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Root = styled(motion.svg)``;

export const Frequency = () => (
  <Root
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </Root>
);
