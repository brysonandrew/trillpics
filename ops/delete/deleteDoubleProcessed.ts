import {
  COLLECTION_ASSETS_DIR,
  MAX_SUFFIX,
} from '../config';
import fg from 'fast-glob';
import { deletePaths } from './deletePaths';

(async () => {
  const GLOBS = [
    `${COLLECTION_ASSETS_DIR}/*.webp`,
    `${COLLECTION_ASSETS_DIR}/*-${MAX_SUFFIX}*.png`,
    `${COLLECTION_ASSETS_DIR}/*-[meta|output]*.md`,
  ];
  console.log(GLOBS);
  const paths = await fg(GLOBS);
  console.log(paths);
  // deletePaths(paths);
})();
