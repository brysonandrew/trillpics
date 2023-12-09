export const resolveHash = (id: string) => `#${id}`;

export const resolveUrlId = (id: string) =>
  `url(${resolveHash(id)})`;
