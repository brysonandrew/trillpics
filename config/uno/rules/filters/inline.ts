import { resolveUrlId } from "@brysonandrew/utils-attributes";

export const INLINE_FILTER_ID =
  "INLINE_FILTER_ID";

export const INLINE_FILTER_SVG_PROPS =
  {
    filter: resolveUrlId(
      INLINE_FILTER_ID
    ),
  } as const;
export const INLINE_DARK_FILTER_ID =
  "INLINE_DARK_FILTER_ID";
  
export const INLINE_FILTER_SVG_DARK_PROPS =
  {
    filter: resolveUrlId(
      INLINE_DARK_FILTER_ID
    ),
  } as const;
