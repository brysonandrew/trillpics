export const resolveTypeDeclaration = <T extends string>(
  name: T
) => `: ${name}` as const;
