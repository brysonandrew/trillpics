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
  TFoundationValue,
  TElementValue,
} from "~/context/types";
import { useScrollUpdateHandler } from "~/context/scroll/update";
import { useFonts } from "~/context/fonts";
import { useUi } from "~/context/ui";
import { useMove } from "~/context/hooks/move";

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
  const [foundationValue, updateFoundation] =
    useState<TFoundationValue>(null);
  const [footerValue, updateFooter] =
    useState<TElementValue>(null);
  const [centerValue, updateCenter] =
    useState<TElementValue>(null);
  const [headerValue, updateHeader] =
    useState<TElementValue>(null);
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
    };
  }, []);

  const resetLayout = () => {
    updateFoundation(null);
    updateHeader(null);
    updateFooter(null);
  };

  const { handler: handleScroll } =
    useScrollUpdateHandler({
      scrollY,
      ref,
    });
  const isIdle = useMove({main,isOnscreen,scrollY});

  return (
    <VirtualizeContext.Provider
      value={{
        isIdle,
        scrollY,
        isOnscreen,
        ref,
        main,
        fonts,
        onScroll: handleScroll,
        headerValue,
        updateHeader,
        centerValue,
        updateCenter,
        foundationValue,
        updateFoundation,
        footerValue,
        updateFooter,
        resetLayout,
      }}
    >
      {children}
    </VirtualizeContext.Provider>
  );
};
