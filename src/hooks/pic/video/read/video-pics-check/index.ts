type TConfig = string[];
export const videoPicsCheck = (
  paramValues: TConfig
) => {
  return (
    Array.isArray(paramValues) &&
    paramValues.length > 0
  );
};
