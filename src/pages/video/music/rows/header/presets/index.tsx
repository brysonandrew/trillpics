import { FC } from "react";
import { cx } from "class-variance-authority";
import { AspectRatioSelectBorder } from "~/pages/video/music/rows/header/presets/border";
import { AspectRatioSelectGroup } from "~/pages/video/music/rows/header/presets/group";
import { IconsChevronsDown } from "~/components/icons/chevrons/down";
import { MusicRowsLayout } from "~/pages/video/music/rows/layout";
import * as Select from "@radix-ui/react-select";

type TProps = Select.SelectProps & {
  values: string[];
};
export const MusicRowsPresets: FC<
  TProps
> = ({ values, ...props }) => {

  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <Select.Root {...props}>
        <Select.Trigger
          className={cx(
            "font-slab text-left text-sm text-white dark:text-gray",
            "relative flex flex-row items-center justify-between outline-none select-none"
          )}
          aria-label="Preset"
        >
          <AspectRatioSelectBorder />
          <MusicRowsLayout>
            <Select.Value placeholder="Preset">
              {props.value}
            </Select.Value>
            <Select.Icon>
              <IconsChevronsDown className="size-5" />
            </Select.Icon>
          </MusicRowsLayout>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="relative -translate-y-2 rounded-editor overflow-hidden py-1 px-2 w-full"
            position="popper"
            align="center"
            side="top"
            style={{ zIndex: 99 }}
          >
            <AspectRatioSelectBorder />
            <Select.Viewport>
              <AspectRatioSelectGroup
                values={values}
              />
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};
