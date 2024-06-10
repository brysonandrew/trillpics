"use client";

import * as React from "react";

import CheckIcon from "@/assets/icons/check.svg";
import ChevronLeftIcon from "@/assets/icons/chevron-left.svg";
import * as SelectPrimitive from "@radix-ui/react-select";
import clsx from "clsx";

const Select = SelectPrimitive.Root;

const SelectGroup =
  SelectPrimitive.Group;

const SelectValue =
  SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<
    typeof SelectPrimitive.Trigger
  >,
  React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.Trigger
  >
>(
  (
    { className, children, ...props },
    ref
  ) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={clsx(
        "bg-white text-md focus:border-primary-200 flex h-10 w-full items-center justify-between rounded-lg border border-gray-200 px-3.5 py-2.5 placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-slate-400 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronLeftIcon className="size-5 -rotate-90 opacity-50" />
    </SelectPrimitive.Trigger>
  )
);
SelectTrigger.displayName =
  SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<
    typeof SelectPrimitive.Content
  >,
  React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.Content
  >
>(
  (
    { className, children, ...props },
    ref
  ) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={clsx(
          "animate-in fade-in-80 bg-white relative z-50 min-w-[8rem] overflow-hidden rounded-lg border border-gray-200 text-gray-900 shadow-lg",
          className
        )}
        {...props}
      >
        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName =
  SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<
    typeof SelectPrimitive.Label
  >,
  React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.Label
  >
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={clsx(
      "py-1.5 pl-8 pr-2 text-sm font-semibold text-slate-900 dark:text-slate-300",
      className
    )}
    {...props}
  />
));
SelectLabel.displayName =
  SelectPrimitive.Label.displayName;

const SelectIcon = React.forwardRef<
  React.ElementRef<
    typeof SelectPrimitive.Icon
  >,
  React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.Icon
  >
>(
  (
    { className, children, ...props },
    ref
  ) => (
    <SelectPrimitive.Icon
      ref={ref}
      className={clsx(
        "shrink-0",
        className
      )}
      {...props}
    >
      {children}
    </SelectPrimitive.Icon>
  )
);
SelectIcon.displayName =
  SelectPrimitive.Icon.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<
    typeof SelectPrimitive.Item
  >,
  React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.Item
  >
>(
  (
    { className, children, ...props },
    ref
  ) => (
    <SelectPrimitive.Item
      ref={ref}
      className={clsx(
        "text-md relative flex cursor-default select-none items-center rounded-md py-2.5 pl-3 pr-4 font-medium outline-none hover:bg-gray-50 focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="flex gap-2">
        {children}
      </SelectPrimitive.ItemText>
      <span className="text-primary-600 absolute right-4 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  )
);
SelectItem.displayName =
  SelectPrimitive.Item.displayName;

const SelectSeparator =
  React.forwardRef<
    React.ElementRef<
      typeof SelectPrimitive.Separator
    >,
    React.ComponentPropsWithoutRef<
      typeof SelectPrimitive.Separator
    >
  >(({ className, ...props }, ref) => (
    <SelectPrimitive.Separator
      ref={ref}
      className={clsx(
        "-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700",
        className
      )}
      {...props}
    />
  ));
SelectSeparator.displayName =
  SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectIcon,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
