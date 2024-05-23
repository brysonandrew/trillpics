import { DELIMITER_VIDEO_PICS } from "~/hooks/pic/constants";

export const resolveVideoPicAddedRx = (
  currName: string | number
) => {
  const rx = new RegExp(
    `\\${DELIMITER_VIDEO_PICS}${currName}|${currName}`,
    "g"
  );
  return rx;
};
