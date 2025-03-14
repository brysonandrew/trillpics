import { forwardRef } from "react";
import clsx from "clsx";
import { IconsCheckboxChecked } from "~/components/icons/inputs/checkbox/checked";
import {
  TClassValueProps,
  TDivProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { box } from "~uno/rules/box";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";
import * as Select from "@radix-ui/react-select";

type TProps = TPropsWithChildren<
  TClassValueProps &
    Select.SelectItemProps &
    TDivProps
>;
export const SelectItem = forwardRef<
  HTMLDivElement,
  TProps
>(
  (
    {
      children,
      classValue,
      style,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <Select.Item
        className={clsx(
          "row grow",
          classValue
        )}
        style={{
          gap: box._025,
          ...style,
        }}
        {...props}
        ref={forwardedRef}
      >
        <TypographyXxxs>
          <Select.ItemText>
            {children}
          </Select.ItemText>
        </TypographyXxxs>
        <Select.ItemIndicator>
          <IconsCheckboxChecked />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
