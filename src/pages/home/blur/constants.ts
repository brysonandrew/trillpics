import { resolveUrlId } from "@brysonandrew/utils-attributes";

export const MOTION_BLUR_FILTER_X_ID =
  "MOTION_BLUR_FILTER_X_ID";
export const MOTION_BLUR_FILTER_Y_ID =
  "MOTION_BLUR_FILTER_Y_ID";

export const resolveFilterAttr = (
  id: string
) => ({
  filter: resolveUrlId(id),
});

export const MOTION_BLUR_FILTER_X_PROPS =
  resolveFilterAttr(
    MOTION_BLUR_FILTER_X_ID
  );
  export const MOTION_BLUR_FILTER_Y_PROPS =
  resolveFilterAttr(
    MOTION_BLUR_FILTER_Y_ID
  );
