const collectionResolverRecord =
  import.meta.glob(
    `../assets/**/*.png`,
  );
import { MAX_SUFFIX } from '@ops/config';
import { TInit } from '@t/image';

const ENTRIES = Object.entries(
  collectionResolverRecord,
);

export const resolveName = (
  path: string,
) =>
  path.replace(
    new RegExp(
      `(.*assets\/|${MAX_SUFFIX}.png|.png)`,
      'gi',
    ),
    '',
  );

export const INITS: TInit[] = ENTRIES.map(
  ([path, resolver]) => ({
    name: resolveName(path),
    path,
    resolver,
  }),
);
