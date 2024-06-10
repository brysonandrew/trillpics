import { FC } from "react";
import { cx } from "class-variance-authority";
import { MusicRowsLayout } from "~/pages/video/music/rows/layout";
import * as Select from "@radix-ui/react-select";

type TProps = {
  title?: string;
  values: string[];
};
export const AspectRatioSelectGroup: FC<
  TProps
> = ({ title, values }) => {
  return (
    <MusicRowsLayout>
      <Select.Group className="py-0.5">
        {title && (
          <Select.Label className="py-1 px-2 font-medium">
            {title}
          </Select.Label>
        )}
        {values.map((value) => (
          <Select.Item
            key={value}
            value={value}
            className={cx(
              "relative flex flex-row items-center justify-between py-2 px-4 cursor-pointer outline-none select-none",
              "data-[highlighted]:bg-black rounded-editor"
            )}
          >
            {value}
          </Select.Item>
        ))}
      </Select.Group>
    </MusicRowsLayout>
  );
};
