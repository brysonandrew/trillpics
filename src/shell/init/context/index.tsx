import { createContext, useContext, FC, useMemo } from "react";
import { useMotionValue } from "framer-motion";
import { TInitContext, TInitContextProviderProps } from "~/shell/init/context/types";
import { useBlur } from "~/shell/init/context/blur";
import { useCursor } from "~/shell/init/context/cursor";
import { useDragger } from "~/shell/init/context/dragger";

const InitContext = createContext(
  {} as TInitContext
);

export const useInitContext = () =>
  useContext(InitContext);

export const InitContextProvider: FC<
  TInitContextProviderProps
> = ({ children }) => {
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

  return (
    <InitContext.Provider
      value={{
        scrollY,
        main,
      }}
    >
      {children}
    </InitContext.Provider>
  );
};
