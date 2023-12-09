import { useState, useEffect } from 'react';

export const useHiddenColumns = (
  initHiddenColumns: string[],
  hiddenColumnsKey = 'hidden-columns',
) => {
  const hiddenColumnsState = useState(initHiddenColumns);
  const [hiddenColumns, setHiddenColumns] = hiddenColumnsState;

  useEffect(() => {
    const columns = localStorage.getItem(hiddenColumnsKey);
    if (columns) {
      setHiddenColumns(JSON.parse(columns));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(hiddenColumnsKey, JSON.stringify(hiddenColumns));
  }, [hiddenColumns]);

  return hiddenColumnsState;
};
