import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { RemotionPlayer } from "~/components/remotion/player";
import { Helmet } from "react-helmet-async";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~/constants/box/size";
import { GRADIENT_MESH_COMMON, GRADIENT_MESH_DARK } from "~app/color/gradient/mesh";
export const OVERFLOW_HIDDEN =
  "overflow: hidden;";

export const VideoPlayer = () => {
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({
      screen,
    })
  );
  const s = boxSize();
  if (!screen.isDimensions) return null;
  const width =
    screen.container.width - s.m3;
  return (
    <>
      <Helmet>
        <title>
          Trill Pics | Viewing Room
        </title>
      </Helmet>
      <PicBackdrop />
      <div
        className="vplayer absolute h-screen _gradient-mesh"
        style={{
          // margin: `0 ${s.m15}px`,
          ...GRADIENT_MESH_COMMON,
          ...GRADIENT_MESH_DARK,
          top:
            screen.container.top +
            s.m15,
          left:
            screen.container.left +
            s.m15,
          width,
          // height: (width * 9) / 16,
        }}
      >
        <RemotionPlayer />
      </div>
    </>
  );
};
