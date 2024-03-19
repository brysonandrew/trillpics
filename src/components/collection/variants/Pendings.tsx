import { FC } from "react";
import { Item } from "@components/images/item";
import { useViewport } from "@shell/providers/context/viewport";
import { TItemEntries } from "@shell/providers/context/checkout/config";
import { resolveConfigFromSize } from "@components/images/image/resolveDimensionsFromSize";

type TProps = {
  entries: TItemEntries;
};
export const Pendings: FC<TProps> = ({
  entries,
}) => {
  const { size, colsCount } =
    useViewport();

  return (
    <>
      {entries.map(
        ([src, items], index) => {
          const itemsCount =
            items.length;
          if (itemsCount === 0)
            return null;

          const imageConfig =
            resolveConfigFromSize({
              size,
              colIndex:
                index % colsCount,
            });
          return (
            <Item
              name={index}
              key={src}
              imageConfig={imageConfig}
              isShop={false}
              canvas={items[0].color}
              copies={items}
              count={itemsCount}
            />
          );
        }
      )}
    </>
  );
};
