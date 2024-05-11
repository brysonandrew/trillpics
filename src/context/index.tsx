import {
  PropsWithChildren,
  useRef,
  createContext,
  useContext,
  FC,
  useMemo,
} from "react";
import { useMotionValue } from "framer-motion";
import { TRefMutable } from "~/hoc/ref/mutable";
import { useOnscreen } from "~/context/hooks/onscreen";
import { useBlur } from "~/context/blur";
import { useCursor } from "~/context/cursor";
import {
  TVirtualizeContext,
  TGridHandle,
} from "~/context/types";
import { useScrollUpdateHandler } from "~/context/scroll/update";

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
  const isOnscreen = useOnscreen();
  const ref: TRefMutable<TGridHandle> =
    useRef<TGridHandle | null>(null);
  const blur = useBlur();
  const cursor = useCursor();
  const scrollY = useMotionValue(0);
  const main = useMemo(() => {
    return {
      cursor,
      blur,
    };
  }, []);
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
        onScroll: handleScroll,
      }}
    >
      {children}
    </VirtualizeContext.Provider>
  );
};
