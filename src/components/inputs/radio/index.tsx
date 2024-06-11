import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import clsx from "clsx";
import {
  forwardRef,
  ElementRef,
  ComponentPropsWithoutRef,
} from "react";

const RadioGroup = forwardRef<
  ElementRef<
    typeof RadioGroupPrimitive.Root
  >,
  ComponentPropsWithoutRef<
    typeof RadioGroupPrimitive.Root
  >
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={clsx(
        "flex flex-row gap-2",
        className
      )}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName =
  RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = forwardRef<
  ElementRef<
    typeof RadioGroupPrimitive.Item
  >,
  ComponentPropsWithoutRef<
    typeof RadioGroupPrimitive.Item
  >
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={clsx(
        "relative border-_neutral-200 text-gray-5 rounded-md border p-2 grow shrink-0 max-w-40 min-w-12",
        "data-[state=checked]:text-black data-[state=checked]:bg-white",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="absolute inset-1 rounded-md bg-gray" />
      <span className="relative">
        {props.value}
      </span>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName =
  RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
