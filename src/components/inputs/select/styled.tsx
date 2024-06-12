import { FC } from "react";
import { cx } from "class-variance-authority";
import { IconsChevronsDown } from "~/components/icons/chevrons/down";
import { MusicLayout } from "~/pages/video/music/layout";
import { TSelectValues } from "~/components/inputs/select/types";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import clsx from "clsx";
import { LayoutBox } from "~/components/layout/box";
import { LayoutBoxPadding } from "~/components/layout/box/padding";
import { BackgroundMeshRadialFlat } from "~/components/layout/background/mesh-radial-flat";
import * as Select from "@radix-ui/react-select";

type TProps = Select.SelectProps & {
  title: string;
  values: TSelectValues;
};
export const SelectStyled: FC<
  TProps
> = ({
  values,
  title,
  value,
  ...props
}) => {
  const s = boxSize();
  const borderRadius = boxRadius("l");
  return (
    <Select.Root
      value={value}
      {...props}
    >
      <Select.Trigger
        className={cx(
          "font-slab text-left text-white dark:text-gray",
          "relative row-space outline-none select-none"
        )}
        aria-label={title}
      >
        <LayoutBox
          background={
            <BackgroundMeshRadialFlat />
          }
          {...props}
        >
          <LayoutBoxPadding
            style={{
              paddingLeft: s.m025,
            }}
          >
            <Select.Value
              placeholder={title}
            >
              {value}
            </Select.Value>
            <Select.Icon>
              <IconsChevronsDown />
            </Select.Icon>
          </LayoutBoxPadding>
        </LayoutBox>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="relative top-0 translate-y-10 w-full"
          position="popper"
          align="start"
          side="bottom"
          style={{ zIndex: 99 }}
        >
          <MusicLayout
            // classValue="text-lg font-slab"
            // style={{
            //   paddingLeft: 0,
            //   paddingRight: 0,
            // }}
          >
            <Select.Viewport>
              <Select.Group
                className={clsx(
                  "relative column-stretch bg-gray-02 backdrop-blur-lg"
                )}
                style={{
                  paddingTop: s.m0125,
                  paddingBottom:
                    s.m0125,
                  borderRadius,
                }}
              >
                {values
                  .filter(
                    (v) => v !== value
                  )
                  .map((value) => (
                    <Select.Item
                      key={value}
                      value={value}
                      className={cx(
                        "relative row-space cursor-pointer outline-none select-none",
                        "data-[highlighted]:bg-black-05"
                      )}
                      style={{
                        paddingLeft:
                          s.m025,
                        paddingRight:
                          s.m025,
                        borderRadius,
                      }}
                    >
                      {value}
                    </Select.Item>
                  ))}
              </Select.Group>
            </Select.Viewport>
          </MusicLayout>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
