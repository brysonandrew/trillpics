import {
  PropsWithChildren,
  useRef,
  createContext,
  useContext,
  FC,
  useMemo,
  useState,
} from "react";
import { useMotionValue } from "framer-motion";
import { TRefMutable } from "~/hoc/ref/mutable";
import { useOnscreen } from "~/context/hooks/onscreen";
import { useBlur } from "~/context/blur";
import { useCursor } from "~/context/cursor";
import {
  TVirtualizeContext,
  TGridHandle,
  TOriginValue,
} from "~/context/types";
import { useScrollUpdateHandler } from "~/context/scroll/update";
import { useFonts } from "~/context/fonts";
import {
  TUiValue,
  useUi,
} from "~/context/ui";

const VirtualizeContext = createContext(
  {} as TVirtualizeContext
);

export const useContextGrid = () =>
  useContext(VirtualizeContext);

export type TVirtualizeContextProviderProps =
  PropsWithChildren;
export const VirtualizeContextProvider: FC<
  TVirtualizeContextProviderProps
> = ({ children }) => {
  const [originValue, updateOrigin] =
    useState<TOriginValue>(null);
  const [footerValue, updateFooter] =
    useState<TUiValue>(null);

  const isOnscreen = useOnscreen();
  const ref: TRefMutable<TGridHandle> =
    useRef<TGridHandle | null>(null);

  const fonts = useFonts();
  const blur = useBlur();
  const cursor = useCursor();
  const ui = useUi();
  const scrollY = useMotionValue(0);
  const main = useMemo(() => {
    return {
      cursor,
      blur,
      ui,
      origin: {
        value: originValue,
        update: updateOrigin,
      },
    };
  }, []);
  if (
    main.origin.value === null &&
    originValue !== null
  ) {
    main.origin.value = originValue;
  }
  const { handler: handleScroll } =
    useScrollUpdateHandler({
      scrollY,
      ref,
    });
  return (
    <VirtualizeContext.Provider
      value={{
        scrollY,
        isOnscreen,
        ref,
        main,
        fonts,
        onScroll: handleScroll,
        footerValue,
        updateFooter,
      }}
    >
      {children}
    </VirtualizeContext.Provider>
  );
};
