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
        // "relative border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground size-4 peer shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      checked={checked}
      {...props}
    >
      {!checked && (
        <div className="data-[state=checked]:bg-red size-23">
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
