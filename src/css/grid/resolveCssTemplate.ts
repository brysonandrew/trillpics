import { TGridConfig } from './resolveGridTemplateConfig';

export const resolveCssTemplate = <
  K extends string,
>({
  gridTempateAreas,
  colCount,
  rowCount,
}: TGridConfig<K>) =>
  `grid-template-areas: ${gridTempateAreas};
grid-template-columns: repeat(${colCount}, minmax(0, 1fr));
grid-template-rows: repeat(${rowCount}, auto);`;
