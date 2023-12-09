export const capitalize = (
  word: string | null,
) =>
  word
    ? `${word[0].toUpperCase()}${word
        .toLowerCase()
        .slice(1)}`
    : '';

export const kebabToTitle = (
  slug: string,
): string =>
  slug
    .split('-')
    .map(capitalize)
    .join(' ');

export const kebabToPascal = (
  slug: string,
): string =>
  slug
    .split('-')
    .map(capitalize)
    .join('');

export const pascalToTitle = (
  pascal: string,
): string =>
  pascal.split(/(?=[A-Z])/).join(' ');

export const camelToTitle = (
  pascal: string,
): string =>
  pascal
    .split(/(?=[A-Z])/)
    .map(capitalize)
    .join(' ');

export const titleToKebab = (
  slug: string,
): string =>
  slug
    .split(' ')
    .map((v) => v.toLowerCase())
    .join('-');
