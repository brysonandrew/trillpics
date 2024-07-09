export const SIZE_PARAM_KEY = "size";
export const AUDIO_SRC_PARAM_KEY = "audio-src";
export const AUDIO_START_PARAM_KEY = "audio-start";

export const COLUMNS_COUNT_PARAM_KEY =
  "cols";
export const ROWS_COUNT_PARAM_KEY =
  "rows";

export const OVER_CELL_PARAM_KEY = "xy";

export const SECONDS_PARAM_KEY =
  "seconds";

export const AUDIO_SRC_KEY = "src";

export const SELECTED_PARAM_KEY = "pic";

export const REMOVING_PARAM_KEY =
  "removing";

export const DELIMITER_CELL_KEY = "-";

export const DELIMITER_VIDEO_PICS = ",";

export const ZOOM_PARAM_KEY = "z";

export const QUERY_PARAM_KEYS = {
  [SIZE_PARAM_KEY]: SIZE_PARAM_KEY,
  [AUDIO_SRC_PARAM_KEY]: AUDIO_SRC_PARAM_KEY,
  [AUDIO_START_PARAM_KEY]: AUDIO_START_PARAM_KEY,

  [COLUMNS_COUNT_PARAM_KEY]:
    COLUMNS_COUNT_PARAM_KEY,
  [ROWS_COUNT_PARAM_KEY]:
    ROWS_COUNT_PARAM_KEY,
  [OVER_CELL_PARAM_KEY]:
    OVER_CELL_PARAM_KEY,
  [SECONDS_PARAM_KEY]:
    SECONDS_PARAM_KEY,
  [AUDIO_SRC_KEY]: AUDIO_SRC_KEY,
  [SELECTED_PARAM_KEY]:
    SELECTED_PARAM_KEY,
  [REMOVING_PARAM_KEY]:
    REMOVING_PARAM_KEY,
  [ZOOM_PARAM_KEY]: ZOOM_PARAM_KEY,
} as const;
