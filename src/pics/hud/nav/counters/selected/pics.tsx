import type { FC } from "react";
import { usePicVideoReadCount } from "~/hooks/pic/video/read/count/hook";
import { Counter } from "~/components/counter";

export const NavCountersSelectedPics: FC =
  () => {
    const count =
      usePicVideoReadCount();
    return (
      <Counter
        count={count}
        style={{scale:0.8}}
      />
    );
  };
