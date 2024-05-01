export const upperCase = <
  I extends string
>(
  value: I
): Uppercase<I> =>
  value.toUpperCase() as Uppercase<I>;
export const titleToUpperSnake = <
  I extends string
>(
  title: I
) =>
  title
    .split(" ")
    .map(upperCase)
    .join("_");
const QUOTE = '"';
export const quoteWrap = (v: string) =>
  `${QUOTE}${v}${QUOTE}`;
export const commaTrail = (v: string) =>
  `${v},`;
type TItems = (string | object)[];
type TConfig = {
  name: string;
  items: TItems;
};
export const resolveTemplateItem = (
  item: string | object
) =>
  `${commaTrail(
    typeof item === "string"
      ? quoteWrap(item)
      : JSON.stringify(item, null, 2)
  )}
`;
export const resolveTemplateItems = (
  items: TItems
) => items.map(resolveTemplateItem);
export const initTemplateArray = (
  name: string
) =>
  `export const ${titleToUpperSnake(
    name
  )} = [
`;
export const endTemplateArray = () =>
  `
];`;
export const templateArray = ({
  name,
  items,
}: TConfig) =>
  `${initTemplateArray(
    name
  )}${resolveTemplateItems(items).join(`
`)}${endTemplateArray()}`;

export const templateArrayConst = (
  config: TConfig
) => {
  return `${templateArray(
    config
  )} as const;
`;
};
