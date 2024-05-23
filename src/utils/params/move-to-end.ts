export const paramsMoveToEnd = (
  searchParams: URLSearchParams,
  key: string | null
) => {
  if (!key) return;
  const isKey = searchParams.has(key);
  if (!isKey) return;
  const value = searchParams.get(key);
  if (!value) return;
  searchParams.delete(key);
  searchParams.append(key, value);
  return true;
};
