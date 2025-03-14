import {
  useRef,
  createContext,
  useContext,
  FC,
  useState,
} from "react";
import { useMotionValue } from "framer-motion";
import { TRefMutable } from "~/hoc/ref/mutable";
import { useOnscreen } from "~/shell/ready/context/hooks/onscreen";
import { useScrollUpdateHandler } from "~/shell/ready/context/scroll/update";
import { useFonts } from "~/shell/ready/context/fonts";
import { useMove } from "~/shell/ready/context/hooks/move";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { usePicCell } from "~/hooks/pic/cell";
import {
  TFoundationValue,
  TGridHandle,
  TReadyContext,
  TReadyContextProviderProps,
} from "~/shell/ready/context/types";
import { useContextInit } from "~/shell/init/context";
import { useAddRandomHandler } from "~/hooks/pic/add-random/handler";

const ReadyContext = createContext(
  {} as TReadyContext
);

export const useContextReady = () =>
  useContext(ReadyContext);

export const ReadyContextProvider: FC<
  TReadyContextProviderProps
> = ({ children, screen }) => {
  const initContext = useContextInit();
  const [
    foundationValue,
    updateFoundation,
  ] = useState<TFoundationValue>(null);
  const isOnscreen = useOnscreen();
  const random=
  useAddRandomHandler();

  const ref: TRefMutable<TGridHandle> =
    useRef<TGridHandle | null>(null);
  const fonts = useFonts();
  const scrollTimeoutRef =
    useTimeoutRef();
  const scrollY = useMotionValue(0);

  const picCellResult = usePicCell(
    initContext.main,
    initContext.scrollY
  );

  const { move } = picCellResult;

  const resetLayout = () => {
    updateFoundation(null);
  };

  const { handler: handleScroll } =
    useScrollUpdateHandler({
      scrollY,
      scrollTimeoutRef,
      main:initContext.main
    });

  useMove({
    main: initContext.main,
    isOnscreen,
    move,
    scrollTimeoutRef,
  });

  return (
    <ReadyContext.Provider
      value={{
        ref,
        fonts,
        onScroll: handleScroll,
        foundationValue,
        updateFoundation,
        resetLayout,
        scrollTimeoutRef,
        screen,
        container: screen.container,
        random,

        ...picCellResult,
        ...initContext,
      }}
    >
      {children}
    </ReadyContext.Provider>
  );
};
