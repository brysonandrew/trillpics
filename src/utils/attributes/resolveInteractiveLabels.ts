import { TElementProps } from '@t/dom';

export type TInteractiveLabelProps = Pick<
  TElementProps,
  'title' | 'aria-label'
>;

export const resolveInteractiveLabels = (
  title: string,
): TInteractiveLabelProps => ({
  title,
  'aria-label': title,
});
