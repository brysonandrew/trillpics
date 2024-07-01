import { useMemo } from "react";


type TDelayNodeKey = keyof Pick<
  DelayNode,
  "delayTime"
>;
type TDelayNodeConfig = {context:AudioContext} &
  Partial<
    Record<TDelayNodeKey, number>
  >;
export const useDelayNode = ({
  context,
  delayTime,
}: TDelayNodeConfig) => {
  const result = useMemo(() => {
    const d = context.createDelay();
    if (typeof delayTime === "number") {
      d.delayTime.value = delayTime;
    }
    return d;
  }, []);

  return result;
};
