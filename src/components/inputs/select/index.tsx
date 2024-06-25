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
import * as Select from "@radix-ui/react-select";

type TProps = Select.SelectProps & {
  title: string;
  placeholder: string;
  values: TSelectValues;
};
export const InputsSelect: FC<
  TProps
> = ({
  values,
  title,
  placeholder,
  ...props
}) => {
  return (
    <InputsBox title={title}>
      <Select.Root {...props}>
        <Select.Trigger
          className={clsx(
            "row border border-white-02 bg-black-02",
            "text-center text-xs font-slab",
            "bg-black-02 backdrop-blur-lg"
          )}
          aria-label={placeholder}
          style={{
            gap: box.m025,
            borderRadius: box.radius.m,
            ...box.py(box.m00625),
            ...box.px(box.m0125),
            paddingLeft: box.m025,
          }}
        >
          <TypographyXxxs>
            <Select.Value
              placeholder={placeholder}
            />
          </TypographyXxxs>

          <Select.Icon className="SelectIcon">
            <IconsChevronsDown />
          </Select.Icon>
        </Select.Trigger>
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
              borderRadius:
                box.radius.m,
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
                          box.m0125,
                        paddingBottom:
                          box.m0125,
                        paddingLeft:
                          box.m0125,
                        paddingRight:
                          box.m0125,
                        borderRadius:
                          box.radius.l,
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
    </InputsBox>
  );
};
