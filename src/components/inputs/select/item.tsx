import { forwardRef } from "react";
import clsx from "clsx";
import { IconsCheckboxChecked } from "~/components/icons/inputs/checkbox/checked";
import {
  TClassValueProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { TypographyXxs } from "~/components/layout/typography/xxs";
import { box } from "~uno/rules/box";
import * as Select from "@radix-ui/react-select";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";

export const SelectItem = forwardRef<
  HTMLDivElement,
  TPropsWithChildren<
    TClassValueProps &
      Select.SelectItemProps
  >
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
          gap: box.m025,
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
