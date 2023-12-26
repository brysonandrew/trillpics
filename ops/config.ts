export const PUBLIC_DIR = 'assets';
export const COLLECTION = 'collection';
export const COLLECTION_PATH = 'src/pages/index/main/collection/config/collection';
export const DIRS_GLOB = `${COLLECTION_PATH}/**` as const;

export const MAIN_SERVICE_WORKER =
  'src/main/service-worker';
export const COLLECTION_CONTEXT =
  'src/pages/index/main/collection';
  export const CATEGORY_CONTEXT =
  'src/pages/index/main/collection/category';
export const EXTS = [
  'png',
  'jpg',
  'jpeg',
] as const;
const PROCESS_EXTS = [
  'webp',
  'md',
] as const;
export const FILES_GLOB = `${COLLECTION_PATH}/*`;
export const MAX_W = 500;
export const MAX_SUFFIX = `-${MAX_W}w` as const;
export const LOOKUP_PATH = `${COLLECTION_CONTEXT}/lookup.json`;
export const LOOKUP_PATH_2 = `${COLLECTION_CONTEXT}/lookup${MAX_SUFFIX}.json`;

export const PRECACHE_PATH = `${MAIN_SERVICE_WORKER}/precache.json`;

export const IMAGES_GLOB = `${FILES_GLOB}.(${EXTS.join(
  '|',
)})`;

export const ALL_GLOB = `${FILES_GLOB}.(${[
  ...EXTS,
  ...PROCESS_EXTS,
].join('|')})`;

const EXTLESS = `${FILES_GLOB}[!.png]`;

export const ALL_EXCLUDE_ORIGINAL_GLOBS =
  [
    LOOKUP_PATH,
    EXTLESS,
    `${FILES_GLOB}${MAX_SUFFIX}.png`,
    `${FILES_GLOB}.(${[
      ...PROCESS_EXTS,
    ].join('|')})`,
  ];
