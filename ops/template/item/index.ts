import { commaTrail } from "~ops/template/end/comma";
import { wrapQuote } from "~ops/template/wrap/quote";

type TItem = string | object
type TItems = TItem[];

export const resolveTemplateItem = (
  item: TItem
) =>
  `${commaTrail(
    typeof item === "string"
      ? wrapQuote(item)
      : JSON.stringify(item, null, 2)
  )}
`;

export const resolveTemplateItems = (
  items: TItems
) => items.map(resolveTemplateItem);
