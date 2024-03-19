import { Item } from "@components/images/item";
import { useViewport } from "@shell/providers/context/viewport";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { resolveConfigFromSize } from "@components/images/image/resolveDimensionsFromSize";
import { PICS } from "../config/items";

export const Gallery = () => {
  const { isDarkMode } = useDarkMode();
  const { size, colsCount } =
    useViewport();
  return (
    <>
      {PICS.map((name, index) => {
        const imageConfig =
          resolveConfigFromSize({
            size,
            colIndex: index % colsCount,
          });

        return (
          <Item
            name={name}
            isShop
            canvas={
              isDarkMode
                ? "black"
                : "white"
            }
            imageConfig={imageConfig}
          />
        );
      })}
    </>
  );
};
