import type { FC } from "react";
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { IconsCheckboxChecked } from "~/components/icons/inputs/checkbox/checked";
import { IconsCheckboxEmpty } from "~/components/icons/inputs/checkbox/empty";
import { BackgroundGlass } from "~/components/layout/background/glass";
import {
  AUDIO_SRC_KEY,
  AUDIO_START_PARAM_KEY,
  QUERY_PARAM_KEYS,
} from "~/hooks/pic/constants";
import { resolveVideoReadAudio } from "~/hooks/pic/video/read/audio";
import { AudioUploadedItem } from "~/pages/video/music/audio/uploaded/item";
import { TRACKS } from "~/pages/video/music/constants";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { box } from "~uno/rules/box";

export const AudioPlaylist: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] =
    useSearchParams();
  const audio = resolveVideoReadAudio(
    searchParams
  );
  return (
    <ul
      className="column-stretch"
      style={{ gap: box._075 }}
    >
      {TRACKS.map((track) => {
        const isSelected =
          audio?.src === track.src;
        return (
          <li
            key={track.src}
            className="relative text-white dark:bg-black-2 bg-transparent row-stretch"
            style={{ gap: box._05, ...box.p(box._025) }}
          >
            <PlayerBackgroundOpaque />
            <BackgroundGlass />
            <AudioUploadedItem
              name={track.title}
              src={track.src}
            >
              {(elapsed) => (
                <button
                  onClick={() => {
                    if (isSelected) {
                      searchParams.delete(
                        QUERY_PARAM_KEYS[
                          AUDIO_SRC_KEY
                        ]
                      );
                      searchParams.delete(
                        QUERY_PARAM_KEYS[
                          AUDIO_START_PARAM_KEY
                        ]
                      );
                    } else {
                      searchParams.set(
                        QUERY_PARAM_KEYS[
                          AUDIO_SRC_KEY
                        ],
                        track.src
                      );
                      searchParams.set(
                        QUERY_PARAM_KEYS[
                          AUDIO_START_PARAM_KEY
                        ],
                        elapsed.toString()
                      );
                    }
                    navigate(
                      `${pathname}?${searchParams}`
                    );
                  }}
                >
                  {isSelected ? (
                    <IconsCheckboxChecked />
                  ) : (
                    <IconsCheckboxEmpty />
                  )}
                </button>
              )}
            </AudioUploadedItem>
          </li>
        );
      })}
    </ul>
  );
};
