export const sortArrayOfObject: any = (
  data: any,
  field: any,
  order: any,
  secondaryField: any,
) => {
  let sortedData: any[] = [];

  if (data?.length > 0) {
    sortedData = [...data];
  }

  if (field === 'display_id') {
    field = 'id'; // Convert "display_id" to "id" because "display_id" is string and "id" is number
  }

  sortedData?.sort((a, b) => {
    // Extract the field values to compare
    const valueA = secondaryField
      ? a[field] > a[secondaryField]
        ? a[field]
        : a[secondaryField]
      : a[field];
    const valueB = secondaryField
      ? b[field] > b[secondaryField]
        ? b[field]
        : b[secondaryField]
      : b[field];

    if (
      typeof valueA === 'number' &&
      typeof valueB === 'number'
    ) {
      // Compare the field values as numbers
      return order === 'asc'
        ? valueA - valueB
        : valueB - valueA;
    } else if (
      typeof valueA === 'string' &&
      typeof valueB === 'string'
    ) {
      // Compare the field values as strings
      return order === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    } else {
      // Handle mixed type scenario by treating numbers as smaller than strings
      if (typeof valueA === 'number') {
        return -1; // valueA is a number, so it comes first
      } else if (
        typeof valueB === 'number'
      ) {
        return 1; // valueB is a number, so it comes first
      } else {
        // Both values are non-numeric strings, compare them as strings
        const stringA = String(valueA);
        const stringB = String(valueB);
        return order === 'asc'
          ? stringA.localeCompare(
              stringB,
            )
          : stringB.localeCompare(
              stringA,
            );
      }
    }
  });

  return sortedData;
};
