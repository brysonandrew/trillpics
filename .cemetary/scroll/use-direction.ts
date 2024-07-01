import { MutableRefObject, useEffect, useRef, useState} from "react";

type TConfig<T> = {
  targetRef?: MutableRefObject<T | null>;
};
export const useScrollDirection = <T extends HTMLElement>({
  targetRef,
}: TConfig<T>) => {
  const [isForward,setForward] = useState<boolean|null>(null)
  const scrollRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const next =
        targetRef?.current?.scrollTop ?? window.scrollY;
      if (
        next > scrollRef.current &&
        !isForward
      ) {
        setForward(true);
      } else if (
        next < scrollRef.current &&
        isForward
      ) {
        setForward(false);
      }
      scrollRef.current = next;
    };
    (targetRef?.current ?? window).addEventListener(
      "scroll",
      handleScroll
    );
    return () => {
      (targetRef?.current ?? window).removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return isForward;
};
