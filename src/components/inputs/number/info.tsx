import type { FC } from "react";
import { TInputRangeProps } from "~/components/inputs/number";
import { inputsNumberFormat } from "~/components/inputs/number/format";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";
import { isDefined } from "~/utils/validation/is/defined";
import { box } from "~uno/rules/box";
const KEYS = [
  "min",
  "-",
  "step",
  "+",
  "max",
] as const;
export const InputsNumberInfo: FC<
  TInputRangeProps
> = (props) => {
  return (
    <ul className="row-space text-gray-5" style={{...box.px(box.m025), paddingTop: box.m0125}}>
      {KEYS.map((key) => {
        if (key === "+" || key === "-")
          return (
            <li key={key}>
              <TypographyXxxs classValue="text-left">
                {key}
              </TypographyXxxs>
            </li>
          );
        let value: string | number =
          props[key];
        if (!isDefined(value))
          return null;
        if (value === Infinity) {
          value = "∞";
        }
        return (
          <li key={key}>
            <TypographyXxxs classValue="text-left">
              {inputsNumberFormat(
                value
              )}
            </TypographyXxxs>
          </li>
        );
      })}
    </ul>
  );
};
