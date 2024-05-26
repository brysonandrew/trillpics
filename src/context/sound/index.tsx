import {
  createContext,
  FC,
  useContext,
  useMemo,
} from "react";

type TSoundContext = {
  context: AudioContext;
  master: GainNode;
};

const Context =
  createContext<TSoundContext>(
    {} as TSoundContext
  );
export const useSoundContext =
  (): TSoundContext =>
    useContext<TSoundContext>(Context);
type TProviderProps = {
  children: JSX.Element | JSX.Element[];
};
export const SoundProvider: FC<
  TProviderProps
> = ({ children }) => {
  const value =
    useMemo<TSoundContext>(() => {
      const context =
        new AudioContext();
      const master =
        context.createGain()
        master.gain.value = 10;
      master.connect(
        context.destination
      );
      return {
        context,
        master,
      };
    }, []);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
