type TQueryValue = number | string | string[];
export type TQueryRecord = Record<string, TQueryValue>;
export type TQueryRecordEntry = [string, TQueryValue];

export const resolveQueryParams = (queryRecord: TQueryRecord) => {
  let arrayQueries: string[] = [];
  const stringQuery: Record<string, string> = {};

  const entries: TQueryRecordEntry[] = Object.entries(queryRecord);
  entries.forEach(([key, value]: TQueryRecordEntry) => {
    if (Array.isArray(value)) {
      const next = value.reduce((a: string[], arrayValue: string) => {
        a.push(`${key}=${arrayValue}`);
        return a;
      }, []);
      arrayQueries = [...arrayQueries, ...next];
    } else if (value) {
      stringQuery[key] = value.toString();
    }
  });

  const stringifiedStringValueQuery: string = new URLSearchParams({
    ...({ ...stringQuery /* , open: FILTER_PARAM_KEY */ } ?? {}),
  }).toString();

  const result = [stringifiedStringValueQuery, ...arrayQueries].filter(Boolean).join('&');
  if (result) {
    return `?${result}`;
  } else {
    return '';
  }
};
