export const filterArrayOfObject = (
  data: any,
  columnFilters: any,
  searchKey?: string,
  isIdSearchIncluded?: boolean,
): any[] => {
  let filteredData = data
    ? [...data]
    : [];

  if (
    !columnFilters.length &&
    !searchKey
  )
    return filteredData;

  for (
    let index = 0;
    index < columnFilters.length;
    index++
  ) {
    const filter = columnFilters[index];

    if (
      filter?.condition === 'contains'
    ) {
      filteredData =
        filteredData.filter((item) =>
          item[filter?.key]
            ?.toString()
            ?.toLowerCase()
            ?.includes(
              filter?.value?.toLowerCase(),
            ),
        );
    }
  }

  if (searchKey) {
    filteredData = filteredData.filter(
      (item) => {
        let keep = false;

        for (const key in item) {
          if (
            item[key]
              ?.toString()
              ?.toLowerCase()
              ?.includes(
                searchKey
                  ?.toLowerCase()
                  ?.trim(),
              ) &&
            (isIdSearchIncluded
              ? true
              : key !== 'id')
          ) {
            keep = true;

            return keep;
          }
        }

        return keep;
      },
    );
  }

  return filteredData;
};
