const collectionResolverRecord =
  import.meta.glob(
    `./collection/*500w.png`,
  );
import {
  COLLECTION,
  MAX_SUFFIX,
} from '@ops/config';

const ENTRIES = Object.entries(
  collectionResolverRecord,
);

export const resolveName = (
  path: string,
) =>
  path.replace(
    new RegExp(
      `(.*${COLLECTION}\/|${MAX_SUFFIX}.png)`,
      'gi',
    ),
    '',
  );

export const ITEMS = ENTRIES.map(
  ([path, resolver]) => ({
    name: resolveName(path),
    path,
    resolver,
  }),
);
