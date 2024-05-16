import { FC } from "react";
import { HomeFooter } from "~/pages/home/_footer";
import { HomeCursor } from "~/pages/home/cursor";

export const Home: FC = () => {
  return (
    <>
      <HomeCursor />
      <HomeFooter />
 
    </>
  );
};
{
  /* <AnimatePresence>
        {hoverPicProps && (
          <VideoPic
            {...hoverPicProps}
            videoPics={videoPics}
            style={{
              y: scrollY,
              left:
                hoverPicProps
                  .column * table.size,
              top:
                hoverPicProps.row *
                table.size,
              ...resolveSquare(
                table.size
              ),
            }}
            {...PRESENCE_OPACITY_ANIMATE_DELAY_02}
          />
        )}
      </AnimatePresence> */
}
