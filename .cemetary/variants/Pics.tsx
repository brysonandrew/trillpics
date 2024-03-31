import { Item } from "@components/pics/item";
import { useViewport } from "@shell/providers/context/viewport";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { P86Y } from "@brysonandrew/space";
import { resolveConfigFromSize } from "@components/pics/pic/resolveDimensionsFromSize";
import { useVideoStore } from "@store/index";

export const Pics = () => {
  const { videoPics } = useVideoStore();
  const { isDarkMode } = useDarkMode();
  const { size, colsCount } =
    useViewport();
  if (size === 0) return <P86Y />;
  return (
    <>
      {videoPics.map((name, index) => {
        const colIndex =
          index % colsCount;

        const imageConfig =
          resolveConfigFromSize({
            size,
            colIndex,
          });

        return (
          <Item
            key={name}
            isShop
            canvas={
              isDarkMode
                ? "black"
                : "white"
            }
            src={name}
            imageConfig={imageConfig}
          />
        );
      })}
    </>
  );
};
