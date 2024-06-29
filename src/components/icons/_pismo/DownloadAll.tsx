import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Root = styled(motion.svg)``;

export const DownloadAll = () => (
    <Root
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M9,1V7H5L12,14L19,7H15V1H9M5,16V18H19V16H5M5,20V22H19V20H5Z" />{" "}
    </Root>
  );
