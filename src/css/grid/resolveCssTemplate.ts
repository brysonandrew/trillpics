import { TGridConfig } from './resolveGridTemplateConfig';

export const resolveCssTemplate = <
  K extends string,
>({
  gridTempateAreas,
  columnCount,
  rowCount,
}: TGridConfig<K>) =>
  `grid-template-areas: ${gridTempateAreas};
grid-template-columns: repeat(${columnCount}, minmax(0, 1fr));
grid-template-rows: repeat(${rowCount}, auto);`;
