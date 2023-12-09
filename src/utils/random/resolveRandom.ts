export const resolveRandom = <T>(items: readonly T[]): T => items[
  ~~(items.length * Math.random())
];