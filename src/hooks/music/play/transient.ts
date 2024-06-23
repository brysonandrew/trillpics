import {
  useRef,
  useEffect,
} from "react";
import { useTrillPicsStoreBase } from "~/store/middleware";
type TConfig = any;

export const useTransientPlayingKeys =
  () => {
    const playingKeys = useRef(
      useTrillPicsStoreBase.getState()
        .playingKeys
    );
    useEffect(
      () =>
        useTrillPicsStoreBase.subscribe(
          (state) =>
            (playingKeys.current =
              state.playingKeys)
        ),
      []
    );

    return playingKeys;
  };
