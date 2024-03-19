export const PUBLIC_DIR = "public";
export const ORIGINALS_DIR =
  "originals";
export const PICS_DIR = "pics";
export const AUDIO_DIR = "audio";

export const MAIN_SERVICE_WORKER =
  "src/main/service-worker";
export const COLLECTION_BASE =
  "src/components/collection";
export const COLLECTION_ASSETS_DIR = `${COLLECTION_BASE}/assets`;

export const EXTS = [
  "png",
  "jpg",
  "jpeg",
] as const;
const PROCESS_EXTS = [
  "webp",
  "md",
] as const;
export const FILES_GLOB = `${COLLECTION_ASSETS_DIR}/*`;
export const MAX_W = 500;
export const MAX_SUFFIX =
  `-${MAX_W}w` as const;
export const LOOKUP_PATH = `${COLLECTION_BASE}/lookup.json`;
export const LOOKUP_PATH_2 = `${COLLECTION_BASE}/lookup${MAX_SUFFIX}.json`;

export const PRECACHE_PATH = `${MAIN_SERVICE_WORKER}/precache.json`;

export const IMAGES_GLOB = `${FILES_GLOB}.(${EXTS.join(
  "|"
)})`;

export const ALL_GLOB = `${FILES_GLOB}.(${[
  ...EXTS,
  ...PROCESS_EXTS,
].join("|")})`;

const EXTLESS = `${FILES_GLOB}[!.png]`;

export const ALL_EXCLUDE_ORIGINAL_GLOBS =
  [
    LOOKUP_PATH,
    EXTLESS,
    `${FILES_GLOB}${MAX_SUFFIX}.png`,
    `${FILES_GLOB}.(${[
      ...PROCESS_EXTS,
    ].join("|")})`,
  ];

const REPLACE_RX =
  /public\/originals\/\d+.png/; //new RegExp("")
const resolveNextName = (
  prevName: string
) => {
  return prevName.replace(
    REPLACE_RX,
    (v) => v
  );
};
