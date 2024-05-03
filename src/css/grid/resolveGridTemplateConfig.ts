import { TGrid } from './config';

export const resolveGridTemplateConfig =
  <K extends string>(
    cells: TGrid<K>,
  ) => {
    const stats: {
      prevColumnCellCount: number | null;
      columns: number[];
      rowCount: number;
    } = {
      prevColumnCellCount: null,
      columns: [],
      rowCount: 0,
    };
    let areaRows: string[] = [];

    for (const rows of cells) {
      let currCells: K[] = [];
      for (const cell of rows) {
        if (Array.isArray(cell)) {
          const [key, colSpan] = cell;
          currCells = [
            ...currCells,
            ...Array(colSpan).fill(key),
          ];
          continue;
        }
        currCells = [
          ...currCells,
          cell,
        ];
      }
      const count = currCells.length;
      if (
        typeof stats.prevColumnCellCount ===
          'number' &&
        stats.prevColumnCellCount !== count
      ) {
        console.error(
          'Invalid column cell count ',
          `prev: ${stats.prevColumnCellCount}`,
          `next: ${count}`,
        );
      }
      stats.prevColumnCellCount = count;

      stats.columns.push(count);
      stats.rowCount++;
      areaRows = [
        ...areaRows,
        `"${currCells.join(' ')}"`,
      ];
    }
    const gridTempateAreas =
      areaRows.join('\n');

    return {
      gridTempateAreas,
      columnCount: stats.prevColumnCellCount,
      rowCount: stats.rowCount,
    };
  };

export type TGridConfig<
  K extends string,
> = ReturnType<
  typeof resolveGridTemplateConfig<K>
>;
