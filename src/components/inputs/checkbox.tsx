import {
  forwardRef,
  ElementRef,
  ComponentPropsWithoutRef,
} from "react";
import clsx from "clsx";
import { IconsCheckboxEmpty } from "~/components/icons/inputs/checkbox/empty";
import { IconsCheckboxChecked } from "~/components/icons/inputs/checkbox/checked";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

const Checkbox = forwardRef<
  ElementRef<
    typeof CheckboxPrimitive.Root
  >,
  ComponentPropsWithoutRef<
    typeof CheckboxPrimitive.Root
  >
>(
  (
    { className, checked, ...props },
    ref
  ) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={clsx(
        className
      )}
      checked={checked}
      {...props}
    >
      {!checked && (
        <div className="data-[state=checked]:bg-red size-23 brightness-40">
          <IconsCheckboxEmpty className="size-4" />
        </div>
      )}
      <CheckboxPrimitive.Indicator
        className={clsx(
          "flex items-center justify-center text-current"
        )}
      >
        <IconsCheckboxChecked className="size-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
);
Checkbox.displayName =
  CheckboxPrimitive.Root.displayName;

export { Checkbox };
