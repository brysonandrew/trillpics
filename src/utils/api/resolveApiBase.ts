export const resolveApiBase = () => {
  const envApiBase = import.meta.env.VITE_API_ROOT;
  if (import.meta.env.DEV && typeof envApiBase === 'string') {
    return envApiBase;
  }
  return '';
};
