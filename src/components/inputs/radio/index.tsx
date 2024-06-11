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
        "flex flex-row",
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
        "relative text-gray-5 p-1 grow shrink-0",
        "data-[state=checked]:text-main data-[state=checked]:bg-main",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="absolute inset-1 bg-gray opacity-20" />
      <span className="relative">
        {props.value}
      </span>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName =
  RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
