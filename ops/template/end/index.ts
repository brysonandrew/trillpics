export const templateEnd = <
  T extends string
>(
  content: T
) => {
  return `${content};\n` as const;
};
