import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Root = styled(motion.svg)``;

export const Pause = () => (
    <Root viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
    </Root>
  );
