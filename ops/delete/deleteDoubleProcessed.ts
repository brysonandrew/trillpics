import {
  COLLECTION_PATH,
  MAX_SUFFIX,
} from '../config';
import fg from 'fast-glob';
import { deletePaths } from './deletePaths';

(async () => {
  const GLOBS = [
    `${COLLECTION_PATH}/*.webp`,
    `${COLLECTION_PATH}/*-${MAX_SUFFIX}*.png`,
    `${COLLECTION_PATH}/*-[meta|output]*.md`,
  ];
  console.log(GLOBS);
  const paths = await fg(GLOBS);
  console.log(paths);
  // deletePaths(paths);
})();
