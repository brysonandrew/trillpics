import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Root = styled(motion.svg)``;

export const Quotes = () => (
  <Root
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
  </Root>
);
