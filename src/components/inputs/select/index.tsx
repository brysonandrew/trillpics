import { FC, Fragment } from "react";
import { cx } from "class-variance-authority";
import { IconsChevronsDown } from "~/components/icons/chevrons/down";
import { TSelectValues } from "~/components/inputs/select/types";
import clsx from "clsx";
import { SelectItem } from "~/components/inputs/select/item";
import { box } from "~uno/rules/box";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { InputsBox } from "~/components/inputs/box";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";
import { InputsBoxTitle } from "~/components/inputs/box/title";
import { resolveSquare } from "@brysonandrew/measure";
import {
  INPUTS_NUMBER_DROPDOWN_STYLE,
  INPUTS_NUMBER_DROPDOWN_STYLE_SM,
  INPUTS_NUMBER_DROPDOWN_TITLE_STYLE,
} from "~/components/inputs/constants";
import { TInputSizeProps } from "~/components/inputs/number/input";
import * as Select from "@radix-ui/react-select";

export type TInputsSelectProps =
  Select.SelectProps;
export type TBaseInputsSelectProps =
  Pick<
    TInputsSelectProps,
    "onValueChange" | "defaultValue"
  >;
type TProps = TInputsSelectProps &
  TInputSizeProps & {
    title?: string | JSX.Element;
    placeholder: string;
    values: TSelectValues;
  };
export const InputsSelect: FC<
  TProps
> = ({
  values,
  title,
  s = "md",
  placeholder,
  ...props
}) => {
  return (
    <Select.Root {...props}>
      <InputsBox>
        <Select.Trigger
          className={clsx(
            "column-start justify-start bg-black-2",
            "text-left text-xs font-slab",
            "truncate",
            "ring-0 outline-0",
            "bg-black-2"
            // "border border-white-01"
          )}
          aria-label={placeholder}
          style={{
            ...(s === "md"
              ? INPUTS_NUMBER_DROPDOWN_STYLE
              : INPUTS_NUMBER_DROPDOWN_STYLE_SM),
          }}
        >
          {title && (
            <InputsBoxTitle
              classValue={cx(
                "row",
                "bg-black-2",
                "border border-white-02"
              )}
              style={
                INPUTS_NUMBER_DROPDOWN_TITLE_STYLE
              }
            >
              {title}
            </InputsBoxTitle>
          )}
          <div
            className={cx(
              "w-full",
              s === "md"
                ? "column-start"
                : "row-space"
            )}
            style={{
              ...box.px(box._0125),
            }}
          >
            <TypographyXxxs
              classValue="truncate w-full"
              style={{
                height: box._05,
                lineHeight: `${
                  s === "md"
                    ? box._05
                    : box._05
                }px`,
              }}
            >
              <Select.Value
                placeholder={
                  placeholder
                }
              />
            </TypographyXxxs>

            <Select.Icon
              className="center"
              style={{
                ...resolveSquare(
                  s === "md"
                    ? box._05
                    : box._0375
                ),
              }}
            >
              <IconsChevronsDown />
            </Select.Icon>
          </div>
        </Select.Trigger>
      </InputsBox>

      <Select.Portal>
        <Select.Content
          position="popper"
          className={clsx(
            "column-stretch bg-black-02 backdrop-blur-lg z-20",
            "border border-white-02 my-2"
          )}
          align="center"
          side="top"
          style={{
            borderRadius: box.radius.m,
          }}
        >
          <Select.Viewport>
            {values.map(
              (value, index) => (
                <Fragment key={value}>
                  {index !== 0 && (
                    <LinesHorizontalLight />
                  )}
                  <SelectItem
                    classValue={cx(
                      "relative row-space cursor-pointer outline-none select-none",
                      "data-[highlighted]:bg-gray-02",
                      "overflow-hidden"
                    )}
                    value={value}
                    style={{
                      paddingTop:
                        box._0125,
                      paddingBottom:
                        box._0125,
                      paddingLeft:
                        box._0125,
                      paddingRight:
                        box._0125,
                      // borderRadius:
                      //   box.radius.l,
                    }}
                  >
                    {value}
                  </SelectItem>
                </Fragment>
              )
            )}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
