export const resolveSetArray = (
  searchParams: URLSearchParams,
  key: string | null,
  nextValues: string[]
) => {
  if (!key) return;
  const isKey = searchParams.has(key);
  if (!isKey) return;
  const values =
    searchParams.getAll(key);
  if (!values) return;
  searchParams.delete(key);
  nextValues.forEach((value) => {
    searchParams.append(
      key,
      `${value}`
    );
  });
};
export type TResolveSetArrayResult =
  ReturnType<typeof resolveSetArray>;
