import {
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
  TFoundationValue,
  TVirtualizeContextProviderProps,
} from "~/context/types";
import { useScrollUpdateHandler } from "~/context/scroll/update";
import { useFonts } from "~/context/fonts";
import { useMove } from "~/context/hooks/move";
import { useDragger } from "~/context/dragger";

const VirtualizeContext = createContext(
  {} as TVirtualizeContext
);

export const useContextGrid = () =>
  useContext(VirtualizeContext);

export const VirtualizeContextProvider: FC<
  TVirtualizeContextProviderProps
> = ({ children, screen }) => {
  const [
    foundationValue,
    updateFoundation,
  ] = useState<TFoundationValue>(null);
  const isOnscreen = useOnscreen();
  const ref: TRefMutable<TGridHandle> =
    useRef<TGridHandle | null>(null);
  const fonts = useFonts();
  const blur = useBlur();
  const cursor = useCursor();
  const dragger = useDragger();
  const scrollY = useMotionValue(0);

  const main = useMemo(() => {
    return {
      cursor,
      dragger,
      blur,
    };
  }, []);

  const resetLayout = () => {
    updateFoundation(null);
  };

  const { handler: handleScroll } =
    useScrollUpdateHandler({
      scrollY,
      ref,
      main,
    });
  const isIdle = useMove({
    main,
    isOnscreen,
    scrollY,
  });

  return (
    <VirtualizeContext.Provider
      value={{
        isIdle,
        isOnscreen,
        scrollY,
        ref,
        main,
        fonts,
        dragger,
        onScroll: handleScroll,
        foundationValue,
        updateFoundation,
        resetLayout,
        screen,
      }}
    >
      {children}
    </VirtualizeContext.Provider>
  );
};
