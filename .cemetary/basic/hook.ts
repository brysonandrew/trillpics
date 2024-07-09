import { useMemo } from "react";

export const useBasicOscillator = ({
  context,
  ...options
}: TOConfig) => {
  const result = useMemo(() => {
    const create = () => {
      return {
        create,
        isStarted: false,
        oscillator: new OscillatorNode(
          context,
          options
        ),
      };
    };
    const ref = create();

    return {
      ...ref,
    };
  }, []);

  return result;
};
