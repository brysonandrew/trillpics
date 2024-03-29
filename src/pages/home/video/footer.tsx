import type { FC } from "react";
import { useVideoStore } from "src/store";

export const VideoFooter: FC = () => {
  const {
    isVideoMode,
    videoPics,
    removeVideo,
  } = useVideoStore();
  const videoPicsCount =
    videoPics.length;
  const isShown =
    isVideoMode || videoPicsCount > 0;
  if (!isShown) return null;
  return (
    <footer className="fixed left-0 bottom-0 right-0 w-full h-0 overflow-scroll">
      <ul className="row">
        {videoPics.map((name) => (
          <li key={`${name}`}>
            <button
              onClick={() =>
                removeVideo(name)
              }
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </footer>
  );
};
