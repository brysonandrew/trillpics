import packageJson from '../../../package.json';

type TKeyFragment =
  | string
  | number
  | undefined
  | null;
type TKeyFragments = TKeyFragment[];

export const COMPOSITE_KEY_DELIMITER =
  ':';

const isKeyable = (v: TKeyFragment) =>
  typeof v === 'number' || Boolean(v);

export const resolveCompositeKey = (
  ...args: TKeyFragments
) =>
  args
    .filter(isKeyable)
    .join(COMPOSITE_KEY_DELIMITER);

export const resolveLocalStorageKey = (
  ...args: TKeyFragments
) =>
  [
    packageJson.name,
    ...args,
    'local-storage',
  ]
    .filter(isKeyable)
    .join(COMPOSITE_KEY_DELIMITER);

export const TITLE_KEY_DELIMITER =
  ' | ';
export const resolveCompositeTitle = (
  ...args: TKeyFragments
) =>
  args
    .filter(isKeyable)
    .join(TITLE_KEY_DELIMITER);
