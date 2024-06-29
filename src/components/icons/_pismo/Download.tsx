import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Root = styled(motion.svg)``;

export const Download = () => (
    <Root viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
    </Root>
  );
