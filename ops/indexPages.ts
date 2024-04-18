import glob from 'fast-glob';
import { TError } from '@brysonandrew/config-types';
import { parse, resolve } from 'path';
export const capitalize = (word: string | null) =>
  word
    ? `${word[0].toUpperCase()}${word
        .toLowerCase()
        .slice(1)}`
    : '';
export const kebabToPascal = <I extends string>(value: I) =>
  value.split('-').map(capitalize).join('');
import { writeFile } from  "fs/promises";
import { resolvePwd } from '~ops/pwd';

const WORKSHOP_ROOT = 'src/pages';
const WORKSHOP_GLOB = resolve(
  WORKSHOP_ROOT,
  '**',
);
const WORKSHOP_INDEX = resolve(
  WORKSHOP_ROOT,
  'index.ts',
);

const DEPTH = 1;

(async () => {
  try {
    const cwd = resolvePwd();
    const paths = await glob(
      [WORKSHOP_GLOB],
      {
        deep: DEPTH,
        onlyDirectories: true,
        cwd,
      },
    );

    console.log(paths);

    const file = paths.reduce(
      (a: string, path) => {
        const { base } = parse(path);
        const name =
          kebabToPascal(base);
        a = `${a}export { ${name} } from './${base}';\n`;
        return a;
      },
      '',
    );

    await writeFile(
      WORKSHOP_INDEX,
      file,
    );
  } catch (error: TError) {
    throw new Error(error);
  }
})();
