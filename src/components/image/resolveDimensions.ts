import {
  TElement,
  TReplacedElement,
} from '@t/dom';
import { TDimensions } from '@t/measure';

export const resolveDimensions = <
  T extends
    | TReplacedElement
    | TElement
    | TDimensions,
>(
  element: T | null,
) => {
  let width = 0;
  let height = 0;
  if (element) {
    width =
      (element as T as HTMLImageElement)
        .naturalWidth ??
      (element as TElement)
        .clientWidth ??
      (element as TDimensions).width;
    height =
      (element as HTMLImageElement)
        .naturalHeight ??
      (element as TElement)
        .clientHeight ??
      (element as TDimensions).height;
  }
  if (width > 0 && height > 0) {
    return { width, height };
  }
  return null;
};
