import { Item } from "@components/pics/item";
import { useViewport } from "@shell/providers/context/viewport";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { P86Y } from "@brysonandrew/space";
import { resolveConfigFromSize } from "@components/pics/pic/resolveDimensionsFromSize";
import { useBase } from "@shell/providers/context/base";

export const Pics = () => {
  const { pics } = useBase();
  const { isDarkMode } = useDarkMode();
  const { size, colsCount } =
    useViewport();
  if (size === 0) return <P86Y />;
  return (
    <>
      {pics.map((name, index) => {
        
        const key = `${name}`;
        const colIndex =
          index % colsCount;

        const imageConfig =
          resolveConfigFromSize({
            size,
            colIndex,
          });

        return (
          <Item
            key={key}
            isShop
            canvas={
              isDarkMode
                ? "black"
                : "white"
            }
            name={name}
            imageConfig={imageConfig}
          />
        );
      })}
    </>
  );
};
