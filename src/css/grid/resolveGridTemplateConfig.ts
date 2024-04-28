import { TGrid } from './config';

export const resolveGridTemplateConfig =
  <K extends string>(
    cells: TGrid<K>,
  ) => {
    const stats: {
      prevColCellCount: number | null;
      columns: number[];
      rowCount: number;
    } = {
      prevColCellCount: null,
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
        typeof stats.prevColCellCount ===
          'number' &&
        stats.prevColCellCount !== count
      ) {
        console.error(
          'Invalid col cell count ',
          `prev: ${stats.prevColCellCount}`,
          `next: ${count}`,
        );
      }
      stats.prevColCellCount = count;

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
      colCount: stats.prevColCellCount,
      rowCount: stats.rowCount,
    };
  };

export type TGridConfig<
  K extends string,
> = ReturnType<
  typeof resolveGridTemplateConfig<K>
>;
