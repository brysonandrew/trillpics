import { useEffect } from "react";
import { usePicVideoReadCount } from "~/hooks/pic/video/read/count/hook";
import { useAddRandomHandler } from "~/hooks/pic/add-random/handler";

export const useAddRandomEffect =
  () => {
    const [_,handleAddRandom] =
      useAddRandomHandler();
    const count =
      usePicVideoReadCount();
    useEffect(() => {
      if (count === 0) {
        handleAddRandom();
      }
    }, [count]);
  };
